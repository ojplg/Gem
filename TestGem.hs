module TestGem where

import Gem
import Test.QuickCheck

prop_adds_right x = (sum $ start x) == 136

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

test_n_to_last_column x = position b' 1 `elem` last_column && row b 1 == row b' 1
  where b  = start x
        b' =  do_action b $ n_to_last_column 1

test_blank_to_left x = position b 1 `elem` first_column || position b' 1 == blank b' + 1
  where b  = start x
        b' = do_action b $ blank_to_left 1

test_n_to_place x = in_place b' 1
  where b = start x
        b' = do_action b $ n_to_place 1

test_solve_top_row x = in_place b' 1 && in_place b' 2 && in_place b' 3
  where b = start x
        b' = do_action b solve_top_row