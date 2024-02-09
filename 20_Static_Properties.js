/* Here properties also reffered as props in react.js */
class user {
    constructor(userName) {
        this.userName = userName;
    }

    logUser() {
        console.log(`UserName : ${this.userName}`);
    }

    static createId() {
        return `123`
    }
}

const userOne = new user("Parth26");
console.log(userOne.createId()); 

// This code will throw an error because the static method does not allow any object or 
// inherited class to access it.