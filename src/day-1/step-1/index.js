const sumCalibrationValues = require('../sumCalibrationValues');
const getCalibrationValuesNoWords = require('../getCalibrationValuesNoWords');

module.exports = (input) => {
	return sumCalibrationValues(input, getCalibrationValuesNoWords);
}
