var theBoard;

function newBoard(){
	deleteBoard();
	
	var startPosition = document.getElementById("startPosition").value;
	console.log("New board " + startPosition);
	var nums = startPosition.split(",");
	theBoard = board(nums);
	drawBoard(theBoard);
}

function drawBoard(aBoard){

	var dim = aBoard.dimension();

	var boardDiv = document.createElement("div");
	boardDiv.id = "board";
	document.body.appendChild(boardDiv);

	var nums = aBoard.numbers();

	for(var idx=0 ; idx<dim ; idx++){
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

function deleteBoard(){
	var boardDiv = document.getElementById("board");
	if (boardDiv != null){
		document.body.removeChild(boardDiv);
	}
}

function cellStyle(row, column, isBlank){
	var cellstyle = "font-family: sans-serif;"
	if( isBlank ){
		cellstyle += "background-color: green;";
	} else {
		cellstyle += "background-color: blue;";		
	}
	cellstyle += "position:absolute;";
	cellstyle += "height: 50px;";
	cellstyle += "width: 50px;";
	cellstyle += "text-align: center;";
	cellstyle += "float: left;";
	cellstyle += "border-radius: 3px;";		
	cellstyle += "margin: 5px;";
	cellstyle += "font-size: 250%;";
	cellstyle += "left: " + column * 55 + "px;";
	cellstyle += "top: " + (300 + row * 55) + "px;";
	return cellstyle;		
}

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

	that.blankCoordinates = function(){
		var blankValue = nums.length;
		var blankIndex;
		for (var idx=0; idx< nums.length; idx++ ){
			if( nums[idx] == blankValue){
				blankIndex = idx;
			}
		}
		var myRow = Math.floor(blankIndex/that.dimension());
		var myColumn = blankIndex%that.dimension();
		var coordinates = {
			row : myRow,
			column : myColumn
		};
		return coordinates;
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