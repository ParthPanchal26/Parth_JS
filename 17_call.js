function setUserName(userName) {
    this.userName = userName;
}

function createUser(userName, email, password) {
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("one_1", "one@fb.com", "two_1");
console.log(userOne);