module Gem where

import Data.List
import Data.Maybe
import System.Random

type Board = [Int]
data Move = Up | Dn | Lft | Rt deriving (Eq,Show)
type Strategy =  Int -> Action
type Action = Board -> [Move]

dim :: Int
dim = 4

size :: Int
size = dim^2

-- Fuctions for display
format :: Int -> String
format n | n==size    = "   "
         | n<10       = "  " ++ show n
         | otherwise  = " " ++ show n

break_lines :: [String] -> [String]
break_lines [] = []
break_lines ls = ((concat (take dim ls)) ++ "\n") : break_lines (drop dim ls)

out b = putStr $ concat $ (break_lines $ map format b) 

-- Edges
top_row = [0..dim-1]
bottom_row = [size-dim .. size-1]
first_column = [n * dim | n <- [0..dim-1]]
last_column = [n * dim - 1 | n <- [1..dim]]

row_places r = [r*dim+1..(r+1)*dim]

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

-- This moves the BLANK in the direction indicated
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
start seed = moves [1..size] $ rands seed 1000

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
g19 = start 19
g24 = start 24
h1 = start $ -1
h2 = start $ -2
h3 = start $ -3
h4 = start $ -4
h5 = start $ -5
h6 = start $ -6
h7 = start $ -7
h8 = start $ -8
h9 = start $ -9

p0 = do_action g0 (solve_row 0 +> solve_row 1)
p1 = do_action g1 (solve_row 0 +> solve_row 1)
p2 = do_action g2 (solve_row 0 +> solve_row 1)
p3 = do_action g3 (solve_row 0 +> solve_row 1)
p4 = do_action g4 (solve_row 0 +> solve_row 1)
p5 = do_action g5 (solve_row 0 +> solve_row 1)
p6 = do_action g6 (solve_row 0 +> solve_row 1)
p7 = do_action g7 (solve_row 0 +> solve_row 1)

-- solver helpers
in_place :: Board -> Int -> Bool
in_place b n = position b n == n - 1

in_correct_column :: Board -> Int -> Bool
in_correct_column b n = col b n == goal_column n

in_correct_row :: Board -> Int ->  Bool
in_correct_row b n = row b n == goal_row n

one_below_correct_row :: Board -> Int -> Bool
one_below_correct_row b n = row b n == goal_row n + 1

in_last_column :: Board -> Int -> Bool
in_last_column b n = col b n == dim - 1

goal_row :: Int -> Int
goal_row n = (n-1) `div` dim

goal_column :: Int -> Int 
goal_column n = (n-1) `mod` dim

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

n_to_place :: Strategy
n_to_place = n_to_col

n_to_row :: Strategy
n_to_row n = n_to_last_column n +> up_to_goal_row n

n_to_col :: Strategy
n_to_col n = n_to_row n +> slide_left n

slide_left :: Strategy
slide_left n b = Rt : (take (5*count) $ cycle slide)
  where slide = [Dn,Lft,Lft,Up,Rt]
        count = col b n - (n `mod` dim) 

solve_row_front :: Strategy
solve_row_front r = foldr (+>) empty_action (map (\n-> n_to_place n) (take (dim-1) $ row_places r))

empty_action :: Action
empty_action = \_ -> []

fix_last_in_row :: Strategy
fix_last_in_row r b | in_place b n = []
                    | otherwise    = (n_to_last_column n +> up_to_below_goal_row n +> final_slide) b
  where n = dim * (r+1)

solve_row r = solve_row_front r +> to_action [Dn] +> fix_last_in_row r

final_slide :: Action
final_slide = to_action [Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn]

up_to_goal_row :: Strategy
up_to_goal_row n b = (take (5*(row b n - goal_row n)) $ cycle shift_up) 

up_to_below_goal_row :: Strategy
up_to_below_goal_row n b = (take (5*(row b n - goal_row n - 1)) $ cycle shift_up) 

shift_up :: [Move]
shift_up = [Up,Rt,Dn,Lft,Up]

do_action :: Board -> Action -> Board
do_action b a = moves b (a b)

guard_strategy :: Int -> Board -> Strategy -> Action
guard_strategy n b s = if in_place b n then (\_ -> [])
                       else s n

(+>) :: Action -> Action -> Action
a1 +> a2 = \b -> let ma1 = a1 b in ma1 ++ a2 (moves b ma1)

to_action :: [Move] -> Action
to_action ms = \_ -> ms
