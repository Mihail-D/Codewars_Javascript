function seatsInTheater(nCols, nRows, col, row) {
	let a = nCols - (col - 1);
	let b = nRows - (row);
	return a * b;
}

console.log(seatsInTheater(13, 6, 8, 3)); 
