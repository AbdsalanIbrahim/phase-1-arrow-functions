// Function Declaration
function foo() {
    return 'bar';
}
console.log(foo()); // Outputs: bar

// Function Expression
const fooExpression = function() {
    return 'bar';
};
console.log(fooExpression()); // Outputs: bar

// Arrow Function with two parameters
const add = (parameter1, parameter2) => parameter1 + parameter2;
console.log(add(2, 3)); // Outputs: 5

// Arrow Function with a single parameter (parentheses optional)
const twoAdder = x => x + 2;
console.log(twoAdder(3)); // Outputs: 5

// Arrow Function with multiple statements
const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
};
console.log(sum(1, 2)); // Outputs: 3

// Using Arrow Function with .map()
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
console.log(squares); // Outputs: [1, 4, 9]

// Example with DOM elements
const overdueTodoItems = [
    { className: 'pending' },
    { className: 'pending' },
    { className: 'pending' }
];

const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete"; // Mark as complete
    return item;
});
console.log(finishedItems); // Outputs the modified items

// Billing software example
const lapsedUserAccounts = [
    { address: 'user1@example.com' },
    { address: 'user2@example.com' }
];

lapsedUserAccounts.map(u => sendBillTo(u.address)); // Hypothetical function to send bills

function sendBillTo(address) {
    console.log(`Bill sent to: ${address}`);
}
