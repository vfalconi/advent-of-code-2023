module.exports = (values, extractionFn) => {
	return values.map(p => {
		return extractionFn(p);
	}).map(v => {
		return parseInt(v.join(''), 10);
	}).reduce((acc, curr) => {
		return acc + curr;
	});
}
