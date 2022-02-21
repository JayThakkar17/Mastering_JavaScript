// push:- push method add elements to the end of the array
const fruits = ['Orange', 'Banana', 'Grapes'];

// push method returns new length of the array
const result = fruits.push('Mango');
console.log(fruits, result);

// unshift: unshift add element to the starting of the array and it returns new length of the array
const unshiftResult = fruits.unshift('Papaya');
console.log(fruits, unshiftResult);

//pop:- it will remove the last element of the array and return that removed element
const popResult = fruits.pop();
console.log(fruits, popResult);

//shift: it will remove the first element of the array and returned it.
const shifted = fruits.shift();
console.log(fruits, shifted);

// indexOf:- it will tell us that in which index we have our passes element or element we passed into arguments
console.log(fruits.indexOf('Banana'));

//includes:- it will return true if elements is in the array otherwise false
console.log(fruits.includes('Orange'));
