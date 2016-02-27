module Main ( main ) where

import Gem.Board
import Gem.AStarSolver

main :: IO ()
main = do
  putStr "Enter puzzle number"
  arg <- getLine
  putStr $ show $ solve_puzzle_astar $ puzzle $ read arg
  putStr "\n"
