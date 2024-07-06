const dateNow = new Date(Date.now())
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;
const currentDay = dateNow.getDate();

/**
 * This function calculates the age in years from a given date String 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns {number} returns the number of years since the given date
 */
function inYears(birthDate){
    const bdIsValid = validateInput(birthDate);

    const [birthYear,birthMonth,birthDay] = converToNumbers(birthDate);
  

    if(bdIsValid){
        let years = currentYear - birthYear; 

        if(birthMonth < currentMonth){
            years--; 
        }else if( birthMonth === currentMonth && birthDay > currentDay){
            years--
        }

        return years;
    }

    return null;
}
/**
 * This function returns the number of months a person lived 
 * @param {string } birthDate in 'YYYY-MM-DD' format 
 * @returns {number} The number of monts since the given date
 */
function inMonths(birthDate){
const bdIsValid = validateInput(birthDate);
const [birthYear,birthMonth,birthDay] = converToNumbers(birthDate)

let resultMonths = (currentYear - birthYear) * 12; 

if(bdIsValid){
    let yearDifferenceInMonths = (currentYear - birthYear) * 12;
    let monthDifference = currentMonth - birthMonth;

    if (currentDay < birthDay) {
        monthDifference--;
    }

    const totalMonthsLived = yearDifferenceInMonths + monthDifference;

    return totalMonthsLived;
}

return null;
}

function converToNumbers(birthDate){
    let [year, month, day] = birthDate.split('-');
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);

    return [year,month,day]
}

/**
 * This function validates an inputed date string returns true if valed throws errors if not
 * @param {string} birthDate a date string in 'YYYY-MM-DD' format 
 * Leap year
 * @returns {boolean} Returns true if valid
 */
function validateInput(birthDate){

    //TODO: Later implement Leap years

    //REGEX 
    const reg = new RegExp('^[0-9]+$'); //ONLY NUMERIC VALUES ALLOWED
    
  
    //1) CHECK IF THE INPUT IS A STRING 
        if(typeof birthDate != 'string'){
            console.log('This is an error');
            throw new Error('The provided date is not a string') 
        }
    //2) SPLIT THE STRING
        let [year, month, day] = birthDate.split('-')
        const isValidNumber = (value, length) => reg.test(value) && value.length === length;

    //3) CHECK SEPARETLY IF THEY ARE A NUBMER 
    // Checking if they are a number or the apropriate number of characters 
    if(!isValidNumber(year, 4)){
        throw new TypeError('Year is not a valid number')
    }

    if(!isValidNumber(month, 2)){
        throw new TypeError('Month is not a valid number')
    }

    if(!isValidNumber(day,2)){
        throw new TypeError('Day is not a valid number')
    }

        year = parseInt(year)
        month = parseInt(month) 
        day = parseInt(day)

        console.log(year, month, day);
        

        if (isNaN(year) || isNaN(month) || isNaN(day)) {
        throw new TypeError('Date parts must be valid numbers');
        }
        
    //4) VALIDATE THE NUMBERS ONE BY ONE 
    if(year > dateNow.getFullYear()){
        throw new RangeError('Year cannot be greater than present!')
    }

    if(month > 12 || month < 1){
        throw new RangeError('Month is out of valid range!')
    }

    if(day > 31 || day < 1){
        throw new RangeError('Day is out of valid range!')
    }
 
    //5) VALIDATE THE DAYS BY MONTH 
    const hasThirtyDays = [4, 6, 9, 11].includes(month);
    const isFebruary = month === 2;

    if (hasThirtyDays && day > 30) {
        throw new RangeError('The given month has 30 days');
    }
    if (isFebruary && day > 29) {
        throw new RangeError('February has a maximum of 29 days');
    }

    return true;
}

module.exports = {inYears,inMonths}