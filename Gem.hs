module Gem where

import Data.List
import Data.Maybe
import System.Random

type Board = [Int]
data Move = Up | Dn | Lft | Rt deriving (Eq,Show)
--type Strategy = Board -> Int -> [Move]
type Strategy =  Int -> Action
type Action = Board -> [Move]
type Strat = Int -> Action

dim :: Int
dim = 4

size :: Int
size = dim^2

ig :: Board
ig = [1..size]

-- Fuctions for display
format :: Int -> String
format n | n==size    = "   "
         | n<10       = "  " ++ show n
         | otherwise  = " " ++ show n

break_lines :: [String] -> [String]
break_lines []            = []
break_lines ls = ((concat (take dim ls)) ++ "\n") : break_lines (drop dim ls)

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
        swap board x y = map sub [0..size-1]
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
in_place :: Board -> Int -> Bool
in_place b n = position b n == n - 1

in_row :: Board -> Int -> Bool
in_row b n = (position b n) `div` dim == (n-1) `div` dim

blank_to_right :: Strategy
blank_to_right n b | br == nr && bc >  nc = replicate (bc - nc - 1) Lft
                   | br == nr && bc <  nc &&  br == dim - 1 = Up : replicate (nc - bc + 1) Rt ++ [Dn]
                   | br == nr && bc <  nc = Dn : replicate (nc - bc + 1) Rt ++ [Up] 
                   | br >  nr && bc >  nc = replicate (bc - nc - 1) Lft ++ replicate (br - nr) Up
                   | br >  nr && bc == nc = Rt : replicate (br - nr + 0) Up
                   | br >  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (br - nr) Up
                   | br <  nr && bc == nc = Rt : replicate (nr - br + 0) Dn
                   | br <  nr && bc <  nc = replicate (nc - bc + 1) Rt ++ replicate (nr - br) Dn 
                   | br <  nr && bc >  nc = replicate (nr - br - 0) Dn ++ replicate (bc - nc - 1) Lft 
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n

blank_to_left :: Strategy
blank_to_left n b | br == nr && bc >  nc && br == dim - 1 = Up : replicate (bc - nc + 1) Lft ++ [Dn]  -- h430
                  | br == nr && bc >  nc = Dn : replicate (bc -nc + 1) Lft ++ [Up]  -- h84
                  | br == nr && bc <  nc && br == dim - 1 = Up : replicate (nc - bc - 1) Rt ++ [Dn]  -- works for g154
                  | br == nr && bc <  nc = Dn : replicate (nc - bc - 1) Rt ++ [Up]  -- works for h2 
                  | br >  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (br - nr) Up
                  | br >  nr && bc == nc = Lft : replicate (br - nr + 0) Up  -- g12
                  | br >  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (br - nr) Up
                  | br <  nr && bc == nc = Lft : replicate (nr - br + 0) Dn
                  | br <  nr && bc <  nc = replicate (nc - bc - 1) Rt ++ replicate (nr - br) Dn -- works for g2
                  | br <  nr && bc >  nc = replicate (bc - nc + 1) Lft ++ replicate (nr - br - 0) Dn  -- g5
   where br = blank_row b
         bc = blank_col b
         nr = row b n
         nc = col b n

blank_to_col :: Strategy
blank_to_col i b | i >= blank_col b = replicate (i - blank_col b) Rt
                 | otherwise        = replicate (blank_col b - i) Lft

blank_to_row :: Strategy 
blank_to_row i b | i >= blank_row b = replicate (i - blank_row b) Dn
                 | otherwise        = replicate (blank_row b - i) Up

n_to_last_column :: Strategy
n_to_last_column n b | position b n `elem` last_column = blank_to_left n b
                     | position b n `elem` bottom_row  = ms ++ right_shift b' n Up
                     | otherwise = ms ++ right_shift b' n Dn
  where b' = moves b ms
        ms = blank_to_right n b 

right_shift :: Board -> Int -> Move -> [Move]
right_shift b n d = Lft : (take (5*count) $ cycle shift)
   where count = dim - (col b n) - 2
         shift = [d,Rt,Rt,opposite d,Lft]

n_to_top_row :: Strategy
n_to_top_row n = n_to_last_column n +> up_shift n

n_to_place :: Strategy
n_to_place n = n_to_top_row n +> slide_over n

slide_over :: Strategy
slide_over n b  = take (5*count) $ cycle slide
  where slide = [Dn,Lft,Lft,Up,Rt]
        count = col b n - (n `mod` dim - 1)

solve_top_row :: Action 
solve_top_row = n_to_place 1 +> n_to_place 2 +> n_to_place 3

finish_top_row :: Action
finish_top_row = solve_top_row +> n_to_last_column 4 +> blank_to_col 0 +> blank_to_row 1

up_shift :: Strategy
up_shift n b = Up : Rt : (take (5*count) $ cycle shift)
  where count = row b n
        shift = [Dn,Lft,Up,Up,Rt]

do_action :: Board -> Action -> Board
do_action b a = moves b (a b)

(+>) :: Action -> Action -> Action
a1 +> a2 = \b -> let ma1 = a1 b in ma1 ++ a2 (moves b ma1)
