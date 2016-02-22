module Gem.AStarSolver where

import Gem.Board 
import Gem
import Data.Set as Set (Set, empty, insert)
import Data.Graph.AStar
import Data.Maybe (fromJust)

metric :: Board -> Int
metric b = foldr (\n t -> t + (if in_place b n then 0 else 1)) 0 b
  where l = size b

solved :: Board -> Bool
solved b = metric b == 0

distance :: Board -> Board -> Int
distance _ _ = 1

neighbors :: Board -> Set Board  
neighbors b = foldr maybe_insert empty (map (\m -> neighbor b m) [Up,Dn,Lft,Rt])

neighbor :: Board -> Move -> Maybe Board
neighbor b m | no m b    = Nothing
             | otherwise = Just $ move b m

maybe_insert :: (Ord a) => Maybe a -> Set a -> Set a
maybe_insert (Just a) s = insert a s
maybe_insert Nothing  s = s

run_astar :: Board -> Maybe [Board]
run_astar b = aStar neighbors distance metric solved b

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
solve_puzzle_astar b = map fromJust $ board_list_to_moves $ b:(fromJust $ run_astar b)