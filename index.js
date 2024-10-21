const greet = function(name) {
    return `Hello, ${name}!`;
};

const add = (a, b) => a + b;

const square = x => x * x;

const sum = (a, b) => {
    console.log(`Adding ${a} and ${b}`); 
    return a + b;
};

console.log(greet("Alice"));  
console.log(add(5, 3));       
console.log(square(4));       
console.log(sum(10, 20));     

const nums = [1, 2, 3, 4, 5];

const squares = nums.map(num => num ** 2);
console.log(squares);          

const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);      

function foo() {
    return 'bar';
}
console.log(foo()); 
const fooExpression = function() {
    return 'bar';
};
console.log(fooExpression()); 
const twoAdder = x => x + 2;
console.log(twoAdder(3)); 

const sumAgain = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`); 
    console.log(`Adding ${parameter2}`); 
    return parameter1 + parameter2;
};
console.log(sumAgain(1, 2)); 

const squaresAgain = nums.map(x => x ** 2);
console.log(squaresAgain); 
const overdueTodoItems = [
    { className: 'zino' },
    { className: 'huncho' },
    { className: 'zr' }
];

const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete"; 
    return item;
});
console.log(finishedItems); 
const lapsedUserAccounts = [
    { address: 'manka12@gmail.com' },
    { address: 'duran10@gmail.com' }
];

lapsedUserAccounts.map(u => sendBillTo(u.address)); 

function sendBillTo(address) {
    console.log(`Bill sent to: ${address}`); 
}
