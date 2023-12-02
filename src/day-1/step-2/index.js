const sumCalibrationValues = require('../sumCalibrationValues');
const getCalibrationValues = require('../getCalibrationValues');

module.exports = (input) => {
	return sumCalibrationValues(input, getCalibrationValues);
}
