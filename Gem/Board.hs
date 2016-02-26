module Gem.Board where

import Data.List
import Data.List.Split (chunksOf)
import Data.Maybe
import System.Random

type Board = [Int]
data Move = Up | Dn | Lft | Rt deriving (Eq,Show)
type Strategy =  Int -> Action
type Action = Board -> [Move]

size :: Board -> Int
size = length

dim :: Board -> Int
dim = round . sqrt . fromIntegral . length

-- Fuctions for display
format_tile :: Board -> Int -> String
format_tile b n | n==size b  = "   "
                | n<10       = "  " ++ show n
                | otherwise  = " " ++ show n

out :: Board -> IO ()
out b = mapM_ putStrLn $ map concat $ chunksOf (dim b) $ map (format_tile b) b

-- Edges
top_row b = [0..dim b-1]
bottom_row b = [size b-dim b .. size b-1]
first_column b = [n * dim b | n <- [0..dim b-1]]
last_column b = [n * dim b - 1 | n <- [1..dim b]]

row_places b r = [r*dim b+1..(r+1)*dim b]

-- Functions for moving
position :: Board -> Int -> Int
position b n = fromJust $ findIndex (==n) b

blank :: Board -> Int
blank b = position b $ size b

opposite :: Move -> Move
opposite Up = Dn
opposite Dn = Up
opposite Lft = Rt
opposite Rt = Lft

no Up  b = blank b `elem` top_row b
no Dn  b = blank b `elem` bottom_row b 
no Lft b = blank b `elem` first_column b
no Rt  b = blank b `elem` last_column b

-- This moves the BLANK in the direction indicated
sloppy_move :: Board -> Move -> Board
sloppy_move b m | no m b    = b
                | otherwise = move' b m

move :: Board -> Move -> Board
move b m | no m b    = error $  "Cannot make move " ++ show m ++ " on board " ++ show b
         | otherwise = move' b m

move' :: Board -> Move -> Board
move' b Up  = swap b (blank b) ((blank b)-dim b)
move' b Dn  = swap b (blank b) ((blank b)+dim b)
move' b Lft = swap b (blank b) ((blank b)-1)
move' b Rt  = swap b (blank b) ((blank b)+1)
        
swap :: Board -> Int -> Int -> Board
swap b x y = map sub [0..size b-1]
  where sub n | n == x    = b !! y
              | n == y    = b !! x
              | otherwise = b !! n

sloppy_moves :: Board -> [Move] -> Board
sloppy_moves = foldl sloppy_move

moves :: Board -> [Move] -> Board
moves = foldl move

row :: Board -> Int -> Int
row b n = position b n `div` dim b

col :: Board -> Int -> Int
col b n = position b n `mod` dim b

blank_row :: Board -> Int
blank_row b = row b $ size b

blank_col :: Board -> Int
blank_col b = col b $ size b

-- accessing values
value_at :: Board -> Int -> Int
value_at b n = b !! (n-1)

-- randomizer
random_moves :: Int -> Int -> [Move]
random_moves length seed = map to_move $ random_int_list length $ mkStdGen seed
   
to_move :: Int -> Move
to_move i | i `mod` 4==0 = Up
          | i `mod` 4==1 = Dn
          | i `mod` 4==2 = Lft
          | otherwise    = Rt   

random_int_list :: Int -> StdGen -> [Int]
random_int_list n = take n . unfoldr (Just . random)

puzzle :: Int -> Board
puzzle seed = puzzle' seed (seed `mod` 4 + 3)
  where puzzle' seed d = sloppy_moves [1..d^2] $ random_moves (50*d^2) seed

-- solver helpers
in_place :: Board -> Int -> Bool
in_place b n = position b n == n - 1

in_correct_column :: Board -> Int -> Bool
in_correct_column b n = col b n == goal_column b n

in_correct_row :: Board -> Int ->  Bool
in_correct_row b n = row b n == goal_row b n

one_below_correct_row :: Board -> Int -> Bool
one_below_correct_row b n = row b n == goal_row b n + 1

goal_row :: Board -> Int -> Int
goal_row b n = (n-1) `div` dim b

goal_column :: Board -> Int -> Int 
goal_column b n = (n-1) `mod` dim b
