const getMinimums = require('./getMinimums');
const getPowers = require('./getPowers');
const sumPowers = require('./sumPowers');

module.exports = (input) => {
	return sumPowers(getPowers(getMinimums(input)));
}
