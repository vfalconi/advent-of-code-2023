const Puzzle = require('../lib/Puzzle');
const solution = new Puzzle(1);

const getCalibrationValuesNoWords = (line) => {
	const pattern = /[0-9]/g;
	const matches = line.match(pattern) || [ 0 ];
	const p = matches.shift();
	const q = matches.pop() || p;

	return [ p, q ];
}

const getCalibrationValues = (line) => {
	const p = findFirstValue(line);
	const q = findFirstValue(line, -1);

	return [ p, q ];
}

const findFirstValue = (line, direction = 1) => {
	const chars = line.split('');
	const symbolStarters = [
		'o',
		't',
		'f',
		's',
		'e',
		'n',
	];
	const ranges = new Map([
		[ 'one', '1' ],
		[ 'two', '2' ],
		[ 'three', '3' ],
		[ 'four', '4' ],
		[ 'five', '5' ],
		[ 'six', '6' ],
		[ 'seven', '7' ],
		[ 'eight', '8' ],
		[ 'nine', '9' ],
	]);
	let charPointer = (direction > 0 ? 0 : chars.length - 1);
	let p;

	while (p === undefined) {
		if (Array.from(ranges.values()).includes(chars[charPointer])) {
			// char is a digit, take it and bail
			p = chars[charPointer];
		} else if (symbolStarters.includes(chars[charPointer])) {
			// char is the first letter of a number string, get the digit from the string and bail
			ranges.forEach((digit, symbol) => {
				if (line.substr(charPointer, symbol.length) === symbol) {
					p = digit
				}
			});
		}

		if (direction < 1) {
			charPointer--;
		} else {
			charPointer++;
		}
	}

	return p;
}

const sumCalibrationValues = (values, extractionFn) => {
	return values.map(p => {
		return extractionFn(p);
	}).map(v => {
		return parseInt(v.join(''), 10);
	}).reduce((acc, curr) => {
		return acc + curr;
	});
}

const first = (input) => {
	return sumCalibrationValues(input, getCalibrationValuesNoWords);
}

const second = (input) => {
	return sumCalibrationValues(input, getCalibrationValues);
}

solution.steps = [ first, second ];

module.exports = solution;
