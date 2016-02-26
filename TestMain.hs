module Main ( main ) where

import TestGem
import Gem
import Gem.Board
import Test.QuickCheck

main :: IO ()
main = mapM_ quickCheck [prop_adds_right,
                           test_blank_to_right,
                           test_n_to_last_column,
                           test_blank_to_left,
                           test_fix_easy_tile,
                           test_solve_easy_row_front,
                           test_finish_top_row,
                           test_finish_top_rows,
                           test_solve_front_next_to_last_row,
                           test_solve_next_to_last_row,
                           test_solve_puzzle
                        ]
 
