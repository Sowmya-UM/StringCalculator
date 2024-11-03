const add = require('../src/StringCalculator'); // Import the add function from StringCalculator module

// Test case: returns 0 for an empty string
test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0); // Expect the function to return 0 when passed an empty string
});

// Test case: returns the number itself when a single number is passed
test('returns the number itself when a single number is passed', () => {
    expect(add('5')).toBe(5); // Expect the function to return 5 when passed '5'
});

// Test case: returns the sum of two numbers separated by a comma
test('returns the sum of two numbers separated by a comma', () => {
    expect(add('1,2')).toBe(3); // Expect the function to return 3 when passed '1,2'
});

// Test case: returns the sum of multiple numbers separated by commas
test('returns the sum of multiple numbers separated by commas', () => {
    expect(add('1,2,3')).toBe(6); // Expect the function to return 6 when passed '1,2,3'
});

// Test case: returns the sum of numbers separated by newlines
test('returns the sum of numbers separated by newlines', () => {
    expect(add('1\n2,3')).toBe(6); // Expect the function to return 6 when passed '1\n2,3'
});

// Test case: returns the sum of numbers with spaces
test('returns the sum of numbers with spaces', () => {
    expect(add('1, 2, 3')).toBe(6); // Expect the function to return 6 when passed '1, 2, 3'
});

// Test case: allows custom delimiters
test('allows custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3); // Expect the function to return 3 when passed with a custom delimiter
});

// Test case: throws an error for negative numbers
test('throws an error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2'); // Expect the function to throw an error for negative numbers
});

// Test case: ignores numbers larger than 1000
test('ignores numbers larger than 1000', () => {
    expect(add('1001,2')).toBe(2); // Expect the function to return 2 when passed '1001,2', ignoring 1001
});
