module Gem where

import Data.List
import Data.Maybe
import System.Random

type Board = [Int]
data Move = Up | Dn | Lft | Rt deriving (Eq,Show)

dim :: Int
dim = 4

size :: Int
size = dim^2

ig :: Board
ig = [1..size]

-- Fuctions for display
format :: Int -> String
format n | n<10       = "  " ++ show n
         | n==size    = "   "
         | otherwise  = " " ++ show n

break_lines :: [String] -> [String]
break_lines []            = []
break_lines (a:b:c:d:es)  = a:b:c:d:"\n" : break_lines es

out b = putStr $ concat $ (break_lines $ map format b) 

-- Edges
top_row = [0..dim-1]
bottom_row = [size-dim .. size-1]
first_column = [n * dim | n <- [0..dim-1]]
last_column = [n * dim - 1 | n <- [1..dim]]

-- Functions for moving
position :: Board -> Int -> Int
position b n = fromJust $ findIndex (==n) b

blank :: Board -> Int
blank b = position b size

opposite :: Move -> Move
opposite Up = Dn
opposite Dn = Up
opposite Lft = Rt
opposite Rt = Lft

no Up  b = blank b `elem` top_row
no Dn  b = blank b `elem` bottom_row
no Lft b = blank b `elem` first_column
no Rt  b = blank b `elem` last_column

move :: Board -> Move -> Board
move b m | no m b    = b
         | otherwise = move' b m
  where move' b Up  = swap b (blank b) ((blank b)-dim)
        move' b Dn  = swap b (blank b) ((blank b)+dim)
        move' b Lft = swap b (blank b) ((blank b)-1)
        move' b Rt  = swap b (blank b) ((blank b)+1)
        swap board x y = map sub [0..15]
          where sub n | n == x    = board !! y
                      | n == y    = board !! x
                      | otherwise = board !! n

moves :: Board -> [Move] -> Board
moves b ms = foldl move b ms

row :: Board -> Int -> Int
row b n = position b n `div` dim

col :: Board -> Int -> Int
col b n = position b n `mod` dim

blank_row :: Board -> Int
blank_row b = row b size

blank_col :: Board -> Int
blank_col b = col b size

-- randomizer
rands :: Int -> Int -> [Move]
rands seed length = map to_move $ rand_int_list seed length
   
to_move :: Int -> Move
to_move i | i `mod` 4==0 = Up
          | i `mod` 4==1 = Dn
          | i `mod` 4==2 = Lft
          | otherwise    = Rt   

rand_int_list :: Int -> Int -> [Int]
rand_int_list seed length = map fst $ rand_list seed length

build_rand_list :: Int -> [(Int, StdGen)] -> [(Int, StdGen)]
build_rand_list 1 rs     = rs
build_rand_list n (r:rs) = build_rand_list (n-1) ((next $ snd r):(r:rs))

rand_list :: Int -> Int -> [(Int, StdGen)]
rand_list seed length = build_rand_list length [next $ mkStdGen seed]

start :: Int -> Board
start seed = moves ig $ rands seed 1000

-- some games
g0 = start 0
g1 = start 1
g2 = start 2
g3 = start 3
g4 = start 4
g5 = start 5
g6 = start 6
g7 = start 7
g8 = start 8
g9 = start 9
g10 = start 10
g11 = start 11
g12 = start 12
g154 = start 154
h1 = start $ -1
h2 = start $ -2
h3 = start $ -3
h4 = start $ -4
h5 = start $ -5
h6 = start $ -6
h7 = start $ -7
h8 = start $ -8
h9 = start $ -9
h84 = start $ -84
h140 = start $ -140
h430 = start $ -430


-- solver helpers
data Direction = North | NorthWest | West | SouthWest | South | SouthEast | East | NorthEast deriving (Eq,Show)

same_col :: Int -> Int -> Bool
same_col x y = x `mod` dim == y `mod` dim

same_row :: Int -> Int -> Bool
same_row x y = x `div` dim == y `div` dim

relative :: Int -> Int -> Direction
relative x y | same_col x y && x < y = North
             | same_col x y && x > y = South
             | same_row x y && x < y = East
             | same_row x y && x > y = West
             | x `mod` dim < y `mod` dim && x `div` dim < y `div` dim = NorthEast
             | x `mod` dim > y `mod` dim && x `div` dim < y `div` dim = NorthWest
             | x `mod` dim > y `mod` dim && x `div` dim > y `div` dim = SouthWest
             | otherwise = SouthEast

in_place :: Board -> Int -> Bool
in_place b n = position b n == n - 1

in_row :: Board -> Int -> Bool
in_row b n = (position b n) `div` dim == (n-1) `div` dim

solve :: Board -> [Move]
solve b = []

blank_to_top_left :: [Move]
blank_to_top_left = [Up,Up,Up,Lft,Lft,Lft]

fix :: Board -> Int -> [Move]
fix b n = []

move_to_last_column :: Board -> Int -> [Move]
move_to_last_column b n = []

one_to_top :: Board -> [Move]
one_to_top b = if (position b 1<4) then []
                  else move_one_up b

move_one_up :: Board -> [Move]
move_one_up b = []


blank_to_right :: Board -> Int -> [Move]
blank_to_right b n | br == nr && bc >  nc = replicate (bc - nc - 1) Lft
                   | br == nr && bc <  nc &&  br == dim - 1 = Up : replicate (nc - bc + 1) Rt ++ [Dn]
                   | br == nr && bc <  nc = Dn : replicate (nc - bc + 1) Rt ++ [Up] 
                   | br >  nr && bc >  nc = replicate (bc - nc - 1) Lft ++ replicate (br - nr) Up
                   | br >  nr && bc == nc = Rt : replicate (br - nr + 0) Up
                   | br >  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (br - nr) Up
                   | br <  nr && bc == nc = Rt : replicate (nr - br + 0) Dn
                   | br <  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (nr - br) Dn
                   | br <  nr && bc >  nc = replicate (bc - nc - 1) Lft ++ replicate (nr - br - 0) Dn
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n

blank_to_left :: Board -> Int -> [Move] 
blank_to_left b n | br == nr && bc >  nc && br == dim - 1 = Up : replicate (bc - nc + 1) Lft ++ [Dn]  -- h430
                  | br == nr && bc >  nc = Dn : replicate (bc -nc + 1) Lft ++ [Up]  -- h84
                  | br == nr && bc <  nc && br == dim - 1 = Up : replicate (nc - bc - 1) Rt ++ [Dn]  -- works for g154
                  | br == nr && bc <  nc = Dn : replicate (nc - bc - 1) Rt ++ [Up]  -- works for h2 
                  | br >  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (br - nr) Up
                  | br >  nr && bc == nc = Lft : replicate (br - nr + 0) Up  -- g12
                  | br >  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (br - nr) Up
                  | br <  nr && bc == nc = Lft : replicate (nr - br + 0) Dn
                  | br <  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (nr - br) Dn        -- works for g2
                  | br <  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (nr - br - 0) Dn  -- g5
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n


n_to_last_column :: Board -> Int -> [Move]
n_to_last_column b n | position b n `elem` last_column = []
                     | position b n `elem` bottom_row  = ms ++ right_shift b' n Up
                     | otherwise = ms ++ right_shift b' n Dn
  where b' = moves b ms
        ms = blank_to_right b n 

right_shift b n d = Lft : (take (5*count) $ cycle shift)
   where count = dim - (col b n) - 2
         shift = [d,Rt,Rt,opposite d,Lft]

apply_strategy :: Board -> Int -> (Board -> Int -> [Move]) -> Board
apply_strategy b n f = moves b $ f b n


