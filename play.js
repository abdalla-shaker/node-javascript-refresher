// const name = "abdullah";
// let age = 22;
// const hasHobbies = true;

// const summarizeUser = (userName, userAge, userHobbies) => {
//   return `User name is: ${userName}, his age is: ${userAge}, and the user has hobbies: ${userHobbies}`;
// };

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;

// console.log(add(5, 6));
// console.log(addOne(5));
// console.log(summarizeUser(name, age, hasHobbies));

// ***************** OBJECTS ***************** //

const person = {
  name: "Abdullah",
  age: 22,
  greet() {
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old`);
  },
};

person.greet();
