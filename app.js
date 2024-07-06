const dateNow = new Date(Date.now());
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;
const currentDay = dateNow.getDate();

/**
 * This function calculates the age in years from a given date String 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number} returns the number of years since the given date
 */
function inYears(birthDate) {
    if (!validateInput(birthDate)) return null;

    const [birthYear, birthMonth, birthDay] = convertToNumbers(birthDate);
    let years = currentYear - birthYear;

    if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
        years--;
    }

    return years;
}

/**
 * This function returns the number of months since the given date  
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number} The number of months since the given date
 */
function inMonths(birthDate) {
    if (!validateInput(birthDate)) return null;

    const [birthYear, birthMonth, birthDay] = convertToNumbers(birthDate);
    let totalMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);

    if (currentDay < birthDay) {
        totalMonths--;
    }

    return totalMonths;
}

/**
 * This function returns the number of days since the given date 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number} The number of days since the given date
 */
function inDays(birthDate) {
    if (!validateInput(birthDate)) return null;

    const [birthYear, birthMonth, birthDay] = convertToNumbers(birthDate);
    const birthDateObj = new Date(birthYear, birthMonth - 1, birthDay);
    const timeDifference = dateNow - birthDateObj;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return dayDifference;
}

/**
 * This function returns the number of weeks since the given date 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number} The number of weeks since the given date
 */
function inWeeks(birthDate) {
    const days = inDays(birthDate);
    return days !== null ? Math.floor(days / 7) : null;
}

/**
 * This function returns an object with all intervals such as years, months etc... 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {object} Returns an object with all periods passed since the given date ex.: years, month, weeks etc...
 */
function inAll(birthDate){
    const obj = {};
    obj.years = inYears(birthDate);
    obj.month = inMonths(birthDate);
    obj.weeks= inWeeks(birthDate);
    obj.day = inDays(birthDate);

    return obj;
}

function inAge(birthDate) {
    if (!validateInput(birthDate)) return null;

    const [birthYear, birthMonth, birthDay] = convertToNumbers(birthDate);

    const obj = {};

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months -= 1;
        days += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }
    obj.years = years;
    obj.months = months;
    obj.days = days; 

    return obj;
}

/**
 * Helper function to convert date string to numbers
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number[]} An array containing year, month, and day as numbers
 */
function convertToNumbers(birthDate) {
    return birthDate.split('-').map(part => parseInt(part));
}

/**
 * This function validates an inputted date string and returns true if valid, throws errors if not
 * @param {string} birthDate a date string in 'YYYY-MM-DD' format 
 * @returns {boolean} Returns true if valid
 */
function validateInput(birthDate) {
    if (typeof birthDate !== 'string') {
        console.error('This is an error');
        throw new Error('The provided date is not a string');
    }

    const [year, month, day] = birthDate.split('-');
    const isValidNumber = (value, length) => /^\d+$/.test(value) && value.length === length;

    if (!isValidNumber(year, 4) || !isValidNumber(month, 2) || !isValidNumber(day, 2)) {
        throw new TypeError('Date parts must be valid numbers');
    }

    const [yearNum, monthNum, dayNum] = [parseInt(year), parseInt(month), parseInt(day)];

    if (isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum)) {
        throw new TypeError('Date parts must be valid numbers');
    }

    if (yearNum > currentYear || monthNum > 12 || monthNum < 1 || dayNum > 31 || dayNum < 1) {
        throw new RangeError('Date parts out of valid range');
    }

    const hasThirtyDays = [4, 6, 9, 11].includes(monthNum);
    const isFebruary = monthNum === 2;

    if (hasThirtyDays && dayNum > 30) {
        throw new RangeError('The given month has 30 days');
    }
    if (isFebruary && dayNum > 29) {
        throw new RangeError('February has a maximum of 29 days');
    }

    return true;
}

module.exports = { inYears, inMonths, inDays, inWeeks, inAll, inAge};