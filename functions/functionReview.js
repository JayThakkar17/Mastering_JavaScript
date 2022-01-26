// There are three types of functions

//* 1) Function declaration:- Function that can be used before declaration

function calculateAge(birthYear) {
  return 2022 - birthYear;
}

//* 2) Function expression:- Function value stored in a variable

const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};

//* 3)Arrow function:- Great for one quick line function. Has no this keyword

const calculateAge = (birthYear) => 2022 - birthYear;

/**
 * These are three different ways of writing functions but they all work in a similar way
 * They take data as a input, transform data and return data as a output
 *
 * ANATONY of a function
 *
 * e.g
 */

function calculateAge(birthYear, firstName) {
  const age = 2022 - birthYear;
  console.log(`${firstName} is  ${age} Years Old!`);
  return age;
}

const age = calculateAge(1999, 'Jay')   // calling, running or invoking function
// (1999, 'Jay) = arguments

// calculateAge = function Name
//(birthYear, firstName) = parameters, it will recieve input values and work as a local variable of a function

/*{
    const age = 2022 - birthYear;
    console.log(`${firstName} is  ${age} Years Old!`);
    return age
} 
    here is the function body
*/
