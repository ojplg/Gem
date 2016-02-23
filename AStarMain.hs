module Main ( main ) where

import Gem
import Gem.Board
import Gem.AStarSolver

main :: IO ()
main = do
  putStr $ show $ solve_puzzle_astar g1
  putStr "\n"
