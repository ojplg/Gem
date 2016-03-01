module Gem.AStarSolver where

import Gem.Board 
import Data.Set as Set (Set, empty, insert)
import Data.Graph.AStar
import Data.Maybe (fromJust)

metric :: Board -> Int
metric b = foldr (\n t -> t + (if in_place b n then 0 else 1)) 0 b

solved :: Board -> Bool
solved b = metric b == 0

node_distance :: Board -> Board -> Int
node_distance _ _ = 1

neighbors :: Board -> Set Board
neighbors b = foldr insert empty $ map (move b) ms
  where ms = filter (\m -> not $ illegal_move m b) [Up,Dn,Lft,Rt]

run_astar :: Board -> [Board]
run_astar = fromJust . aStar neighbors node_distance metric solved

find_move :: Board -> Board -> Maybe Move
find_move x y | d == -3   = Just Dn
              | d ==  3   = Just Up
              | d == -1   = Just Rt
              | d ==  1   = Just Lft
              | otherwise = Nothing
  where d = blank x - blank y

board_list_to_moves :: [Board] -> [Maybe Move]
board_list_to_moves (b:[])     = []
board_list_to_moves (b1:b2:bs) = find_move b1 b2 : board_list_to_moves (b2:bs)

solve_puzzle_astar :: Board -> [Move]
solve_puzzle_astar b = map fromJust $ board_list_to_moves $ b:(run_astar b)

