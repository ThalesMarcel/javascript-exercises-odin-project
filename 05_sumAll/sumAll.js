const sumAll = function(a, b) {
	let sum = 0;
	let intervalStart, intervalEnd;

	if ((typeof(a) !== 'number') || (typeof(b) !== 'number'))	return 'ERROR';

	if ((a < 0) || (b < 0))	return 'ERROR';

	if (a <= b) {
		intervalStart = a;
		intervalEnd = b;
	} else {
		intervalStart = b;
		intervalEnd = a;
	}

	for (let i = intervalStart; i <= intervalEnd; i++)	sum += i;

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
