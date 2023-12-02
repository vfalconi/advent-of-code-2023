const Puzzle = require('../lib/Puzzle');
const first = require('./step-1');
const second = require('./step-2');
const parser = require('./parser');
const solution = new Puzzle(2);

solution.steps = [ first, second ];

solution.parser = parser;

module.exports = solution;
