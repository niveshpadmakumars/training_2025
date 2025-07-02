/**
 * Sample JavaScript code snippets
 */

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Array example: filter even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

// Object example: person info
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Usage examples
console.log("Sum:", add(5, 7)); // 12
console.log("Even numbers:", evens); // [2, 4, 6]
person.greet(); // Hello, my name is Alice.