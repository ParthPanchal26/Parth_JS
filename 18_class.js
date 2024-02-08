// class user {
// constructor(userName, password, email) {
//         this.userName = userName;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPassword() {
//         return (`34r33f4${this.password}f34r34fw`);
//     }
// }

// const userOne = new user("userOne", "User@123", "user@gmail.com");
// console.log(userOne);
// console.log(userOne.encryptPassword());

/* Same code without using classes */

function user(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

Object.prototype.encryptPassword = function () {
    return (`34r33f4${this.password}f34r34fw`);
}

const userOne = new user("userOne", "user@gmail.com", "User@123");
console.log(userOne);
console.log(userOne.encryptPassword());