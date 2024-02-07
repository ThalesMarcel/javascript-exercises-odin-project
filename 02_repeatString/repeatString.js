const repeatString = function(string, repetitions) {
	let result = '';

	if (repetitions < 0)	return 'ERROR';

	for (let i = 0; i < repetitions; i++)	result += string;

	return result;
};

// Do not edit below this line
module.exports = repeatString;
