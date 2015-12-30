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

test_blank_to_right x = position b 1 `elem` last_column || position b' 1 + 1 == blank b'
  where b  = start x
        b' = do_action b $ blank_to_right 1

-- Make sure that after calling n_to_last_column on the n tile:
-- a) the n tile is in the last column
-- b) the n tile is in the same row as it started
-- c) the blank is to the immediate left of the n tile
test_n_to_last_column x = position b' n `elem` last_column && 
                            row b n == row b' n &&
                            blank b' == position b' n - 1
  where b  = start x
        b' =  do_action b $ n_to_last_column n
        n  = valid_tile x

test_n_to_row x = in_correct_row b' n &&
                    in_last_column b' n &&
                    blank b' == position b' n - 1
  where b  = start x
        b' = do_action b $ n_to_row n
        n  = valid_top_tile x

test_fix_five x = in_place b' 5
  where b  = start x
        b' = do_action (do_action b finish_top_row) $ n_to_place 5

test_n_to_col x = in_correct_row b' n &&
                    in_correct_column b' n &&
                    blank b' == position b' n + 1
  where b  = start x
        b' = do_action b $ n_to_col n
        n  = valid_top_tile x

test_blank_to_left x = position b n `elem` first_column || position b' n == blank b' + 1
  where b  = start x
        b' = do_action b $ blank_to_left n
        n = valid_tile x

test_n_to_place x = in_place b' 1
  where b = start x
        b' = do_action b $ n_to_place 1

test_solve_top_row x = in_place b' 1 && in_place b' 2 && in_place b' 3
  where b = start x
        b' = do_action b solve_top_row

test_finish_top_row x = in_place b' 1 && in_place b' 2 && in_place b' 3 && in_place b' 4
  where b = start x
        b' = do_action b finish_top_row
