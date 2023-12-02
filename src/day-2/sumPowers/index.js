module.exports = (powers) => {
	return powers.reduce((p, q) => {
		return p + q;
	});
}
