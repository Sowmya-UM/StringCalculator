// function add(numbers) {
//     if (numbers === '') {
//       return 0;
//     }
//     return parseInt(numbers);
//   }
  
//   module.exports = add;
  
// function add(numbers) {
//     if (numbers === '') return 0;
  
//     // Split the input string by commas
//     const numArray = numbers.split(',').map(Number); // Convert split strings to numbers
//     return numArray.reduce((sum, num) => sum + num, 0); // Sum up the numbers
//   }
  
//   module.exports = add;
  
// src/StringCalculator.js

// function add(numbers) {
//     // If the input is an empty string, return 0
//     if (numbers === '') {
//         return 0;
//     }

//     // Split the string by commas, trim any spaces, and convert to numbers
//     const numberArray = numbers.split(',')
//                                  .map(num => parseFloat(num.trim()));

//     // Sum the numbers and return the result
//     return numberArray.reduce((sum, num) => sum + num, 0);
// }

// module.exports = add;
//**********/
// 1. Add Support for Newline Separators
// function add(numbers) {
//     // If the input is an empty string, return 0
//     if (numbers === '') {
//         return 0;
//     }

//     // Split the string by commas or newlines, trim any spaces, and convert to numbers
//     const numberArray = numbers.split(/[, \n]+/)
//                                  .map(num => parseFloat(num.trim()));

//     // Sum the numbers and return the result
//     return numberArray.reduce((sum, num) => sum + num, 0);
// }

// module.exports = add;

/************/
//2. Support Custom Delimiters
// function add(numbers) {
//     // If the input is an empty string, return 0
//     if (numbers === '') {
//         return 0;
//     }

//     // Check for custom delimiter
//     let delimiter = ',';
//     if (numbers.startsWith('//')) {
//         const parts = numbers.split('\n');
//         delimiter = parts[0].slice(2); // Extract the custom delimiter
//         numbers = parts[1]; // Remainder is the numbers
//     }

//     // Split the string by the custom delimiter or newlines, trim any spaces, and convert to numbers
//     const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`))
//                                  .map(num => parseFloat(num.trim()));

//     // Sum the numbers and return the result
//     return numberArray.reduce((sum, num) => sum + num, 0);
// }

// module.exports = add;



//3). Throw an Error for Negative Numbers
function add(numbers) {
    // If the input is an empty string, return 0
    if (numbers === '') {
        return 0;
    }

    // Check for custom delimiter
    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = parts[0].slice(2); // Extract the custom delimiter
        numbers = parts[1]; // Remainder is the numbers
    }

    // Split the string by the custom delimiter or newlines, trim any spaces, and convert to numbers
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`))
                                 .map(num => parseFloat(num.trim()));

    // Check for negative numbers and throw an error
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Sum the numbers and return the result, ignoring numbers larger than 1000
    return numberArray.reduce((sum, num) => sum + (num > 1000 ? 0 : num), 0);
}

module.exports = add;

