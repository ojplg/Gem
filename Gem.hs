module Gem where

import Data.List
import Data.Maybe
import System.Random
import Gem.Board

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

blank_to_last_column :: Action
blank_to_last_column b = replicate (dim b - blank_col b - 1) Rt

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

n_to_place :: Strategy
n_to_place n = n_to_last_column n +> up_to_goal_row n +> slide_left n

slide_left :: Strategy
slide_left n b = Rt : (take (5*count) $ cycle slide)
  where slide = [Dn,Lft,Lft,Up,Rt]
        count = col b n - (n `mod` dim b) 

solve_row_front :: Strategy
solve_row_front r b = foldr (+>) empty_action (map (\n -> n_to_place n) ps) b
  where ps = take (dim b-1) $ row_places b r

fix_last_in_row :: Strategy
fix_last_in_row r b | in_place b n = []
                    | otherwise    = (n_to_last_column n +> up_to_below_goal_row n +> final_slide) b
  where n = dim b * (r+1)

solve_row :: Strategy
solve_row r = solve_row_front r +> to_action [Dn] +> fix_last_in_row r

final_slide :: Action
final_slide = to_action [Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn]

up_to_goal_row :: Strategy
up_to_goal_row n b = (take (5*(row b n - goal_row b n)) $ cycle shift_up) 

up_to_below_goal_row :: Strategy
up_to_below_goal_row n b = (take (5*(row b n - goal_row b n - 1)) $ cycle shift_up) 

shift_up :: [Move]
shift_up = [Up,Rt,Dn,Lft,Up]

solve_top_rows :: Action
solve_top_rows b = foldr (+>) empty_action (map solve_row rs) b
  where rs = [0..dim b-3]

next_to_last_row_tiles :: Board -> [Int]
next_to_last_row_tiles b = [size b - 2 * dim b + 1 .. size b - dim b]

solve_front_next_to_last_row :: Action
solve_front_next_to_last_row b = (prep_next_to_last_row +> foldr (+>) empty_action (map place_in_next_to_last_row ns)) b
  where ns = take (dim b - 1) $ next_to_last_row_tiles b

solve_next_to_last_row :: Action
solve_next_to_last_row = solve_front_next_to_last_row +> fix_last_in_second_to_last_row

fix_last_in_second_to_last_row :: Action
fix_last_in_second_to_last_row b | in_place b n = []
                                 | otherwise    = (cycle_until_past_predecessor n +> 
                                                    move_blank_above_target n +>
                                                    to_action [Dn] +>
                                                    blank_to_corner +>
                                                    cycle_until_restored n +>
                                                    correct_last_column_interloper) b
  where n = length b - dim b

prep_next_to_last_row :: Action
prep_next_to_last_row = blank_to_last_column +> to_action [Dn]

place_in_next_to_last_row :: Strategy
place_in_next_to_last_row n b | col b n >= g = cycle_until_placed n b
                              | otherwise    = place_from_left_and_below n b
  where g = goal_column b n

place_from_left_and_below :: Strategy
place_from_left_and_below n b = (cycle_until_past_predecessor n +> move_blank_above_target n +> to_action [Dn] +> 
                                  blank_to_corner +> cycle_until_restored n +> correct_interloper n +> blank_to_corner) b

cycle_until_past_predecessor :: Strategy 
cycle_until_past_predecessor n b | col b n > col b (n-1) = []
                                 | otherwise             = (cycle_bottom_rows_counterclockwise +> cycle_until_past_predecessor n) b

correct_interloper :: Strategy
correct_interloper n b | in_place b (n-1) = []
                       | otherwise        = Up : replicate m Lft ++ [Dn] ++ replicate p Rt ++ [Up,Rt,Dn]
  where m = dim b - 1
        p = goal_column b n

correct_last_column_interloper :: Action
correct_last_column_interloper b | in_place b (n-1) = []
                                 | otherwise        = Lft:Up:replicate (m-1) Lft ++ [Dn] 
                                                        ++ replicate m Rt
  where n = length b - dim b
        m = dim b - 1

move_blank_above_target :: Strategy
move_blank_above_target n b = Up : replicate m Lft
  where m = dim b - col b n - 1

