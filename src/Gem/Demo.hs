module Gem.Demo where

import Gem.Board
import Gem.RowSolver
import Data.List (intersperse)

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

p1 = puzzle 73
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
p6 = do_action p5' (n_to_last_column 4)
m6 = final_slide p6
d6 = Demo "Fix the 4 tile." "Slow" p6 m6

p7 = moves p6 m6
m7 = solve_easy_row 1 p7
d7 = Demo "Solve the second row." "Fast" p7 m7

