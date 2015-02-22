module TestGem where

import Gem
import Test.QuickCheck

prop_adds_right x = (sum $ start x) == 136

test_blank_to_row x = and [blank_row b0 == 0, blank_row b1 == 1, blank_row b2 == 2, blank_row b3 == 3] 
  where b = start x
        b0 = apply_strategy b 0 blank_to_row
        b1 = apply_strategy b 1 blank_to_row
        b2 = apply_strategy b 2 blank_to_row
        b3 = apply_strategy b 3 blank_to_row

test_blank_to_col x = and [blank_col b0 == 0, blank_col b1 == 1, blank_col b2 == 2, blank_col b3 == 3] 
  where b = start x
        b0 = apply_strategy b 0 blank_to_col
        b1 = apply_strategy b 1 blank_to_col
        b2 = apply_strategy b 2 blank_to_col
        b3 = apply_strategy b 3 blank_to_col

test_blank_to_right x = position b 1 `elem` last_column || position b' 1 + 1 == blank b'
  where b  = start x
        b' = apply_strategy b 1 blank_to_right

test_n_to_last_column x = position b' 1 `elem` last_column && row b 1 == row b' 1
  where b  = start x
        b' =  apply_strategy b 1 n_to_last_column

test_blank_to_left x = position b 1 `elem` first_column || position b' 1 == blank b' + 1
  where b  = start x
        b' = apply_strategy b 1 blank_to_left

test_n_to_top_row x = position b' 1 `elem` top_row 
   where b  = start x
         b' = apply_strategy b 1 n_to_top_row

test_n_to_place x = in_place b' 1
  where b = start x
        b' = apply_strategy b 1 n_to_place

test_solve_top_row x = in_place b' 1 && in_place b' 2 && in_place b' 3
  where b = start x
        b' = apply_strategy b 1 solve_top_row