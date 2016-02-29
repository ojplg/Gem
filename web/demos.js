var demos = [
{
desc : "Move the blank to the right of the 1.",
speed : "Slow",
start : "14,4,10,6,13,1,5,2,9,3,11,12,7,16,8,15",
moves : "Rt,Up,Up"
}
,
{
desc : "Move the 1 tile to the last column.",
speed : "Slow",
start : "14,4,10,6,13,1,16,2,9,3,5,12,7,8,11,15",
moves : "Lft,Dn,Rt,Rt,Up,Lft"
}
,
{
desc : "Move the 1 to its goal row.",
speed : "Slow",
start : "14,4,10,6,13,3,16,1,9,5,12,2,7,8,11,15",
moves : "Up,Rt,Dn,Lft,Up"
}
,
{
desc : "Move the 1 to its goal column.",
speed : "Slow",
start : "14,4,16,1,13,3,6,10,9,5,12,2,7,8,11,15",
moves : "Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt"
}
,
{
desc : "Fix the 2 and the three tiles.",
speed : "Fast",
start : "1,16,3,10,14,13,4,6,9,5,12,2,7,8,11,15",
moves : "Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt"
}
,
{
desc : "Fix the 4 tile.",
speed : "Slow",
start : "1,2,3,13,14,5,16,4,9,6,12,10,7,8,11,15",
moves : "Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Solve the second row.",
speed : "Fast",
start : "1,2,3,4,14,16,13,5,9,6,12,10,7,8,11,15",
moves : "Dn,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Fix the 9 tile via cycling",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,12,9,11,10,14,15,13,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Cycle until past predecessor",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,13,15,12,11,14,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Move blank above target",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,13,15,14,9,12,11,16",
moves : "Up,Lft"
}
,
{
desc : "Move blank down and to the corner",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,13,16,15,9,12,11,14",
moves : "Dn,Rt"
}
,
{
desc : "Cycle until restored",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,13,11,15,9,12,14,16",
moves : ""
}
,
{
desc : "Correct interloper",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,13,11,15,9,12,14,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Up,Rt,Dn"
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
desc : "Permute the bottom row again",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,12,15,13,14,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,



{
	desc  : "A dimension 5 puzzle that is solved once the next to last row is done.",
	speed : "Fast",
	start : "16,1,18,5,2,25,22,4,11,23,24,15,20,14,10,13,6,7,12,8,21,19,9,17,3",
	moves : "Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Rt,Dn,Rt"
},
{
	desc: "Small move slide",
	speed : "Slow",
	start: "9,3,2,5,7,4,8,6,1",
	moves: "Dn,Up,Rt"
},
{
	desc : "4x4 puzzle solved once the next to last row is done.",
	speed : "Fast",
	start : "11,10,7,16,2,5,14,4,15,8,12,1,6,9,3,13",
	moves : "Lft,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Dn,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Up,Lft,Dn,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
},
{
	desc : "Fully solved 10x10 puzzle.",
	speed : "Fast",
	start : "12,22,2,14,4,17,38,28,8,7,1,11,3,25,100,16,18,15,29,10,21,23,54,35,5,6,39,9,19,49,24,33,13,56,36,45,47,27,30,20,32,42,34,63,26,37,65,67,48,40,41,51,46,44,55,57,58,98,59,70,52,61,31,53,43,88,76,79,80,50,72,74,62,85,64,75,68,66,89,69,71,82,73,93,94,96,86,60,78,90,81,91,92,83,84,95,87,97,77,99",
	moves : "Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Rt,Dn,Rt,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
},
{
	desc : "9x9 puzzle.",
	speed : "Fast",
	start : "1,28,2,3,4,5,7,16,9,11,19,12,14,24,6,17,18,26,81,21,47,13,23,40,34,33,8,20,58,30,29,22,42,25,45,27,39,10,49,51,52,31,56,36,54,37,59,15,32,61,60,62,35,63,57,48,55,66,75,50,53,44,72,73,46,41,67,74,69,70,43,80,38,64,65,76,78,79,77,68,71",
	moves : "Rt,Up,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
},
{
	desc: "A* solution to 3x3 puzzle.",
	speed : "Slow",
	start: "9,3,2,5,7,4,8,6,1",
	moves: "Dn,Rt,Rt,Up,Lft,Dn,Rt,Dn,Lft,Lft,Up,Up,Rt,Dn,Rt,Up,Lft,Dn,Lft,Up,Rt,Rt,Dn,Dn"
},
{
	desc: "By-row solution to 3x3 puzzle.",
	speed : "Slow",
	start: "9,3,2,5,7,4,8,6,1",
	moves: "Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Up,Lft,Dn,Rt,Up,Lft,Lft,Dn,Rt,Rt"
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
