

function isHourRestrictionsFree(hour) {

	hourMinutes = (hour.substring(0,2) * 60) + parseInt(hour.substring(3,5))
	
	if( hourMinutes >= 420 && 570 >= hourMinutes ||  hourMinutes >= 960 && 1170 >= hourMinutes ) {
		return false
	} else {
		return true
	}

}

module.exports = isHourRestrictionsFree