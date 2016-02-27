#!/bin/bash

function remove_haskell_object_files() {
  rm -f *.o
  rm -f *.hi
}

SRC=src
APPS=(TestMain AStarMain RowSolverMain DemoMain)

for i in ${APPS[@]}; do
  rm -f $i
done

for i in $( find $SRC -name "*.hi"); do
	rm $i
done

for i in $( find $SRC -name "*.o"); do
	rm $i
done