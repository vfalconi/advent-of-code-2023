const findFirstValue = require('./findFirstValue')

module.exports = (line) => {
	const p = findFirstValue(line);
	const q = findFirstValue(line, -1);

	return [ p, q ];
}
