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
				

a1 = blank_to_right 1
a2 = n_to_last_column 1
a3 = n_to_goal_row 1
a4 = n_to_goal_column 1
a5 = fix_easy_tile 2 +> fix_easy_tile 3
a5' = n_to_last_column 4 +> up_to_below_goal_row 4
a6 = final_slide
a7 = solve_easy_row 1
a7' = prep_next_to_last_row
a8 = cycle_until_placed 9
a8' = cycle_until_placed 10
a9 = cycle_until_past_predecessor 11
a10 = move_blank_above_target 11
a11 = to_action [Dn] +> blank_to_corner
a12 = cycle_until_restored 11
a13 = fix_last_in_next_to_last_row
a14 = permute_three_in_bottom_row
a15 = permute_three_in_bottom_row

ps = map puzzle [n*4 + 1 | n <- [0..]]

p = fromJust $ find good ps

good b = and [col b 1 < 3 && row b 1 > 0,
              and $ map (in_place b5) [1,2,3],
              col b5 4 < 3 && row b5 4 > 1,
              and $ map (in_place b6) [1..4],
              and $ map (in_place b7) [1..8],
              (and $ map (in_place b8) [1..9]) && (not $ in_place b8 10),
              (and $ map (in_place b8') [1..10]) && (col b8' 11 < 2),
              and $ map (in_place b15) [1..15]
              ]
  where b1 = do_action b a1
        b2 = do_action b1 a2
        b3 = do_action b2 a3
        b4 = do_action b3 a4
        b5 = do_action b4 a5
        b5' = do_action b5 a5'
        b6 = do_action b5' a6
        b7 = do_action b6 a7
        b7' = do_action b7 a7'
        b8 = do_action b7' a8
        b8' = do_action b8 a8'
        b9 = do_action b8' a9
        b10 = do_action b9 a10
        b11 = do_action b10 a11
        b12 = do_action b11 a12
        b13 = do_action b12 a13
        b14 = do_action b13 a14
        b15 = do_action b14 a15
        
p1 = p
m1 = a1 p1
d1 = Demo "Move the blank to the right of the 1." "Slow" p1 m1

p2 = moves p1 m1
m2 = a2 p2
d2 = Demo "Move the 1 tile to the last column." "Slow" p2 m2

p3 = moves p2 m2
m3 = a3 p2
d3 = Demo "Move the 1 to its goal row." "Slow" p3 m3

p4 = moves p3 m3
m4 = a4 p3
d4 = Demo "Move the 1 to its goal column." "Slow" p4 m4

p5 = moves p4 m4
m5 = a5 p5
d5 = Demo "Fix the 2 and the three tiles." "Fast" p5 m5

p5' = moves p5 m5
p6 = do_action p5' a5'
m6 = final_slide p6
d6 = Demo "Fix the 4 tile." "Slow" p6 m6

p7 = moves p6 m6
m7 = a7 p7
d7 = Demo "Solve the second row." "Fast" p7 m7

p7' = moves p7 m7
p8 = do_action p7' a7'
m8 = a8 p8
d8 = Demo "Fix the 9 tile via cycling" "Slow" p8 m8

p9' = moves p8 m8
p9 = do_action p9' $ a8'
m9 = a9 p9
d9 = Demo "Cycle until past predecessor" "Slow" p9 m9

p10 = moves p9 m9
m10 = a10 p10
d10 = Demo "Move blank above target" "Slow" p10 m10

p11 = moves p10 m10
m11 = a11 p11
d11 = Demo "Move blank down and to the corner" "Slow" p11 m11

p12 = moves p11 m11
m12 = a12 p12
d12 = Demo "Cycle until restored" "Slow" p12 m12

p13 = moves p12 m12
m13 = a13 p13
d13 = Demo "Fix last in the next-to-last row" "Slow" p13 m13

p14 = moves p13 m13
m14 = a14 p14
d14 = Demo "Permute the bottom row" "Slow" p14 m14

p15 = moves p14 m14
m15 = a15 p15
d15 = Demo "Permute the bottom row" "Slow" p15 m15