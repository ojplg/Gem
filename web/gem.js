var theBoard;

function newBoard(){
	deleteBoard();
	
	var startPosition = document.getElementById("startPosition").value;
	console.log("New board " + startPosition);
	var nums = startPosition.split(",");
	theBoard = board(nums);
	drawBoard(theBoard);
}

function drawBoardMidSlide(aBoard,percent){
	var boardDiv = document.createElement("div");
	boardDiv.id = "board";
	document.body.appendChild(boardDiv);

	var nums = aBoard.numbers();
	var dim = aBoard.dimension();
  	var movingNumber = aBoard.lastMovedValue();
  	var fromCoordinates = aBoard.lastMovedCoordinates();
   
  	//console.log("Doing mid slide draw:" + movingNumber + "; percent:" + percent);
  	//console.log("From coordinates " + fromCoordinates.row + ", " + fromCoordinates.column);

	for(var idx=0; idx<nums.length; idx++){
		var row = Math.floor(idx/dim);
		var col = idx % dim;
		var num = nums[idx];
		var cell = document.createElement("div");
		if( nums[idx] == movingNumber ) {
			cell.innerText = nums[idx];
      		slidingCellStyle(cell, row, col, fromCoordinates.row, fromCoordinates.column, percent);
      		cell.id = "cell_" + nums[idx];
    	} else if ( nums[idx] < nums.length ){
			cell.innerText = nums[idx];
			styleCell(cell, row, col, false);
			cell.id = "cell_" + nums[idx];
		} 
		boardDiv.appendChild(cell);
	}	
}

function drawBoard(aBoard){
	var boardDiv = document.createElement("div");
	boardDiv.id = "board";
	document.body.appendChild(boardDiv);

	var nums = aBoard.numbers();
	var dim = aBoard.dimension();

	for(var idx=0; idx<nums.length; idx++){
		var row = Math.floor(idx/dim);
		var col = idx % dim;
		var num = nums[idx];
		var cell = document.createElement("div");
		if ( nums[idx] < nums.length ){
			cell.innerText = nums[idx];
			styleCell(cell, row, col, false);
			cell.id = "cell_" + nums[idx];
		} else {
			styleCell(cell, row, col, true);
			cell.id = "cell_blank";
		}
		boardDiv.appendChild(cell);
	}	
}

function deleteBoard(){
	var boardDiv = document.getElementById("board");
	if (boardDiv != null){
		document.body.removeChild(boardDiv);
	}
}

function styleCell(cell, row, column, isBlank){
  constantStyle(cell);
  if( isBlank ){
    cell.style.background = "blue";
  } else {
    cell.style.background = "green";
  }
  cell.style.left = (column * cellsize) + "px";
  cell.style.top = (cellVerticalOffset + row * cellsize) + "px";
}

function constantStyle(cell){
  cell.style.height = "50px";
  cell.style.width = "50px";
  cell.style.cssFloat = "left";
  cell.style.textAlign = "center";
  cell.style.borderRadius = "3px";
  cell.style.margin = "5px";
  cell.style.fontSize = "250%";
  cell.style.fontFamily = "sans-serif";
  cell.style.position = "absolute";
}

function slidingCellStyle(cell, row, column, oldRow, oldColumn, percent){
  	constantStyle(cell);
  	//console.log("  moving rows " + oldRow + " to " + row);
  	//console.log("  moving columns " + oldColumn + " to " + column);
  	cell.style.background = "green";
	var colAdjust = computeAdjustment(column, oldColumn, 100 - percent);
	var rowAdjust = computeAdjustment(row, oldRow, 100-percent);
  	var newLeft = column * cellsize + colAdjust * cellsize /100;
  	var newTop = cellVerticalOffset + row * cellsize + rowAdjust * cellsize/100;
  	console.log("   At percent " + percent + " newLeft is " + newLeft + " new top is " + newTop);
	cell.style.left = newLeft + "px"
	cell.style.top = newTop +  "px"
}

function computeAdjustment(index, oldIndex, percent){
	var adjust = 0;
	if( index < oldIndex ){
		adjust = percent;
	} else if ( index > oldIndex){
		adjust = -percent;
	}
	return adjust;
}

var cellsize = 55;
var cellVerticalOffset = 300;

var remainingMoveList;

