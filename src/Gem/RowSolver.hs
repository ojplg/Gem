{--
This contains a solver for the puzzle that works in a very straight-forward way.
It solves each row from top to bottom in succession, working on each row from 
left to right.
--}
module Gem.RowSolver where

import Gem.Board
import Data.List
import Data.Maybe
import System.Random

type Action = Board -> [Move]
type Strategy =  Int -> Action

-- Ways to apply and manipulate actions
to_action :: [Move] -> Action
to_action ms = \_ -> ms

empty_action :: Action
empty_action = \_ -> []

do_action :: Board -> Action -> Board
do_action b a = moves b (a b)

(+>) :: Action -> Action -> Action
a1 +> a2 = \b -> let ma1 = a1 b in ma1 ++ a2 (moves b ma1)

replicate_action :: Int -> Action -> Action
replicate_action n a = foldr (+>) empty_action $ replicate n a

-- Strategies to put the blank in position relative to any number
blank_to_right :: Strategy
blank_to_right n b | br == nr && bc >  nc = replicate (bc - nc - 1) Lft
                   | br == nr && bc <  nc &&  br == dim b - 1 = Up : replicate (nc - bc + 1) Rt ++ [Dn]
                   | br == nr && bc <  nc = Dn : replicate (nc - bc + 1) Rt ++ [Up] 
                   | br >  nr && bc >  nc = replicate (bc - nc - 1) Lft ++ replicate (br - nr) Up
                   | br >  nr && bc == nc = Rt : replicate (br - nr + 0) Up
                   | br >  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (br - nr) Up
                   | br <  nr && bc == nc = Rt : replicate (nr - br + 0) Dn
                   | br <  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (nr - br) Dn 
                   | br <  nr && bc >  nc = replicate (nr - br - 0) Dn ++ replicate (bc - nc - 1) Lft 
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n

blank_to_left :: Strategy
blank_to_left n b | br == nr && bc >  nc && br == dim b - 1 = Up : replicate (bc - nc + 1) Lft ++ [Dn] 
                  | br == nr && bc >  nc = Dn : replicate (bc -nc + 1) Lft ++ [Up] 
                  | br == nr && bc <  nc && br == dim b - 1 = Up : replicate (nc - bc - 1) Rt ++ [Dn] 
                  | br == nr && bc <  nc = Dn : replicate (nc - bc - 1) Rt ++ [Up] 
                  | br >  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (br - nr) Up
                  | br >  nr && bc == nc = Lft : replicate (br - nr + 0) Up 
                  | br >  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (br - nr) Up
                  | br <  nr && bc == nc = Lft : replicate (nr - br + 0) Dn
                  | br <  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (nr - br) Dn 
                  | br <  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (nr - br - 0) Dn 
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n

-- Fix the easy tiles (those not in the last column or in the last two rows)
-- First move the target tile to the last column, leaving the blank on the left
n_to_last_column :: Strategy
n_to_last_column n b | position b n `elem` last_column b = blank_to_left n b
                     | position b n `elem` bottom_row b  = ms ++ right_shift b' n Up
                     | otherwise = ms ++ right_shift b' n Dn
  where b' = moves b ms
        ms = blank_to_right n b 

right_shift :: Board -> Int -> Move -> [Move]
right_shift b n d = Lft : (take (5*count) $ cycle shift)
  where count = dim b - (col b n) - 2
        shift = [d,Rt,Rt,opposite d,Lft]

opposite :: Move -> Move
opposite Up = Dn
opposite Dn = Up
opposite Lft = Rt
opposite Rt = Lft

-- Slide the target tile up to its goal row
n_to_goal_row :: Strategy
n_to_goal_row n b = take m $ cycle shift_up
  where m = 5*(row b n - goal_row b n)

shift_up :: [Move]
shift_up = [Up,Rt,Dn,Lft,Up]

-- Slide the target tile left to its goal column
n_to_goal_column :: Strategy
n_to_goal_column n b = Rt : (take (5*count) $ cycle slide)
  where slide = [Dn,Lft,Lft,Up,Rt]
        count = col b n - (n `mod` dim b) 

fix_easy_tile :: Strategy
fix_easy_tile n = n_to_last_column n +> n_to_goal_row n +> n_to_goal_column n

solve_easy_row_front :: Strategy
solve_easy_row_front r b = foldr (+>) empty_action (map fix_easy_tile ns) b
  where ns = [r*dim b+1..(r+1)*dim b-1]

-- Fix the last tile in the row
fix_last_in_row :: Strategy
fix_last_in_row r b | in_place b n = []
                    | otherwise    = (n_to_last_column n +> up_to_below_goal_row n +> final_slide) b
  where n = dim b * (r+1)

up_to_below_goal_row :: Strategy
up_to_below_goal_row n b = (take (5*(row b n - goal_row b n - 1)) $ cycle shift_up) 

final_slide :: Action
final_slide = to_action [Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn]

-- Solve an easy row and all the easy rows
solve_easy_row :: Strategy
solve_easy_row r = solve_easy_row_front r +> to_action [Dn] +> fix_last_in_row r

