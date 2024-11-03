const add = require('../src/StringCalculator');

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number itself when a single number is passed', () => {
    expect(add('5')).toBe(5);
});

test('returns the sum of two numbers separated by a comma', () => {
    expect(add('1,2')).toBe(3);
});

test('returns the sum of multiple numbers separated by commas', () => {
    expect(add('1,2,3')).toBe(6);
});

test('returns the sum of numbers separated by newlines', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('returns the sum of numbers with spaces', () => {
    expect(add('1, 2, 3')).toBe(6);
});

test('allows custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('throws an error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});

test('ignores numbers larger than 1000', () => {
    expect(add('1001,2')).toBe(2);
});
