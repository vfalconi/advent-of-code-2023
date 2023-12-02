module.exports = (line) => {
	const pattern = /[0-9]/g;
	const matches = line.match(pattern) || [ 0 ];
	const p = matches.shift();
	const q = matches.pop() || p;

	return [ p, q ];
}
