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

// const person = {
//   name: "Abdullah",
//   age: 22,
//   greet() {
//     console.log(`Hi, I am ${this.name}, and I am ${this.age} years old`);
//   },
// };

// const printPersonName = ({name}) => {
//   console.log(name);
// }

// printPersonName(person)

// const {name, age} = person;

// console.log(name, age)

// person.greet();

// const hobbies = ['sports', 'cooking']

// const [hobby1, hobby2] = hobbies;

// console.log(hobby1, hobby2);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => `Hobby: ${hobby}`))
// console.log(hobbies);

// hobbies.push("programming");
// console.log(hobbies);

// To copy an array:

// const copiedHobbies = [...hobbies] // *OR: const copiedHobbies = hobbies.slice();
// *IT Also works with objects.

// console.log(copiedHobbies);

// The spread operators:

// const arrMaker = (...args) => args;

// console.log(arrMaker(1, 2, 3, 4, 5))

// ********************** ASYNC AND PROMISES **********************
const fetchName = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Abdullah");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("getting user name please wait...");
  fetchName()
    .then((fetchedName) => {
      console.log(`Welcome ${fetchedName}.`);
      return fetchName();
    })
    .then((fetchedName) => {
      console.log(`Welcome ${fetchedName} again.`);
    });
}, 2000);

// console.log("hello");
// console.log("hi");
