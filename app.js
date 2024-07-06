
/**
 * 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns 
 */
function inYears(birthDate){
    const bdIsValid = validateInput(birthDate);
    const [year,month,day] = converToNumbers(birthDate);
    console.log(typeof year);
    

    //TODO: NEEDS YEAERS AND MONTH 
    if(bdIsValid){

    }

    return 0;
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
    const dateNow = new Date(Date.now())
  
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

inYears('1999-07-26')