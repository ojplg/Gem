module TestGem where

import Gem
import Test.QuickCheck

prop_adds_right x = (sum $ start x) == 136

valid_tile n = n `mod` 15 + 1
valid_top_tile n = n `mod` 3 + 1
valid_top_half_tile n = n `mod` 8 + 1

test_blank_to_row x = and [blank_row b0 == 0, blank_row b1 == 1, blank_row b2 == 2, blank_row b3 == 3] 
  where b = start x
        b0 = do_action b $ blank_to_row 0 
        b1 = do_action b $ blank_to_row 1
        b2 = do_action b $ blank_to_row 2
        b3 = do_action b $ blank_to_row 3

test_blank_to_col x = and [blank_col b0 == 0, blank_col b1 == 1, blank_col b2 == 2, blank_col b3 == 3] 
  where b = start x
        b0 = do_action b $ blank_to_col 0 
        b1 = do_action b $ blank_to_col 1
        b2 = do_action b $ blank_to_col 2
        b3 = do_action b $ blank_to_col 3

test_blank_to_right x = position b 1 `elem` last_column b || position b' 1 + 1 == blank b'
  where b  = start x
        b' = do_action b $ blank_to_right 1

-- Make sure that after calling n_to_last_column on the n tile:
-- a) the n tile is in the last column
-- b) the n tile is in the same row as it started
-- c) the blank is to the immediate left of the n tile
test_n_to_last_column x = position b' n `elem` last_column b && 
                            row b n == row b' n &&
                            blank b' == position b' n - 1
  where b  = start x
        b' = do_action b $ n_to_last_column n
        n  = valid_tile x

-- Make sure that
-- a) n is in the correct row
-- b) n is in the last column
-- c) the blank is to the right of the n tile
test_n_to_row x = in_correct_row b' n &&
                    in_last_column b' n &&
                    blank b' == position b' n - 1
  where b  = start x
        b' = do_action b $ n_to_row n
        n  = valid_top_tile x

test_fix_five x = in_place b' 5
  where b  = start x
        b' = do_action (do_action b $ solve_row 0) $ n_to_place 5

-- Make sure that after calling this for the value 5
--  a) 5 is in the correct row
--  b) the top row is still good
test_five_to_correct_row x = in_correct_row b' 5 &&
                               row_done b' 0
  where b  = do_action (start x) (solve_row 0)
        b' = do_action b $ n_to_row 5

row_done :: Board -> Int -> Bool
row_done b n = all (\n -> in_place b n) $ row_places b n

test_n_to_col x = in_correct_row b' n &&
                    in_correct_column b' n &&
                    blank b' == position b' n + 1
  where b  = start x
        b' = do_action b $ n_to_col n
        n  = valid_top_tile x

test_blank_to_left x = position b n `elem` first_column b || position b' n == blank b' + 1
  where b  = start x
        b' = do_action b $ blank_to_left n
        n = valid_tile x

test_n_to_place x = in_place b' n
                      && blank b' == position b' n + 1
  where b = start x
        b' = do_action b $ n_to_place n
        n = valid_top_tile x

test_solve_top_row x = in_place b' 1 && in_place b' 2 && in_place b' 3
  where b = start x
        b' = do_action b $ solve_row_front 0

test_finish_top_row x = all (\n -> in_place b' n) ps
  where b = puzzle x
        b' = do_action b $ solve_row 0
        ps = [1..dim b]

test_finish_top_two_rows x = all (\n -> in_place b' n) [1..2*(dim b)]
  where b = puzzle' x 4
        b' = do_action b (solve_row 0 +> solve_row 1)

test_third_row_start x = all (\n -> in_place b' n) [1..10]
  where b = do_action (start x) (solve_row 0 +> solve_row 1)
        b' = do_action b (n_to_place 9 +> n_to_place 10)

test_finish_top_rows x = all (\n -> in_place b' n) [1..t]
  where b = puzzle x
        b' = do_action b solve_top_rows
        t = size b - 2 * dim b

test_solve_front_next_to_last_row x = all (in_place b') [1..t] && in_place b' (size b')
  where b = do_action (puzzle x) solve_top_rows
        b' = do_action b solve_front_next_to_last_row
        t = size b - dim b - 1

test_solve_next_to_last_row x = all (in_place b') [1..t] && in_place b' (size b')
  where b = do_action (puzzle x) solve_top_rows
        b' = do_action b solve_next_to_last_row
        t = size b - dim b

test_fix_first_in_last_row x = all (in_place b') [1..t] && in_place b' (size b')
  where b = do_action (puzzle x) (solve_top_rows +> solve_next_to_last_row)
        b' = do_action b fix_first_in_last_row
        t = size b - dim b + 1

test_solve_puzzle x = all (in_place b) b
  where b = do_action (puzzle x) solve_puzzle
