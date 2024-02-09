class user {
    constructor(userName) {
        this.userName = userName;
    }

    logUser() {
        console.log(`UserName is : ${this.userName}`);
    }
}

class teacher extends user{
    constructor(userName, email, password) {
        super(userName);
        this.email = email;
        this.password = password;
    }

    logTeacher() {
        console.log(`Teacher : UserName-${this.userName} email-${this.email} password-${this.password}`);
    }
}

const teacherOne = new teacher("P@rth26", "parth@teacher.edu.com", "P@rth262502@123hello");
console.log(teacherOne.logTeacher());
console.log(teacherOne.logUser());