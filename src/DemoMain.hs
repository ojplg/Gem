{--
A program for creating demo entries suitable for the HTML/Javascript viewer.
--}
module Main ( main ) where

import Gem.Demo

main :: IO ()
main = do
  mapM_ putStrLn $ as_strings all_demos

all_demos :: [Demo]
all_demos = [d1,d2,d3,d4,d5]

as_strings :: [Demo] -> [String]
as_strings []     = []
as_strings (d:[]) = to_strings d
as_strings (d:ds) = to_strings d  ++ [","] ++ as_strings ds 