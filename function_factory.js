// Function Factory: Math Utilities
function createMathUtilities(initialValue = 0) {
    let value = initialValue; // private variable

    return {
        add: (num) => { value += num; return value; },
        subtract: (num) => { value -= num; return value; },
        multiply: (num) => { value *= num; return value; },
        divide: (num) => { value /= num; return value; },
        getValue: () => value,
        reset: () => { value = initialValue; return value; }
    };
}

// Usage Example
const mathUtil = createMathUtilities(10);

console.log(mathUtil.getValue()); // 10
console.log(mathUtil.add(5));     // 15
console.log(mathUtil.subtract(3));// 12
console.log(mathUtil.multiply(2));// 24
console.log(mathUtil.divide(4));  // 6
console.log(mathUtil.reset());    // 10
