<a href="https://buymeacoffee.com/thecodedesigner" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<img src='https://i.ibb.co/LCQ7mVr/Banner.png'>

# Age Calculator

A simple, yet powerful JavaScript library for calculating age and time intervals from a given date. Whether you need to calculate the age in years, months, days, or weeks, or you require a detailed breakdown of the age in all these units, this library has got you covered. It accepts both string and Date object inputs for birthdates.

We've designed this library with ease of use in mind, making it a breeze to integrate into your projects. Whether you're building a birthday reminder app, an age verification system, or just curious about how old something (or someone) is, our Age Calculator is here to help. Plus, we've made sure to handle the tricky bits, like leap years, so you don't have to worry about the details.

## Features

- Calculate age in years, months, days, or weeks.
- Get a detailed breakdown of age in years, months, weeks, and days.
- Supports both `Date` objects and date strings in 'YYYY-MM-DD' format as input.
- Comprehensive validation of input date strings.
- Leap years? No problem! Our calculations automatically account for them.

| Function |  Description  |
|:-----|:--------|
| inYears | Returns the exact number of years passed since the given Date or date string   |
| inMonths   |  Returns the exact number of months passed since the given Date or date string |
| inWeeks   | Returns the exact number of months passed since the given Date or date string considering leap years | 
|inDays |  Returns the exact number of days passed since the given Date or date string considering leap years|
|inAll | Returns an Object containing all of the values above |
| inAge | Returns an object with a broken down values of year, month , day. Example if you are 24,5 years old than {years: 24 , months: 6 , days: 34}|
## Installation

Ready to get started? Install via npm with a simple command:

Install via npm:

```
npm install whats-my-age
```

## Basic Usage
To calculate the age in years, you can use the following code:

```
const whatsMyAge = require('whats-my-age');

const ageInYears = whatsMyAge.inYears('1990-01-01');
console.log(`Age in years: ${ageInYears}`);
```

## Calculating Different Time Intervals
You can also calculate age in months, days, or weeks:

* Months

```
const ageInMonths = whatsMyAge.inMonths('1990-01-01');
console.log(`Age in months: ${ageInMonths}`);
```

* Days 

```
const ageInDays = whatsMyAge.inDays('1990-01-01');
console.log(`Age in days: ${ageInDays}`);
```

* Weeks

```
const ageInWeeks = whatsMyAge.inWeeks('1990-01-01');
console.log(`Age in weeks: ${ageInWeeks}`);
```

## Detailed Age Breakdown
For a detailed breakdown of age in years, months, and days:

```
const detailedAge = whatsMyAge.inAll('1990-01-01');
console.log(`Detailed age: Years: ${detailedAge.years}, Months: ${detailedAge.months}, Days: ${detailedAge.days}`);
```


## Leap Years? Absolutely!

Worried about leap years messing up your calculations? Fear not! The approach used in the library incorporates leap years automatically. This is because the calculation relies on the JavaScript Date object and the subtraction of two dates. So, whether it's a leap year or not, you'll get accurate results every time.

## SHARE YOUR PROJECTS WITH US 
USE #whatsmyage on social media.
We're excited to see what you build with our Age Calculator. If you have any questions, suggestions, or just want to share what you've created, feel free to reach out. Happy coding!

## Future Plans
 * Implementing more functions like: Age difference between two dates. 
 * Implementing dog and cat age calculator functions
 * Developing a REST API for this project 