function doMovesFast(){
	var moveListString = document.getElementById("moves").value.replace(/\s/g, '');
	console.log("Doing move list " + moveListString);
	var moveList = moveListString.split(",");
	var numberMoves = moveList.length;
	var remainingMoveList = moveList;

  var totalmoves = moveList.length;
  var moveCount = 0;

	function step(timestamp){
    console.log("Doing move " + moveCount + " of " + totalmoves);
		var move = remainingMoveList.shift();
		deleteBoard();
		drawBoardMove(move);
		if(remainingMoveList.length > 0){
			window.requestAnimationFrame(step);
		}
	}
	window.requestAnimationFrame(step);
}

function doMoves(){
	var moveListString = document.getElementById("moves").value.replace(/\s/g, '');
	console.log("Doing move list " + moveListString);
	var moveList = moveListString.split(",");
	var numberMoves = moveList.length;
	var remainingMoveList = moveList;

    var totalmoves = moveList.length;
  	var moveCount = 0;

  	var start = null;
  	var percent = 0; 

	function step(timestamp){
		if( ! start ) { start = timestamp; }
		console.log("Doing move " + moveCount + " of " + totalmoves + " at percent " + percent);
    
    	var stillMoves = true;

    	if( percent == 0 ){
      		var move = moveList[moveCount];
      		if (move != null){
        		doMove(move);
  	  		} else {
  	  			stillMoves = false;
  	  		}
      		console.log("Grabbed move " + move);
    	}
    	if( stillMoves ){
	    	if( percent < 100 ){
		    	deleteBoard();
	     	 	drawBoardMidSlide(theBoard,percent);
	      		percent += 5;    
	    	} 
			if(percent <= 100 && moveCount < totalmoves){
	      		console.log("ANIMATING: " + moveCount + ", " + percent + " at " + new Date().getTime());
	      		window.setTimeout(
		  			function() { window.requestAnimationFrame(step); },
		  			25
		  		);
			} 
	    	if ( percent == 100 ) {
	    		deleteBoard();
	    		drawBoard(theBoard);
	      		percent = 0;
	      		moveCount++;
	      		console.log("incremented moveCount to " + moveCount );
	    	}
    	}
	}
	window.requestAnimationFrame(step);
	//drawBoard(theBoard);
}

function doMove(move){
	switch(move){
		case "Up": theBoard.up();
		break;
		case "Dn": theBoard.down();
		break;
		case "Lft": theBoard.left();
		break;
		case "Rt": theBoard.right();
		break;
	}	
}

var board = function(nums) {
	var that = {};

	that.dimension = function () {
		return Math.sqrt(nums.length);
	};

	that.length = function() {
		return nums.length;
	}

	that.numbers = function(){
		return nums;
	}

	that.valueAt = function(row, column){
		var index = that.dimension() * row + column;
		return nums[index];
	}

	that.coordinatesOf = function(value){
		var valueIndex;
		for (var idx=0; idx< nums.length; idx++ ){
			if( nums[idx] == value){
				valueIndex = idx;
			}
		}
		var myRow = Math.floor(valueIndex/that.dimension());
		var myColumn = valueIndex%that.dimension();
		var coordinates = {
			row : myRow,
			column : myColumn
		};
		return coordinates;
	}

	that.blankCoordinates = function(){
		var blankValue = nums.length;
		return that.coordinatesOf(blankValue);
	}

	that.up = function(){
		var blankSpot = that.blankCoordinates();
		that.swap(that.valueAt(blankSpot.row - 1, blankSpot.column));
	}

	that.left = function(){
		var blankSpot = that.blankCoordinates();
		that.swap(that.valueAt(blankSpot.row, blankSpot.column - 1));		
	}

	that.right = function(){
		var blankSpot = that.blankCoordinates();
		that.swap(that.valueAt(blankSpot.row, blankSpot.column + 1));		
	}

	that.down = function(){
		var blankSpot = that.blankCoordinates();
		that.swap(that.valueAt(blankSpot.row + 1, blankSpot.column));		
	}

  that.lastMovedValue = function(){
    return that.movedValue;
  }
 
  that.lastMovedPosition = function(){
    return that.movedPosition;
  }

  that.lastMovedCoordinates = function() {
    var oldRow = Math.floor(that.movedPosition/that.dimension());
    var oldColumn = that.movedPosition%that.dimension();
    var coordinates = {
      row: oldRow,
      column: oldColumn
    }
    return coordinates;
  }

	that.swap = function(num){
		var newOrder = [];
    that.movedValue = num;
		for(var idx=0; idx<nums.length; idx++){
			if(nums[idx] == num){
        that.movedPosition = idx;
				newOrder[idx] = nums.length;
			} else if (nums[idx]==nums.length){
				newOrder[idx] = num;
			} else {
				newOrder[idx] = nums[idx];
			}
		}
		nums = newOrder;
	}

	return that;
}