solve_easy_rows :: Action
solve_easy_rows b = foldr (+>) empty_action (map solve_easy_row rs) b
  where rs = [0..dim b-3]

-- Utility functions for cycling the whole or a portion of the bottom two rows
cycle_n_bottom_rows_clockwise :: Strategy
cycle_n_bottom_rows_clockwise n _ = [Up] ++ replicate n Lft ++ [Dn] ++ replicate n Rt

cycle_bottom_rows_clockwise :: Action
cycle_bottom_rows_clockwise b = cycle_n_bottom_rows_clockwise (dim b - 1) b

cycle_n_bottom_rows_counterclockwise :: Strategy
cycle_n_bottom_rows_counterclockwise n b = replicate n Lft ++ [Up] ++ replicate n Rt ++ [Dn]

cycle_bottom_rows_counterclockwise :: Action
cycle_bottom_rows_counterclockwise b = cycle_n_bottom_rows_counterclockwise (dim b - 1) b

-- Solve the penultimate row
-- Fix the front items of the last row
fix_in_next_to_last_row :: Strategy
fix_in_next_to_last_row n b | col b n >= g = cycle_until_placed n b
                            | otherwise    = place_from_left_and_below n b
  where g = goal_column b n

cycle_until_placed :: Strategy
cycle_until_placed n b | in_place b n = []
                       | otherwise    = (cycle_n_bottom_rows_clockwise m +> cycle_until_placed n) b
  where m = dim b - goal_column b n - 1

place_from_left_and_below :: Strategy
place_from_left_and_below n b = (cycle_until_past_predecessor n +> 
                                  move_blank_above_target n +> 
                                  to_action [Dn] +> 
                                  blank_to_corner +> 
                                  cycle_until_restored n +> 
                                  correct_interloper n +> 
                                  blank_to_corner) b

cycle_until_past_predecessor :: Strategy 
cycle_until_past_predecessor n b | col b n > col b (n-1) = []
                                 | otherwise             = (cycle_bottom_rows_counterclockwise +> 
                                                             cycle_until_past_predecessor n) b

move_blank_above_target :: Strategy
move_blank_above_target n b = Up : replicate (dim b - col b n - 1) Lft

blank_to_corner :: Action
blank_to_corner b = replicate (dim b - blank_col b - 1)  Rt

cycle_until_restored :: Strategy
cycle_until_restored n b | in_correct_column b n = []
                         | otherwise             = (cycle_bottom_rows_clockwise +> cycle_until_restored n) b

correct_interloper :: Strategy
correct_interloper n b | in_place b (n-1) = []
                       | otherwise        = Up : replicate m Lft ++ [Dn] ++ replicate p Rt ++ [Up,Rt,Dn]
  where m = dim b - 1
        p = goal_column b n

solve_front_next_to_last_row :: Action
solve_front_next_to_last_row b = (prep_next_to_last_row +> 
                                   foldr (+>) empty_action (map fix_in_next_to_last_row ns)) b
  where ns = [size b - 2 * dim b + 1 .. size b - dim b - 1]

prep_next_to_last_row :: Action
prep_next_to_last_row b = replicate (dim b - blank_col b - 1) Rt ++ [Dn]

-- Fix the last item in the next to last row
fix_last_in_next_to_last_row :: Action
fix_last_in_next_to_last_row b | in_place b n = []
                               | otherwise    = (cycle_until_past_predecessor n +> 
                                                  move_blank_above_target n +>
                                                  to_action [Dn] +>
                                                  blank_to_corner +>
                                                  cycle_until_restored n +>
                                                  correct_last_column_interloper) b
  where n = length b - dim b

correct_last_column_interloper :: Action
correct_last_column_interloper b | in_place b (n-1) = []
                                 | otherwise        = Lft:Up:replicate (m-1) Lft ++ [Dn] ++ replicate m Rt
  where n = length b - dim b
        m = dim b - 1

-- Solve the next to last row entirely
solve_next_to_last_row :: Action
solve_next_to_last_row = solve_front_next_to_last_row +> fix_last_in_next_to_last_row

-- Work on the final row
solve_last_row :: Action
solve_last_row b = foldr (+>) empty_action (map fix_in_last_row ns) b
  where ns = [size b - dim b + 1 .. size b - 2]

permute_three_in_bottom_row :: Action
permute_three_in_bottom_row = replicate_action 2 (cycle_n_bottom_rows_clockwise 3)
                                           +> cycle_n_bottom_rows_counterclockwise 2
                                           +> cycle_n_bottom_rows_counterclockwise 3
                                           
fix_in_last_row :: Strategy
fix_in_last_row n b | in_place b n = []
                    | otherwise    = (to_action (replicate m Lft) 
                                           +> permute_three_in_bottom_row 
                                           +> to_action (replicate m Rt)
                                           +> fix_in_last_row n) b
  where m = dim b - permutation_start n b - 1

permutation_start :: Int -> Board -> Int
permutation_start n b | c - g < 3 = g + 3
                      | otherwise = c + 1 
  where g = goal_column b n
        c = col b n

-- Solve the entire puzzle
solve_puzzle :: Action
solve_puzzle = solve_easy_rows +> solve_next_to_last_row +> solve_last_row
