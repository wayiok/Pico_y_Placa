
function isPlateDigitAffected(day,digit) {

	switch (day) {
		case 'Monday':
			if (digit == 1 || digit == 2) { return true } 
			break;
		case 'Tuesday':
			if (digit == 3 || digit == 4) { return true } 
			break;
		case 'Wednesday':
			if (digit == 5 || digit == 6) { return true }  
			break;
		case 'Thursday':
			if (digit == 7 || digit == 8) { return true } 
			break;
		case 'Friday':
			if (digit == 9 || digit == 0) { return true }  
			break;			
	}

	return false

}

module.exports = isPlateDigitAffected