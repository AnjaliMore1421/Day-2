// privateCounter.js - Using Closures to Implement Private Variables

// Function to create a counter with private `count`
function createCounter() {
    let count = 0; // Private variable, NOT accessible from outside

    // Return an object with methods that can access `count` via closure
    return {
        // Increment the private count
        increment: function() {
            count++;
            return count; // return updated count
        },

        // Decrement the private count
        decrement: function() {
            count--;
            return count; // return updated count
        },

        // Get the current count without modifying it
        getCount: function() {
            return count; // return current count
        }
    };
}

// Example usage
const counter = createCounter(); // creates a new counter instance

console.log(counter.getCount()); // 0  -> initial value
console.log(counter.increment()); // 1  -> increment by 1
console.log(counter.increment()); // 2  -> increment by 1 again
console.log(counter.decrement()); // 1  -> decrement by 1

// Attempting to access private variable directly
console.log(counter.count); // undefined  -> cannot access private variable
