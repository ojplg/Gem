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
break_lines b ls = ((concat (take (dim b) ls)) ++ "\n") : break_lines b (drop (dim b) ls)

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

-- accessing values
value_at :: Board -> Int -> Int
value_at b n = b !! (n-1)

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

blank_to_last_column :: Action
blank_to_last_column b = blank_to_col (dim b -1) b

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

cycle_n_bottom_rows_counterclockwise :: Strategy
cycle_n_bottom_rows_counterclockwise n b = replicate n Lft ++ [Up] ++ replicate n Rt ++ [Dn]

cycle_bottom_rows_counterclockwise :: Action
cycle_bottom_rows_counterclockwise b = replicate (dim b - 1) Lft ++ [Up] ++ replicate (dim b - 1) Rt ++ [Dn]

next_to_last_row_tiles :: Board -> [Int]
next_to_last_row_tiles b = [size b - 2 * dim b + 1 .. size b - dim b]

solve_front_next_to_last_row :: Action
solve_front_next_to_last_row b = (prep_next_to_last_row +> foldr (+>) empty_action (map place_in_next_to_last_row ns)) b
  where ns = take (dim b - 1) $ next_to_last_row_tiles b

solve_next_to_last_row :: Action
solve_next_to_last_row = solve_front_next_to_last_row +> fix_last_in_second_to_last_row

fix_last_in_second_to_last_row :: Action
fix_last_in_second_to_last_row b | in_place b n = []
                                 | otherwise    = (cycle_until_past_predecessor n +> 
                                                    move_blank_above_target n +>
                                                    to_action [Dn] +>
                                                    blank_to_corner +>
                                                    cycle_until_restored n +>
                                                    correct_last_column_interloper) b
  where n = length b - dim b

prep_next_to_last_row :: Action
prep_next_to_last_row = blank_to_last_column +> to_action [Dn]

place_in_next_to_last_row :: Strategy
place_in_next_to_last_row n b | col b n >= g = cycle_until_placed n b
                              | otherwise    = place_from_left_and_below n b
  where g = goal_column b n

place_from_left_and_below :: Strategy
place_from_left_and_below n b = (cycle_until_past_predecessor n +> move_blank_above_target n +> to_action [Dn] +> 
                                  blank_to_corner +> cycle_until_restored n +> correct_interloper n +> blank_to_corner) b

cycle_until_past_predecessor :: Strategy 
cycle_until_past_predecessor n b | col b n > col b (n-1) = []
                                 | otherwise             = (cycle_bottom_rows_counterclockwise +> cycle_until_past_predecessor n) b

correct_interloper :: Strategy
correct_interloper n b | in_place b (n-1) = []
                       | otherwise        = Up : replicate m Lft ++ [Dn] ++ replicate p Rt ++ [Up,Rt,Dn]
  where m = dim b - 1
        p = goal_column b n

correct_last_column_interloper :: Action
correct_last_column_interloper b | in_place b (n-1) = []
                                 | otherwise        = Lft:Up:replicate (m+1) Lft ++ [Dn] 
                                                        ++ replicate m Rt
  where n = length b - dim b
        m = dim b - 1

move_blank_above_target :: Strategy
move_blank_above_target n b = Up : replicate m Lft
  where m = dim b - col b n - 1

cycle_until_restored :: Strategy
cycle_until_restored n b | in_correct_column b n = []
                         | otherwise             = (cycle_bottom_rows_clockwise +> cycle_until_restored n) b

cycle_counterclockwise_until_restored :: Strategy
cycle_counterclockwise_until_restored n b | in_correct_column b n = []
                                          | otherwise             = (cycle_bottom_rows_counterclockwise +> cycle_counterclockwise_until_restored n) b


cycle_bottom_rows_clockwise :: Action
cycle_bottom_rows_clockwise b = [Up] ++ replicate m Lft ++ [Dn] ++ replicate m Rt
  where m = dim b - 1

blank_to_corner :: Action
blank_to_corner b = replicate m Rt
  where m = dim b - blank_col b - 1

cycle_until_placed :: Strategy
cycle_until_placed n b | in_place b n = []
                       | otherwise    = (cycle_n_bottom_rows_counterclockwise g +> cycle_until_placed n) b
  where g = dim b - goal_column b n - 1

-- Work on the final row
solve_last_row :: Action
solve_last_row b = []

fix_first_in_last_row :: Action
fix_first_in_last_row b | in_place b n = []
                        | otherwise    = (replicate_action 2 cycle_bottom_rows_clockwise 
                                           +> to_action (replicate (dim b - 2) Lft)
                                           +> to_action (Up : replicate m Rt ++ [Dn])
                                           +> replicate_action 2 cycle_bottom_rows_counterclockwise
                                           +> fix_bottom_row_interloper) b
  where n = size b - dim b + 1
        m = dim b - 1

