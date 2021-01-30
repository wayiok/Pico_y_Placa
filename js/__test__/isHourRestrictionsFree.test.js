const isHourRestrictionsFree = require('./isHourRestrictionsFree')

test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('02:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('03:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('04:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('05:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('06:59')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('07:00')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('08:00')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('09:30')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('09:31')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('12:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('13:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('14:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('15:00')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('15:59')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('16:00')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('17:00')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('19:30')).toBe(false)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('19:31')).toBe(true)
})
test('properly verifies if hour consulted is affected by restrictions (Hours: 7:00am - 9:30am / 16:00pm - 19:30)', () => {
	expect(isHourRestrictionsFree('22:00')).toBe(true)
})
