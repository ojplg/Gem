{--
A program that solves many puzzles using the RowSolver of different sizes and
outputs their solutions to STDOUT.
--}
module Main ( main ) where

import Gem.Board
import Gem.RowSolver
import Data.List (intersperse)

main :: IO ()
main = do
  mapM_ putStrLn $ do_many_puzzles 5

do_many_puzzles :: Int -> [String]
do_many_puzzles n = map (format_puzzle_solution . do_puzzle) ns
  where ns = [(max_puzzle_size-2)*b+a | a <- [0..(max_puzzle_size-3)] , b <- [0..n-1]]

do_puzzle :: Int -> (Board,[Move])
do_puzzle n = (p,ms)
  where p  = puzzle n
        ms = solve_puzzle p

format_puzzle_solution :: (Board,[Move]) -> String
format_puzzle_solution (p,ms) = concat $ intersperse ";" tokens
  where tokens = [show $ dim p,
                   show $ length p,
                   show $ length ms,
                   show p,
                   show ms]

