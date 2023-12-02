const { globSync } = require('glob');
const solutions = globSync('./src/day-*');

for (let i = 1; i <= solutions.length; i++) {
	const puzzle = require(`./day-${i}`)
	puzzle.solve();

	console.group(`Day ${i}`);
	puzzle.solution.forEach((solution, i) => {
		if (solution.constructor.name === 'Array') {
			console.group();
			solution.forEach(p => {
				console.log(p);
			});
			console.groupEnd();
		} else {
			console.log(`Step ${i+1}`, solution);
		}
	})
	console.groupEnd();
}
