// closureCounter.js - Closure Based Counter System

// IIFE (Immediately Invoked Function Expression) creates a private scope
const Counter = (function() {
    // Private variable - cannot be accessed directly from outside
    let count = 0;

    // Return an object with methods that form closures over 'count'
    return {
        // Increment method - increases count by 1
        increment: function() {
            count++;          // modifies the private variable
            return count;     // returns updated value
        },

        // Decrement method - decreases count by 1
        decrement: function() {
            count--;          // modifies the private variable
            return count;     // returns updated value
        },

        // Reset method - resets count to 0
        reset: function() {
            count = 0;        // resets the private variable
            return count;     // returns 0
        },

        // Getter method - returns current value of count
        getCount: function() {
            return count;     // read-only access to private variable
        }
    };
})();

// Using the counter
console.log(Counter.getCount()); // 0  -> initial value
console.log(Counter.increment()); // 1 -> incremented by 1
console.log(Counter.increment()); // 2 -> incremented by 1 again
console.log(Counter.decrement()); // 1 -> decremented by 1
console.log(Counter.reset());     // 0 -> reset to initial value
