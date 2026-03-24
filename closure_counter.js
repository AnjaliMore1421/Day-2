const Counter = (function() {
    let count = 0; // private variable
    return {
        increment: function() { count++; return count; },
        decrement: function() { count--; return count; },
        reset: function() { count = 0; return count; },
        getCount: function() { return count; }
    };
})();

console.log(Counter.getCount()); // 0
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.decrement()); // 1
console.log(Counter.reset());     // 0