cycle_until_restored :: Strategy
cycle_until_restored n b | in_correct_column b n = []
                         | otherwise             = (cycle_bottom_rows_clockwise +> cycle_until_restored n) b

cycle_counterclockwise_until_restored :: Strategy
cycle_counterclockwise_until_restored n b | in_correct_column b n = []
                                          | otherwise             = (cycle_bottom_rows_counterclockwise +> cycle_counterclockwise_until_restored n) b


cycle_n_bottom_rows_clockwise :: Strategy
cycle_n_bottom_rows_clockwise n _ = [Up] ++ replicate n Lft ++ [Dn] ++ replicate n Rt

cycle_bottom_rows_clockwise :: Action
cycle_bottom_rows_clockwise b = cycle_n_bottom_rows_clockwise (dim b - 1) b

cycle_n_bottom_rows_counterclockwise :: Strategy
cycle_n_bottom_rows_counterclockwise n b = replicate n Lft ++ [Up] ++ replicate n Rt ++ [Dn]

cycle_bottom_rows_counterclockwise :: Action
cycle_bottom_rows_counterclockwise b = cycle_n_bottom_rows_counterclockwise (dim b - 1) b

blank_to_corner :: Action
blank_to_corner b = replicate m Rt
  where m = dim b - blank_col b - 1

cycle_until_placed :: Strategy
cycle_until_placed n b | in_place b n = []
                       | otherwise    = (cycle_n_bottom_rows_counterclockwise g +> cycle_until_placed n) b
  where g = dim b - goal_column b n - 1

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
solve_puzzle = solve_top_rows +> solve_next_to_last_row +> solve_last_row

do_action :: Board -> Action -> Board
do_action b a = moves b (a b)

replicate_action :: Int -> Action -> Action
replicate_action n a = foldr (+>) empty_action $ replicate n a

(+>) :: Action -> Action -> Action
a1 +> a2 = \b -> let ma1 = a1 b in ma1 ++ a2 (moves b ma1)

to_action :: [Move] -> Action
to_action ms = \_ -> ms

empty_action :: Action
empty_action = \_ -> []

g0 = puzzle 0
g1 = puzzle 1
g2 = puzzle 2
g3 = puzzle 3
g4 = puzzle 4
g5 = puzzle 5
g6 = puzzle 6
g7 = puzzle 7
g8 = puzzle 8
g9 = puzzle 9
g10 = puzzle 10
g11 = puzzle 11
g12 = puzzle 12
g19 = puzzle 19
g20 = puzzle 20
g24 = puzzle 24
h1 = puzzle $ -1
h2 = puzzle $ -2
h3 = puzzle $ -3
h4 = puzzle $ -4
h5 = puzzle $ -5
h6 = puzzle $ -6
h7 = puzzle $ -7
h8 = puzzle $ -8
h9 = puzzle $ -9

p0 = do_action g0 $ solve_top_rows +> solve_next_to_last_row
p1 = do_action g1 $ solve_top_rows +> solve_next_to_last_row
p2 = do_action g2 $ solve_top_rows +> solve_next_to_last_row
p3 = do_action g3 $ solve_top_rows +> solve_next_to_last_row
p4 = do_action g4 $ solve_top_rows +> solve_next_to_last_row
p5 = do_action g5 $ solve_top_rows +> solve_next_to_last_row
p6 = do_action g6 $ solve_top_rows +> solve_next_to_last_row
p7 = do_action g7 $ solve_top_rows +> solve_next_to_last_row
p8 = do_action g8 $ solve_top_rows +> solve_next_to_last_row
p9 = do_action g9 $ solve_top_rows +> solve_next_to_last_row
p10 = do_action g10 $ solve_top_rows +> solve_next_to_last_row
p11 = do_action g11 $ solve_top_rows +> solve_next_to_last_row

q1 = do_action h1 $ solve_top_rows +> solve_next_to_last_row
q2 = do_action h2 $ solve_top_rows +> solve_next_to_last_row
q3 = do_action h3 $ solve_top_rows +> solve_next_to_last_row
q4 = do_action h4 $ solve_top_rows +> solve_next_to_last_row
