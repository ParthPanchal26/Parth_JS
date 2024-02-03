const user = {
    userName: "Parthbhai",
    price: 999,

    welcomeMessage: function() {
        console.log(`\nWelcome ${this.userName}`);
        console.log(this);
    }
};

user.welcomeMessage();
user.userName = "Parth";
user.welcomeMessage();

console.log("\n", this);

function checkThis() {
    const userName = "Parthbhai";
    console.log("\nResponse from this keyword : \n", this);
}

checkThis();

// Basic Arrow Function.

const addTwoNums = (num1, num2) => {
    return console.log(`\nSum of ${num1} + ${num2} = ${num1+num2}`);
}
addTwoNums(23,234);



// implicit return of Arrow function, In which we do not need to define scope and return
// keyword for signle line.

const concate_Strs = (str_1, str_2) => console.log('\n' + str_1 + ' ' + str_2);
concate_Strs('Parth', 'Panchal');   


// const add = (a, b) => { a + b }; // will require return keyword.
const add = (a, b) => ( a + b ); // doesnot require return keyword.
console.log(`\nSum of ${5} + ${4} = ${add(5, 4)}`);

// To return an object you need to use parentheses compulsory.
const returnObj = () => ({
        userName: "Parth@26"
});
console.log(`\nReturned Objects: ${JSON.stringify(returnObj())}`);