module.exports = (minimums) => {
	return minimums.map(mins => {
		return Array.from(mins.values()).reduce((p, q) => {
			return p * q
		})
	})
}
