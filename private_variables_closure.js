// Task 5: Implement Private Variables Using Closures
function createCounter() {
    let count = 0; // private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Example usage
const counter = createCounter();

console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// Attempting to access private variable directly
console.log(counter.count); // undefined
