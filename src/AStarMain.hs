module Main ( main ) where

import Data.List (intersperse)
import Gem.Board
import Gem.AStarSolver

main :: IO ()
main = do
  mapM_ putStrLn $ do_many_puzzles 20

do_many_puzzles :: Int -> [String]
do_many_puzzles n = map (format_puzzle_solution . do_puzzle) ns
  where ns = [(max_puzzle_size-2)*n | n <- [1..n]]

do_puzzle :: Int -> (Board,[Move])
do_puzzle n = (p,ms)
  where p  = puzzle n
        ms = solve_puzzle_astar p

format_puzzle_solution :: (Board,[Move]) -> String
format_puzzle_solution (p,ms) = concat $ intersperse ";" tokens
  where tokens = [show $ dim p,
                   show $ length p,
                   show $ length ms,
                   show p,
                   show ms]

