const sequence = (n,pattern) =>
	[...new Array(n)].map(typeof pattern === 'function' ? pattern : () => pattern)