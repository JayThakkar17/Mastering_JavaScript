// why we need objects ?
// so in an array we can store multiple type of value but can't giving them a name. We can't reference by a name.
// to solve this problem we have another data structure called Object.

// In object we define key value pair.

const obj = {
  firstName: 'Jay',
  lastName: 'Thakkar',
  age: 22,
  job: 'Software Engineer',
  friends: ['Ketan', 'Abhishek', 'Ravi Kant'],
};

console.log(obj);

// here we have five keys and each key have different values

// so we can assign value to key we have, which can't be possible in arrays.
// so each of this keys called property

// Now the big difference between arrays and objects is that, in objects, the order of values doesn't matter when we want to retrive that

// dot notation
console.log(obj.firstName);

// so here between obj and firstName we have dot operator.

// bracket notation
console.log(obj['lastName']);

// so the difference between dot and object notation is that we can put any expression that we would like

// how we can put any expression ?

const nameKey = 'Name';

console.log(obj[`first${nameKey}`]);
console.log(obj[`last${nameKey}`]);

// so in the dot notation we have to use real values, not a computed values.

const result = prompt(
  'Choose between, firstName, lastName, age, job or friends'
);

console.log(obj[result]); // it will give proper result.
console.log(obj.result); // it will give undefined.

if (obj[result]) {
  console.log(obj[result]);
} else {
  console.log('Invalid Option');
}

// whenever we try to access a property which can't available in object, then we will get undefined

obj.location = 'India';
console.log(obj);

console.log(
  `${obj.firstName} has ${obj.friends.length} friends and his best friend is ${obj.friends[0]}`
);
