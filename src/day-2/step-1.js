module.exports = (input) => {
	const limits = new Map([
		[ 'red', 12 ],
		[ 'green', 13 ],
		[ 'blue', 14 ],
	]);
	let idSum = 0;

	input.forEach(game => {
		const { gameId, results } = game;
		let ifPossible = gameId;

		results.forEach(result => {
			result.forEach((count, color) => {
				if (limits.get(color) < count) {
					ifPossible = 0;
				}
			});
		});

		idSum += ifPossible;
	});

	return idSum
}
