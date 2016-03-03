var demos = [

{
desc : "Move the blank to the right of the 1.",
speed : "Slow",
start : "2,10,16,9,1,8,11,3,14,5,6,15,7,13,4,12",
moves : "Dn,Lft"
}
,
{
desc : "Move the 1 tile to the last column.",
speed : "Slow",
start : "2,10,11,9,1,16,8,3,14,5,6,15,7,13,4,12",
moves : "Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft"
}
,
{
desc : "Move the 1 to its goal row.",
speed : "Slow",
start : "2,10,11,9,14,6,16,1,5,8,15,3,7,13,4,12",
moves : "Up,Rt,Dn,Lft,Up"
}
,
{
desc : "Move the 1 to its goal column.",
speed : "Slow",
start : "2,10,16,1,14,6,9,11,5,8,15,3,7,13,4,12",
moves : "Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt"
}
,
{
desc : "Fix the 2 and the three tiles.",
speed : "Fast",
start : "1,16,6,11,2,14,10,9,5,8,15,3,7,13,4,12",
moves : "Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt"
}
,
{
desc : "Fix the 4 tile.",
speed : "Slow",
start : "1,2,3,6,5,14,16,4,8,10,15,11,7,13,12,9",
moves : "Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Solve the second row.",
speed : "Fast",
start : "1,2,3,4,5,16,6,14,8,10,15,11,7,13,12,9",
moves : "Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn"
}
,
{
desc : "Fix the 9 tile via cycling",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,13,15,12,11,10,14,9,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Cycle until past predecessor",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,13,15,11,14,12,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Move blank above target",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,13,15,12,9,11,14,16",
moves : "Up,Lft,Lft"
}
,
{
desc : "Move blank down and to the corner",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,16,13,15,9,11,14,12",
moves : "Dn,Rt,Rt"
}
,
{
desc : "Cycle until restored",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,10,11,13,15,9,14,12,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Fix last in the next-to-last row",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,13,14,12,15,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Up,Lft,Dn,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "2 x clockwise cycle (width of 4)",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,12,14,15,13,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt"
}
,
{
desc : "Counter clockwise (width of 3)",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,15,14,9,10,13,12,11,16",
moves : "Lft,Lft,Up,Rt,Rt,Dn"
}
,
{
desc : "Counter clockwise (width of 4)",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,15,9,10,11,13,14,12,16",
moves : "Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Do the full permute",
speed : "Slow",
start : "1,2,3,4,5,6,7,8,9,10,11,12,15,13,14,16",
moves : "Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn"
}
,
{
desc : "Solution to a 9x9 puzzle",
speed : "Fast",
start : "65,40,56,5,13,17,41,64,44,72,58,37,61,9,26,69,46,6,23,14,28,25,43,15,53,16,34,3,73,60,47,35,11,12,80,49,71,62,76,38,74,51,36,70,30,50,57,33,31,2,18,10,22,77,75,20,59,39,55,45,1,48,52,79,24,67,68,29,63,42,81,66,7,27,54,32,78,21,4,8,19",
moves : "Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Dn,Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Dn,Dn,Dn,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Lft,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Rt,Rt,Rt,Rt,Up,Lft,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Lft,Dn,Rt,Rt,Up,Lft,Dn,Rt,Rt,Up,Lft,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Dn,Dn,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Rt,Dn,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Dn,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Up,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Dn,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Up,Lft,Lft,Lft,Lft,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Rt,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Rt,Lft,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt,Rt,Lft,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Up,Lft,Lft,Lft,Dn,Rt,Rt,Rt,Lft,Lft,Up,Rt,Rt,Dn,Lft,Lft,Lft,Up,Rt,Rt,Rt,Dn,Rt"
}
,
{
desc : "By row solution to 3x3 puzzle (60 moves)",
speed : "Slow",
start : "9,6,4,3,8,5,7,1,2",
moves : "Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Lft,Up,Rt,Rt,Dn,Dn,Lft,Up,Rt,Dn,Lft,Up,Up,Rt,Dn,Lft,Up,Rt,Dn,Lft,Dn,Up,Rt,Dn,Lft,Up,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Rt,Dn,Up,Lft,Dn,Rt"
}
,
{
desc : "A* solution to 3x3 puzzle (24 moves)",
speed : "Slow",
start : "9,6,4,3,8,5,7,1,2",
moves : "Rt,Dn,Dn,Rt,Up,Up,Lft,Lft,Dn,Rt,Rt,Up,Lft,Lft,Dn,Rt,Dn,Rt,Up,Up,Lft,Dn,Dn,Rt"
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
