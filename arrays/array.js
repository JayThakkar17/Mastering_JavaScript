// an array is like a container in which we can store the value and later refernce them and use them.

const CRICKETERS = ['Virat', 'Rishabh', 'Jasprit'];

console.log(CRICKETERS);

console.log(CRICKETERS[0]);
console.log(CRICKETERS[1]);

console.log(CRICKETERS.length)


// so here inside square brackets [] we have expression, not a statement, we can't write statements inside square brackets
console.log(CRICKETERS[CRICKETERS.length - 1])

// we can change the array values or mutate the array

CRICKETERS[2] = 'Jay'
console.log(CRICKETERS);


// we change the value assigned by const. So the reason is that only primitive values are immutable and array is not a primitive data type






