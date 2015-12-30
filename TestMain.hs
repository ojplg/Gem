module Main ( main ) where

import TestGem
import Gem
import Test.QuickCheck

main :: IO ()
main = mapM_ quickCheck [prop_adds_right,
                           test_blank_to_row,
                           test_blank_to_col,
                           test_blank_to_right,
                           test_n_to_last_column,
                           test_blank_to_left,
                           test_n_to_place,
                           test_n_to_row,
                           test_n_to_col,
                           test_solve_top_row,
                           test_finish_top_row 
                        ]
 
