#!/bin/sh

function remove_haskell_object_files() {
  rm -f *.o
  rm -f *.hi
}

remove_haskell_object_files
rm -f TestMain
cd Gem
remove_haskell_object_files