fix_first_in_last_roj :: Action
fix_first_in_last_roj b | in_place b n = []
                        | otherwise    = (replicate_action m cycle_bottom_rows_clockwise 
                                           +> to_action (replicate m Lft)
                                           +> to_action [Up]
                                           +> to_action (replicate m Rt)
                                           +> to_action [Dn]
                                           +> cycle_counterclockwise_until_restored p) b
  where n = size b - dim b + 1
        m = col b n
        p = size b - dim b

fix_first_in_last_rok :: Action
fix_first_in_last_rok b | in_place b n = []
                        | otherwise    = (to_action (Up : replicate m Lft ++ [Dn] ++ replicate m Rt)
                                           +> cycle_bottom_rows_counterclockwise
                                           +> to_action (replicate (c-1) Lft ++ [Up] ++ 
                                                           replicate (c-1) Lft ++ [Dn] ++
                                                           replicate (dim b - 1) Rt)) b
  where n = size b - dim b + 1
        c = col b n
        m = dim b - c - 1

{-- for q1 
[Up,Lft,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Lft,Up,Rt,Rt,Dn,Lft,Up,Lft,Dn,Rt,Rt,Rt]
--}


fix_bottom_row_interloper :: Action
fix_bottom_row_interloper b = interloper i b
  where i = find_bottom_row_interloper b

interloper :: Maybe Int -> Board -> [Move]
interloper Nothing  _ = []
interloper (Just n) b = replicate l Lft ++ [Up] ++ replicate c Lft ++ [Dn] ++ replicate (dim b - 1) Rt
  where c = col b n
        l = dim b - c - 1

find_bottom_row_interloper :: Board -> Maybe Int
find_bottom_row_interloper b = find (\a -> a > l) ns
  where ns = map (\n -> value_at b n) [size b - 2 * dim b + 1 .. size b - dim b]
        l = size b - dim b

{--
find :: (a -> a -> Bool) -> a -> [a] -> Maybe a
find f _ []     = Nothing
find f v (a:as) = if f v == a then Just a
                    else find f v as
                    --}

blank_under_target :: Strategy
blank_under_target n b = replicate m Lft
  where m = blank_col b - col b n

cycle_until_beyond_predecessor :: Strategy
cycle_until_beyond_predecessor n b | col b n <= col b (n-1) = (cycle_bottom_rows_clockwise +> cycle_until_beyond_predecessor n) b
                                   | otherwise              = []

cycle_n_bottom_rows_counterclockwise_from_left :: Strategy
cycle_n_bottom_rows_counterclockwise_from_left n b = Up : replicate n Rt ++ [Dn] ++ replicate n Lft

-- Solve the entire puzzle
solve_puzzle :: Action
solve_puzzle = solve_top_rows +> solve_next_to_last_row +> solve_last_row

shift_up :: [Move]
shift_up = [Up,Rt,Dn,Lft,Up]

do_action :: Board -> Action -> Board
do_action b a = moves b (a b)

guard_strategy :: Int -> Board -> Strategy -> Action
guard_strategy n b s = if in_place b n then (\_ -> [])
                       else s n

replicate_action :: Int -> Action -> Action
replicate_action n a = foldr (+>) empty_action $ replicate n a

(+>) :: Action -> Action -> Action
a1 +> a2 = \b -> let ma1 = a1 b in ma1 ++ a2 (moves b ma1)

to_action :: [Move] -> Action
to_action ms = \_ -> ms

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
g20 = puzzle 20
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

p0 = do_action g0 $ solve_top_rows +> solve_next_to_last_row
p1 = do_action g1 $ solve_top_rows +> solve_next_to_last_row
p2 = do_action g2 $ solve_top_rows +> solve_next_to_last_row
p3 = do_action g3 $ solve_top_rows +> solve_next_to_last_row
p4 = do_action g4 $ solve_top_rows +> solve_next_to_last_row
p5 = do_action g5 $ solve_top_rows +> solve_next_to_last_row
p6 = do_action g6 $ solve_top_rows +> solve_next_to_last_row
p7 = do_action g7 $ solve_top_rows +> solve_next_to_last_row
p8 = do_action g8 $ solve_top_rows +> solve_next_to_last_row
p9 = do_action g9 $ solve_top_rows +> solve_next_to_last_row
p10 = do_action g10 $ solve_top_rows +> solve_next_to_last_row
p11 = do_action g11 $ solve_top_rows +> solve_next_to_last_row

q1 = do_action h1 $ solve_top_rows +> solve_next_to_last_row
q2 = do_action h2 $ solve_top_rows +> solve_next_to_last_row
q3 = do_action h3 $ solve_top_rows +> solve_next_to_last_row
q4 = do_action h4 $ solve_top_rows +> solve_next_to_last_row
