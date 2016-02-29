module Gem.Demo where

import Gem.Board
import Gem.RowSolver
import Data.List (intersperse, find)
import Data.Maybe (fromJust)

data Demo = Demo { desc :: String, speed :: String, start :: Board, mvs :: [Move] }

to_strings :: Demo -> [String]
to_strings d = [
				  "{",
				  "desc : \"" ++ desc d ++ "\",",
				  "speed : \"" ++ speed d ++ "\",",
				  "start : \"" ++ (concat $ intersperse "," $ map show $ start d) ++ "\",",
				  "moves : \"" ++ (concat $ intersperse "," $ map show $ mvs d) ++ "\"",
				  "}"
				]
				
--p1 = puzzle 161
p1 = [14,4,10,6,13,1,5,2,9,3,11,12,7,16,8,15]
m1 = blank_to_right 1 p1
d1 = Demo "Move the blank to the right of the 1." "Slow" p1 m1

p2 = moves p1 m1
m2 = n_to_last_column 1 p2
d2 = Demo "Move the 1 tile to the last column." "Slow" p2 m2

p3 = moves p2 m2
m3 = n_to_goal_row 1 p2
d3 = Demo "Move the 1 to its goal row." "Slow" p3 m3

p4 = moves p3 m3
m4 = n_to_goal_column 1 p3
d4 = Demo "Move the 1 to its goal column." "Slow" p4 m4

p5 = moves p4 m4
m5 = (fix_easy_tile 2 +> fix_easy_tile 3) p5
d5 = Demo "Fix the 2 and the three tiles." "Fast" p5 m5

p5' = moves p5 m5
p6 = do_action p5' (n_to_last_column 4 +> up_to_below_goal_row 4)
m6 = final_slide p6
d6 = Demo "Fix the 4 tile." "Slow" p6 m6

p7 = moves p6 m6
m7 = solve_easy_row 1 p7
d7 = Demo "Solve the second row." "Fast" p7 m7

p7' = moves p7 m7
p8 = do_action p7' prep_next_to_last_row
m8 = cycle_until_placed 9 p8
d8 = Demo "Fix the 9 tile via cycling" "Slow" p8 m8

p9' = moves p8 m8
p9 = do_action p9' $ cycle_until_placed 10
m9 = cycle_until_past_predecessor 11 p9
d9 = Demo "Cycle until past predecessor" "Slow" p9 m9

p10 = moves p9 m9
m10 = move_blank_above_target 11 p10
d10 = Demo "Move blank above target" "Slow" p10 m10

p11 = moves p10 m10
m11 = to_action [Dn] +> blank_to_corner $ p11
d11 = Demo "Move blank down and to the corner" "Slow" p11 m11

p12 = moves p11 m11
m12 = cycle_until_restored 11 p12
d12 = Demo "Cycle until restored" "Slow" p12 m12

p13 = moves p12 m12
m13 = correct_interloper 11 p12
d13 = Demo "Correct interloper" "Slow" p13 m13

p13' = moves p13 m13
p14 = do_action p13' fix_last_in_next_to_last_row
m14 = permute_three_in_bottom_row p14
d14 = Demo "Permute the bottom row" "Slow" p14 m14

p15 = moves p14 m14
m15 = permute_three_in_bottom_row p15
d15 = Demo "Permute the bottom row again" "Slow" p15 m15
