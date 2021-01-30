
/*
THIS CODE WAS MADE FOR THE RESTRICTIONS IN 2019

	HOURS AFFECTED (Hours: 7:00am - 9:30am / 16:00pm - 19:30)

	MONDAY PLATES ENDED IN 1 AND 2 CANNOT DRIVE DURING RESTRICTED HOURS
	TUESDAY PLATES ENDED IN 3 AND 4 CANNOT DRIVE DURING RESTRICTED HOURS
	WEDNESDAY PLATES ENDED IN 5 AND 6 CANNOT DRIVE DURING RESTRICTED HOURS
	THURSDAY PLATES ENDED IN 7 AND 8 CANNOT DRIVE DURING RESTRICTED HOURS
	FRIDAY PLATES ENDED IN 9 AND 0 CANNOT DRIVE DURING RESTRICTED HOURS

*/


let errorMessDay = 'Your vehicle CANNOT DRIVE during the time consulted'
let successMess = 'There are NO RESTRICTINS for your vehicle. You can drive.'

class plate {

	constructor(plate) {
		this.plate = plate
	}

	getPlateLastNumber() {
		return this.plate.substring(7,8)
	}

}

class datetime {
	constructor(date,hour){
		this.date = date;
		this.hour= hour;
	}

	getweekDay() {
		this.date = new Date(this.date);
		return this.date.getDay()
	}

	getweekDayName() {
		var weekdays = new Array(7);
        weekdays[0] = "Monday";
        weekdays[1] = "Tuesday";
        weekdays[2] = "Wednesday";
        weekdays[3] = "Thursday";
        weekdays[4] = "Friday";
        weekdays[5] = "Saturday";
        weekdays[6] = "Sunday";

        return weekdays[this.date.getDay()]

	}
}

function validateForm(hour,weekDay,plateDigit,weekDayName) 
{
	const plateConsulted = new plate(licensePlate.value.toString())
	const timeConsulted = new datetime(drivingDate.value.toString(),drivingHour.value)

	hour = timeConsulted.hour
	weekDay = timeConsulted.getweekDay()
	plateDigit = plateConsulted.getPlateLastNumber() 
	weekDayName = timeConsulted.getweekDayName()

	weekDayName == 'Sunday' || weekDayName == 'Saturday' ? alert(successMess) : 
				isHourRestrictionsFree(hour) ? alert(successMess) :
					isPlateDigitAffected(weekDayName,plateDigit) ? alert(errorMessDay) : alert(successMess) 
							
}


function isHourRestrictionsFree(hour) {

	hourMinutes = (hour.substring(0,2) * 60) + parseInt(hour.substring(3,5))
	
	if( hourMinutes >= 420 && 570 >= hourMinutes ||  hourMinutes >= 960 && 1170 >= hourMinutes ) {
		return false
	} else {
		return true
	}

}


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








