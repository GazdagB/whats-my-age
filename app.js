
/**
 * 
 * @param {string} birthDate Birthdate in string format 'YYYY-MM-DD'
 * @returns 
 */
function calculateAge(birthDate){
    return 0;
}

/**
 * This function validates an inputed date string returns true if valed throws errors if not
 * @param {string} birthDate a date string in 'YYYY-MM-DD' format 
 * Leap year
 * @returns {boolean} Returns true if valid
 */
function validateInput(birthDate){

    //TODO: Later implement Leap years

    const reg = new RegExp('^[0-9]+$');
    
    const dateNow = new Date(Date.now())
  
    //TODO: 
    // INPUT : 'YYYY-MM-DD'
    //1) CHECK IF THE INPUT IS A STRING 
        if(typeof birthDate != 'string'){
            console.log('This is an error');
            throw new Error('The provided date is not a string') 
        }
    //2) SPLIT THE STRING
        let [year, month, day] = birthDate.split('-')
        console.log(year,month,day);
        
    //3) CHECK SEPARETLY IF THEY ARE A NUBMER 
    // Checking if they are a number or the apropriate number of characters 
    if(!year.match(reg) || year.length != 4 ){
        throw new TypeError('Year is not a valid number')
    }

    if(!month.match(reg) || month.length != 2 ){
        throw new TypeError('Month is not a valid number')
    }

    if(!day.match(reg) || day.length != 2){
        throw new TypeError('Day is not a valid number')
    }

        year = parseInt(year)
        month = parseInt(month) 
        day = parseInt(day)

        console.log(year, month, day);
        

        if(isNaN(year)){
            throw new TypeError('Year is not a valid number')
        } else if(isNaN(month)){
            throw new TypeError('Month is not a valid number!')
        } else if(isNaN(day)){
            throw new TypeError('Day is not a valid number!')
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
    if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30 ){
        throw new RangeError('The given month has 30 days')
    }

    if((month === 2 ) && day > 29 ){
        throw new RangeError('The given month has max 29 days')
    }

    return true;
}

validateInput('1990-04-30')