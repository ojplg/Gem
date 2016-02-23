var theBoard;

function newBoard(){
	deleteBoard();
	
	var startPosition = document.getElementById("startPosition").value;
	console.log("New board " + startPosition);
	var nums = startPosition.split(",");
	theBoard = board(nums);
	drawBoard(theBoard);
}

function drawBoardOld(aBoard){

	var dim = aBoard.dimension();

	var boardDiv = document.createElement("div");
	boardDiv.id = "board";
	document.body.appendChild(boardDiv);

	var nums = aBoard.numbers();

	for(var idx=0 ; idx<dim; idx++){
		for(var jdx=0; jdx<dim; jdx++){
			var index = idx * dim + jdx;
			var cell = document.createElement("div");
			if ( nums[index] < nums.length ){
				cell.innerText = nums[index];
				cell.style = cellStyle(idx, jdx, false);
				cell.id = "cell_" + nums[index];
			} else {
				cell.style = cellStyle(idx, jdx, true);
				cell.id = "cell_blank";
			}
			boardDiv.appendChild(cell);
		}
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

function slidingCellStyle(row, column, oldRow, oldColumn, percent){
	var cellstyle = baseCellStyle();
	cellstyle += "background-color: green;";
	var colAdjust = computeAdjustment(column, oldColumn, percent);
	var rowAdjust = computeAdjustment(row, oldRow, percent);
	cellstyle += "left: " + (column * cellsize + colAdjust * cellsize) +  "px;"
	cellstyle += "top: " + (column * cellsize + rowAdjust * cellsize) +  "px;"
	return cellstyle;
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

function doMoves(){
	var moveListString = document.getElementById("moves").value.replace(/\s/g, '');
	console.log("Doing move list " + moveListString);
	var moveList = moveListString.split(",");
	var numberMoves = moveList.length;
	var remainingMoveList = moveList;

	function step(timestamp){
		var move = remainingMoveList.shift();
		deleteBoard();
		drawBoardMove(move);
		if(remainingMoveList.length > 0){
			window.requestAnimationFrame(step);
		}
	}
	window.requestAnimationFrame(step);
}

function drawBoardMove(move){
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
	drawBoard(theBoard);	
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

	that.swap = function(num){
		var newOrder = [];
		for(var idx=0; idx<nums.length; idx++){
			if(nums[idx] == num){
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
