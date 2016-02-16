function newBoard(){
	deleteBoard();
	
	var startPosition = document.getElementById("startPosition").value;
	var nums = startPosition.split(",");
	var aBoard = board(nums);
	drawBoard(aBoard);
}

function drawBoard(aBoard){

	console.log("A board " + aBoard);

	var dim = aBoard.dimension();

	console.log("dimension is " + dim);

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
	console.log("Value at 1,1 is " + aBoard.valueAt(1,1));
	console.log("Blank is at " + aBoard.blankCoordinates());
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
		cellstyle += "background-color: blue;";
	} else {
		cellstyle += "background-color: green;";		
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
	cellstyle += "top: " + (150 + row * 55) + "px;";
	return cellstyle;		
}

function doMoves(){
	console.log("Going to do some moving!");
	var blank = document.getElementById("cell_blank");
	console.log("Found the blank " + blank);

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

	return that;
}