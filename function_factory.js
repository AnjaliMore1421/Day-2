// mathUtilities.js - Function Factory: Math Utilities

// Function factory: creates a new math utility object with private state
function createMathUtilities(initialValue = 0) {
    // Private variable, only accessible via returned methods
    let value = initialValue;

    // Return object with methods that close over `value`
    return {
        // Adds a number to the current value
        add: (num) => { 
            value += num; 
            return value; // return updated value
        },

        // Subtracts a number from the current value
        subtract: (num) => { 
            value -= num; 
            return value; // return updated value
        },

        // Multiplies the current value by a number
        multiply: (num) => { 
            value *= num; 
            return value; // return updated value
        },

        // Divides the current value by a number
        divide: (num) => { 
            value /= num; 
            return value; // return updated value
        },

        // Returns the current value without modifying it
        getValue: () => value,

        // Resets the value back to initialValue
        reset: () => { 
            value = initialValue; 
            return value; // return reset value
        }
    };
}

// Usage Example
const mathUtil = createMathUtilities(10); // initial value = 10

console.log(mathUtil.getValue()); // 10  -> initial value
console.log(mathUtil.add(5));     // 15  -> 10 + 5
console.log(mathUtil.subtract(3));// 12  -> 15 - 3
console.log(mathUtil.multiply(2));// 24  -> 12 * 2
console.log(mathUtil.divide(4));  // 6   -> 24 / 4
console.log(mathUtil.reset());    // 10  -> reset back to initialValue
