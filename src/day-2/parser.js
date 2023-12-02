module.exports = (input) => {
	let [ gameId, results ] = input.split(': ');

	gameId = parseInt(gameId.split(' ')[1], 10);

	results = results.split('; ');

	results = results.map(set => {
		const sets = set.split(', ').map(p => {
			const a = p.split(' ');
			return [ a[1], parseInt(a[0], 10) ];
		});

		return new Map(sets);
	});

	return {
		gameId,
		results,
	};
}
