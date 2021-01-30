
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

function validateForm() {

	const plateConsulted = new plate(licensePlate.value.toString())
	const timeConsulted = new datetime(drivingDate.value.toString(),drivingHour.value)

	hour = timeConsulted.hour
	weekDay = timeConsulted.getweekDay()
	plateDigit = plateConsulted.getPlateLastNumber() 
	weekDayName = timeConsulted.getweekDayName()

	alert('DATOS:'+ hour + weekDay +plateDigit + weekDayName)					
}




