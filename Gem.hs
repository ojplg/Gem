module Gem where

import Data.List
import Data.Maybe
import System.Random

type Board = [Int]
data Move = Up | Dn | Lft | Rt deriving (Eq,Show)
type Strategy =  Int -> Action
type Action = Board -> [Move]

size :: Board -> Int
size b = (dim b)^2

dim :: Board -> Int
dim = round . sqrt . fromIntegral . length

-- Fuctions for display
format :: Board -> Int -> String
format b n | n==size b  = "   "
           | n<10       = "  " ++ show n
           | otherwise  = " " ++ show n

break_lines :: Board -> [String] -> [String]
break_lines b [] = []
break_lines b ls = ((concat (take (dim b )ls)) ++ "\n") : break_lines b (drop (dim b) ls)

out b = putStr $ concat $ (break_lines b $ map (format b) b) 

-- Edges
top_row b = [0..dim b-1]
bottom_row b = [size b-dim b .. size b-1]
first_column b = [n * dim b| n <- [0..dim b-1]]
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
move :: Board -> Move -> Board
move b m | no m b    = b
         | otherwise = move' b m
  where move' b Up  = swap b (blank b) ((blank b)-dim b)
        move' b Dn  = swap b (blank b) ((blank b)+dim b)
        move' b Lft = swap b (blank b) ((blank b)-1)
        move' b Rt  = swap b (blank b) ((blank b)+1)
        swap board x y = map sub [0..size b-1]
          where sub n | n == x    = board !! y
                      | n == y    = board !! x
                      | otherwise = board !! n

moves :: Board -> [Move] -> Board
moves b ms = foldl move b ms

row :: Board -> Int -> Int
row b n = position b n `div` dim b

col :: Board -> Int -> Int
col b n = position b n `mod` dim b

blank_row :: Board -> Int
blank_row b = row b $ size b

blank_col :: Board -> Int
blank_col b = col b $ size b

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
start seed = puzzle' seed 4

puzzle :: Int -> Board
puzzle seed = puzzle' seed (seed `mod` 3 + 3)

puzzle' :: Int -> Int -> Board
puzzle' seed dimen = moves [1..dimen^2] $ rands seed 1000

-- some games
g0 = puzzle 0
g1 = puzzle 1
g2 = puzzle 2
g3 = puzzle 3
g4 = puzzle 4
g5 = puzzle 5
g6 = puzzle 6
g7 = puzzle 7
g8 = puzzle 8
g9 = puzzle 9
g10 = puzzle 10
g11 = puzzle 11
g12 = puzzle 12
g19 = puzzle 19
g24 = puzzle 24
h1 = puzzle $ -1
h2 = puzzle $ -2
h3 = puzzle $ -3
h4 = puzzle $ -4
h5 = puzzle $ -5
h6 = puzzle $ -6
h7 = puzzle $ -7
h8 = puzzle $ -8
h9 = puzzle $ -9

p0 = do_action g0 solve_top_rows
p1 = do_action g1 solve_top_rows
p2 = do_action g2 solve_top_rows
p3 = do_action g3 solve_top_rows
p4 = do_action g4 solve_top_rows
p5 = do_action g5 solve_top_rows
p6 = do_action g6 solve_top_rows
p7 = do_action g7 solve_top_rows
p8 = do_action g8 solve_top_rows
p9 = do_action g9 solve_top_rows

-- solver helpers
in_place :: Board -> Int -> Bool
in_place b n = position b n == n - 1

in_correct_column :: Board -> Int -> Bool
in_correct_column b n = col b n == goal_column b n

in_correct_row :: Board -> Int ->  Bool
in_correct_row b n = row b n == goal_row b n

one_below_correct_row :: Board -> Int -> Bool
one_below_correct_row b n = row b n == goal_row b n + 1

in_last_column :: Board -> Int -> Bool
in_last_column b n = col b n == dim b - 1

goal_row :: Board -> Int -> Int
goal_row b n = (n-1) `div` dim b

goal_column :: Board -> Int -> Int 
goal_column b n = (n-1) `mod` dim b

blank_to_right :: Strategy
blank_to_right n b | br == nr && bc >  nc = replicate (bc - nc - 1) Lft
                   | br == nr && bc <  nc &&  br == dim b - 1 = Up : replicate (nc - bc + 1) Rt ++ [Dn]
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
blank_to_left n b | br == nr && bc >  nc && br == dim b - 1 = Up : replicate (bc - nc + 1) Lft ++ [Dn]  -- h430
                  | br == nr && bc >  nc = Dn : replicate (bc -nc + 1) Lft ++ [Up]  -- h84
                  | br == nr && bc <  nc && br == dim b - 1 = Up : replicate (nc - bc - 1) Rt ++ [Dn]  -- works for g154
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
n_to_last_column n b | position b n `elem` last_column b = blank_to_left n b
                     | position b n `elem` bottom_row b  = ms ++ right_shift b' n Up
                     | otherwise = ms ++ right_shift b' n Dn
  where b' = moves b ms
        ms = blank_to_right n b 

right_shift :: Board -> Int -> Move -> [Move]
right_shift b n d = Lft : (take (5*count) $ cycle shift)
   where count = dim b - (col b n) - 2
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
        count = col b n - (n `mod` dim b) 

solve_row_front :: Strategy
solve_row_front r b = foldr (+>) empty_action (map (\n -> n_to_place n) ps) b
  where ps = take (dim b-1) $ row_places b r

empty_action :: Action
empty_action = \_ -> []

fix_last_in_row :: Strategy
fix_last_in_row r b | in_place b n = []
                    | otherwise    = (n_to_last_column n +> up_to_below_goal_row n +> final_slide) b
  where n = dim b * (r+1)

solve_row :: Strategy
solve_row r = solve_row_front r +> to_action [Dn] +> fix_last_in_row r

final_slide :: Action
final_slide = to_action [Lft,Lft,Up,Rt,Rt,Rt,Dn,Lft,Up,Lft,Lft,Dn]

up_to_goal_row :: Strategy
up_to_goal_row n b = (take (5*(row b n - goal_row b n)) $ cycle shift_up) 

up_to_below_goal_row :: Strategy
up_to_below_goal_row n b = (take (5*(row b n - goal_row b n - 1)) $ cycle shift_up) 

solve_top_rows :: Action
solve_top_rows b = foldr (+>) empty_action (map solve_row rs) b
  where rs = [0..dim b-3]

cycle_bottom_rows :: Action
cycle_bottom_rows b = replicate d Rt ++ [Dn] ++ replicate d Lft
  where d = dim b

solve_next_to_last_row :: Action
solve_next_to_last_row = (blank_to_col 0) +> cycle_bottom_rows

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
