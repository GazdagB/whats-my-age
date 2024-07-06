const dateNow = new Date(Date.now());
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;
const currentDay = dateNow.getDate();

function parseBirthDate(birthDate) {
    if (birthDate instanceof Date) {
        return birthDate;
    } else if (typeof birthDate === 'string' && validateInput(birthDate)) {
        const [year, month, day] = convertToNumbers(birthDate);
        return new Date(year, month - 1, day);
    } else {
        return null;
    }
}

function calculateAgeDifference(birthDate) {
    const birthDateObj = parseBirthDate(birthDate);
    if (!birthDateObj) return { years: 0, months: 0, days: 0 };

    const currentDate = new Date();
    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

/**
 * This function calculates the age in years from a given date String 
 * @param {string | Date} birthDate Birthdate in string format 'YYYY-MM-DD' or Date object
 * @returns {number} returns the number of years since the given date
 */
function inYears(birthDate) {
    return calculateAgeDifference(birthDate).years;
}

/**
 * This function returns the number of months since the given date  
 * @param {string | Date} birthDate Birthdate in string format 'YYYY-MM-DD' or Date object
 * @returns {number} The number of months since the given date
 */
function inMonths(birthDate) {
    const { years, months } = calculateAgeDifference(birthDate);
    return years * 12 + months;
}

/**
 * This function returns the number of days since the given date 
 * @param {string | Date} birthDate Birthdate in string format 'YYYY-MM-DD' or Date object
 * @returns {number} The number of days since the given date
 */
function inDays(birthDate) {
    const birthDateObj = parseBirthDate(birthDate);
    if (!birthDateObj) return 0;
    const timeDifference = new Date() - birthDateObj;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

/**
 * This function returns the number of weeks since the given date 
 * @param {string | Date} birthDate Birthdate in string format 'YYYY-MM-DD' or Date object
 * @returns {number} The number of weeks since the given date
 */
function inWeeks(birthDate) {
    return Math.floor(inDays(birthDate) / 7);
}

/**
 * This function returns an object with all intervals such as years, months, weeks, and days 
 * since the given date, now accepting both string and Date types for birthDate.
 * @param {string | Date} birthDate Birthdate in string format 'YYYY-MM-DD' or Date object
 * @returns {object} Returns an object with all periods passed since the given date ex.: years, months, weeks, days
 */
function inAll(birthDate) {
    return {
        years: inYears(birthDate),
        months: inMonths(birthDate),
        weeks: inWeeks(birthDate),
        days: inDays(birthDate)
    };
}
/**
 * This function returns an object with the age broken down into years, months, and days
 * @param {string | Date} birthDate A string representing the birthdate in 'YYYY-MM-DD' format or a Date object
 * @returns an object with broken down age in years, months, and days
 */
function inAge(birthDate) {
    return calculateAgeDifference(birthDate);
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