const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: true,
//     configurable: true
// }); /* This will throw an error because some properties can not be redefined */

// console.log(descriptor);
// ----------------------------------------------------------------------------------
// const person = {
//     firstName: "Parth",
//     lastName: "Panchal",
//     isGood: true,

//     detailedPerson: function() {
//         console.log(`firstName: ${this.firstName}, lastName; ${this.lastName}, isGood: ${this.isGood}`);
//     }
// };
// console.log(Object.getOwnPropertyDescriptors(person, "firstName", "lastName", "isGood"));
// Object.defineProperties(person, {
//     "firstName": {
//         writable: false,
//         enumerable: true,
//         configurable: false
//     },
//     "lastName": {
//         writable: false,
//         enumerable: true,
//         configurable: false
//     },
//     "isGood": {
//         writable: false,
//         enumerable: true,
//         configurable: false
//     },
// });
// console.log(Object.getOwnPropertyDescriptors(person, "firstName", "lastName", "isGood"));

// for (const [key, val] of Object.entries(person)) {
//     if(typeof val !== 'function') {
//         console.log(`${key}: ${val}`);
//     }
// }