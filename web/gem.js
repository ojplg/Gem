function newBoard(){
	deleteBoard();
	
	var startPosition = document.getElementById("startPosition").value;
	var nums = startPosition.split(",");
	drawBoard(nums);
}

function drawBoard(nums){
	var length = nums.length;
	var dim = Math.sqrt(length);

	var board = document.createElement("div");
	board.id = "board";
	document.body.appendChild(board);

	for(var idx=0 ; idx<dim ; idx++){
		for(var jdx=0; jdx<dim; jdx++){
			var index = idx * dim + jdx;
			var cell = document.createElement("div");
			if ( nums[index] < nums.length ){
				cell.innerText = nums[index];
			}
			cell.style = cellStyle(idx, jdx);
			cell.id = "cell_" + nums[index];
			board.appendChild(cell);
		}
	}	
}

function deleteBoard(){
	var board = document.getElementById("board");
	if (board != null){
		document.body.removeChild(board);
	}
}

function cellStyle(row, column){
	var cellstyle = "font-family: sans-serif;"
	cellstyle += "background-color: green;";
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