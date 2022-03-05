const obj = {
  firstName: 'Jay',
  lastName: 'Thakkar',
  birthYear: 1999,
  job: 'Software Engineer',
  friends: ['Ketan', 'Abhishek', 'Ravi Kant'],
  isEligibleForVoting: true,

  // can't use this keyword in arrow function
  //   calcAge: () => {
  //     return 2022 - this.birthYear;
  //   },

  //   calcAge: function () {
  //       console.log(this);
  //     return 2022 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(obj.calcAge());

console.log(obj.age);
console.log(obj.age);
console.log(obj.age);

// console.log(obj['calcAge']());

// this keyword or this variable is basically equal to the object on which the method is called
// it is equal to the object calling method

console.log(
  `${obj.firstName} is ${obj.age} Years Old and He ${
    obj.isEligibleForVoting ? 'Has' : "Don't have"
  } a Driving Licence`
);
