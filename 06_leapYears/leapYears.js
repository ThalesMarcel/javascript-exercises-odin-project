const leapYears = function(year) {
	// if 'year' is not the end of the century
	if (year % 100) {
		// if 'year' is not a multiple of 4
		if (year % 4)		return false;
		else						return true;
	} else {
		// if 'year' is not a multiple of 400
		if (year % 400)	return false;
		else						return true;
	}
};

// Do not edit below this line
module.exports = leapYears;
