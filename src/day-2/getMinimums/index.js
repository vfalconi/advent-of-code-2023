module.exports = (input) => {
	return input.map(game => {
		const minimums = new Map([
			[ 'red', 0 ],
			[ 'green', 0 ],
			[ 'blue', 0 ],
		]);

		game.results.forEach(result => {
			result.forEach((count, color) => {
				if (minimums.get(color) < count) {
					minimums.set(color, count);
				}
			});
		});

		return minimums;
	})
}
