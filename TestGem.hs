module TestGem where

import Gem
import Test.QuickCheck

prop_adds_right x = (sum $ start x) == 136

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