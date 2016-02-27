#!/bin/sh

PROGRAMS=(TestMain AStarMain RowSolverMain)

function build_program {
	ghc --make $1.hs
	mv $1 ..
}

cd src

for i in ${PROGRAMS[@]}; do
	build_program $i
done