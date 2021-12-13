function carTopSpeed(bmw, audi) {
  const speed = `BMW has ${bmw} Km/H Speed. 
Audi has ${audi} Km/H Speed`;
  console.log(speed);
}

//ES6

const bikeTopSpeed = (bajaj, hero) => {
  const speed = `Bajaj Has ${bajaj} Km/H Speed.
 Hero Has ${hero} Km/h Speed`;
  console.log(speed);
};

carTopSpeed(180, 160);
bikeTopSpeed(120, 140);

// How to return value from the function

const movieRating = (rating, movieName) => {
  const result = `${movieName} Has ${rating} Rating! `;
  return result;
};

//1st way to get the return value
const movieResult = movieRating(9.1, 'Chichhore');
console.log(movieResult);

//2nd way
console.log(movieRating(0.2, 'Raadhe'));

// DECLARATION vs EXPRESSION

// Above all the function code is declaration becaue we simply use function keyword to declare a function like we declare a variables.

//function declaration
const calculateAge = (birthYear) => {
  const currentYear = 2021;
  const age = `Your Age is ${currentYear - birthYear}.`;
  return age;
};

console.log(calculateAge(1999));

//Function Expression
const AGE = function (birthYear) {
  return 2021 - birthYear;
};

//ES6
const ES6AGE = (birthYear) => {
  return 2021 - birthYear;
};

console.log(AGE(1960), ES6AGE(1964));

// Difference between function declaration and expression is that we can call declaration before initializing or declaring function but we can't do the same with expression. It will work because of hoisting.

console.log(countAge(1994));

function countAge(year) {
  return 2021 - year;
}

//we can't do the same with ES6 functions

//it will give an error
console.log(eS6CountAge(1992));

const eS6CountAge = (year) => {
  return 2021 - year;
};


