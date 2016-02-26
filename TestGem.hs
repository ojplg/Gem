module TestGem where

import Gem
import Gem.Board
import Test.QuickCheck

prop_adds_right n = (sum p) == sum [1..(size p)]
  where p = puzzle n

valid_tile b n = n `mod` (size b - 1) + 1
valid_top_tile b n = n `mod` (dim b - 1) + 1

test_blank_to_right x = position b 1 `elem` last_column b || position b' 1 + 1 == blank b'
  where b  = puzzle x
        b' = do_action b $ blank_to_right 1

-- Make sure that after calling n_to_last_column on the n tile:
-- a) the n tile is in the last column
-- b) the n tile is in the same row as it puzzleed
-- c) the blank is to the immediate left of the n tile
test_n_to_last_column x = position b' n `elem` last_column b && 
                            row b n == row b' n &&
                            blank b' == position b' n - 1
  where b  = puzzle x
        b' = do_action b $ n_to_last_column n
        n  = valid_tile b x

row_done :: Board -> Int -> Bool
row_done b n = all (\n -> in_place b n) $ row_places b n

test_blank_to_left x = position b n `elem` first_column b || position b' n == blank b' + 1
  where b  = puzzle x
        b' = do_action b $ blank_to_left n
        n = valid_tile b x

test_fix_easy_tile x = in_place b' n
                      && blank b' == position b' n + 1
  where b = puzzle x
        b' = do_action b $ fix_easy_tile n
        n = valid_top_tile b x

test_solve_easy_row_front x = all (in_place b') [1..(dim b -1)]
  where b = puzzle x
        b' = do_action b $ solve_easy_row_front 0

test_finish_top_row x = all (in_place b') ps
  where b = puzzle x
        b' = do_action b $ solve_row 0
        ps = [1..dim b]

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

test_solve_puzzle x = all (in_place b) b
  where b = do_action (puzzle x) solve_puzzle
