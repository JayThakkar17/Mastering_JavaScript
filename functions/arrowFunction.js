// arrow function is shorter version of function expression

//function expression

const AGE = function (birthYear) {
  return 2021 - birthYear;
};

//arrow function

const countAge = (birthYear) => 2021 - birthYear;
console.log('Arrow Function', countAge(1999));

//if we have only one parameter then we don't need to wrap our parameter into brackets and if we want single line return then we don't need to write return keyword

//But what if we have more than one parameters

const getSum = (value1, value2) => value1 + value2;

console.log('SUM', getSum(10, 20));

// In which kind of case we need to write return keyword?

const retirementAge = (birthYear) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log('RETIREMENT', retirementAge(1999));

//arrow function doesn't have "this" keyword


