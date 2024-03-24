const isSantaClausable = object =>
	['sayHoHoHo','distributeGifts','goDownTheChimney'].every(
		methodName => typeof object[methodName] === 'function'
	)