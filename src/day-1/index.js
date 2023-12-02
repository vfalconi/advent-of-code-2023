const Puzzle = require('../lib/Puzzle');
const first = require('./step-1');
const second = require('./step-2');
const solution = new Puzzle(1);

solution.steps = [ first, second ];

module.exports = solution;
