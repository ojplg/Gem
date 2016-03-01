var demos = [

{
desc : "Move the blank to the right of the 1.",
speed : "Slow",
start : "8,15,14,9,1,5,6,11,10,3,12,7,2,4,16,13",
moves : "Lft,Up,Up"
}
,
{
desc : "Move the 1 tile to the last column.",
speed : "Slow",
start : "8,15,14,9,1,16,6,11,10,5,12,7,2,3,4,13",
moves : "Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft"
}
,
{
desc : "Move the 1 to its goal row.",
speed : "Slow",
start : "8,15,14,9,10,12,16,1,5,6,7,11,2,3,4,13",
moves : "Up,Rt,Dn,Lft,Up"
}
,
{
desc : "Move the 1 to its goal column.",
speed : "Slow",
start : "8,15,16,1,10,12,9,14,5,6,7,11,2,3,4,13",
moves : "Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt"
}
,
{
desc : "Fix the 2 and the three tiles.",
speed : "Fast",
start : "1,16,12,14,8,10,15,9,5,6,7,11,2,3,4,13",
moves : "Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt"
}
,
{
desc : "Fix the 4 tile.",
speed : "Slow",
start : "1,2,3,6,8,10,16,4,5,14,9,12,7,13,11,15",
moves : "Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Solve the second row.",
speed : "Fast",
start : "1,2,3,4,8,16,6,10,5,14,9,12,7,13,11,15",
moves : "Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Fix the 9 tile via cycling",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,13,14,12,10,15,9,11,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Cycle until past predecessor",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,15,13,11,12,14,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Move blank above target",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,15,13,14,9,11,12,16",
moves : "Up,Lft,Lft"
}
,
{
desc : "Move blank down and to the corner",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,16,15,13,9,11,12,14",
moves : "Dn,Rt,Rt"
}
,
{
desc : "Cycle until restored",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,11,15,13,9,12,14,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Fix last in the next-to-last row",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,15,12,14,13,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Up,Lft,Dn,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Up,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Permute the bottom row",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,12,14,15,13,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Permute the bottom row",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,12,15,13,14,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}


];

function populateSelectOptions(){
	var selectWidget = document.getElementById("demoSelect");

	var emptyOption = document.createElement("option");
	emptyOption.text = " ";
	selectWidget.add(emptyOption);

	for(var idx=1; idx<=demos.length; idx++){
		var option = document.createElement("option");
		option.text = "" + idx;
		selectWidget.add(option);
	}
}

function onSelectChange(){
	var selectWidget = document.getElementById("demoSelect");
	var demoNumber = selectWidget.value - 1;
	populateDemo(demoNumber);
}

function populateDemo(number){
	var demo = demos[number];
	var startTextArea = document.getElementById("startPosition");
	var movesTextArea = document.getElementById("moves");
	var demoDescription = document.getElementById("demoDescription");
	startTextArea.value = demo.start;
	movesTextArea.value = demo.moves;
	demoDescription.innerHTML = demo.desc;
	if (demo.speed == "Slow"){
		document.getElementById("speedSlow").checked = true;
	}
	if (demo.speed == "Fast"){
		document.getElementById("speedFast").checked = true;
	}
}
