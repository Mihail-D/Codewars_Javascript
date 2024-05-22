function enough(cap, on, wait) {
	return cap > on + wait ? 0 : wait - (cap - on);


}

console.log(enough(100, 60, 50)); //10