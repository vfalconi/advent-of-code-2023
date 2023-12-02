module.exports = (line, direction = 1) => {
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
