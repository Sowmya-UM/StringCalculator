// Function to add numbers from a string with various features
function add(numbers) {
    // If the input is an empty string, return 0
    if (numbers === '') {
        return 0;
    }

    // Check for custom delimiter
    let delimiter = ','; // Default delimiter is a comma
    // If the input starts with '//', it's a custom delimiter
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n'); // Split on newline to separate delimiter from numbers
        delimiter = parts[0].slice(2); // Extract the custom delimiter (after '//')
        numbers = parts[1]; // Remainder is the actual numbers
    }

    // Split the string by the custom delimiter or newlines, trim any spaces,
    // and convert the resulting strings to numbers
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`)) // Use regex to split by delimiter or newline
                                 .map(num => parseFloat(num.trim())); // Convert each string to a number after trimming whitespace

    // Check for negative numbers and throw an error if any are found
    const negativeNumbers = numberArray.filter(num => num < 0); // Filter out negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`); // Throw an error with the negative numbers
    }

    // Sum the numbers and return the result, ignoring numbers larger than 1000
    return numberArray.reduce((sum, num) => sum + (num > 1000 ? 0 : num), 0); // Sum up numbers, ignoring those over 1000
}

// Export the add function for use in other files
module.exports = add;
