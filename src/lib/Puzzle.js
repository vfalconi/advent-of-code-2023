const { readFileSync } = require('node:fs');

class Puzzle {
	constructor(day) {
		this.day = day;
		this.sample = this.getSample();
		this.input = this.getInput();
		this.steps = [];
	}

	solve = (useSample = false) => {
		this.solution = this.steps.map((step, n) => {
			return step((useSample ? this.sample[n] : this.input));
		})
	}

	readPuzzleInput = (type = 'input') => {
		const rawInput = readFileSync(`src/day-${this.day}/${type}.txt`, 'utf8');
		return this.trimPuzzleInput(rawInput);
	}

	trimPuzzleInput = (txt) => {
		return txt.split("\n").filter(line => line !== '');
	}

	getSample = () => {
		return [
			this.readPuzzleInput('sample-1'),
			this.readPuzzleInput('sample-2')
		];
	}

	getInput = () => {
		return this.readPuzzleInput();
	}
}

module.exports = Puzzle