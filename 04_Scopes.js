/* Nested Function Scope */
function one() {
    const userName = "Parth";
    
    function two() {
        const website = "github.com";
        console.log(userName);
    }
    // console.log(website); // Error : website is not defined
    two();
}
one();

// ---------------------- Hoisting ----------------------
// Here you can call function before it being declared.
addOne(5);
function addOne(num_1) {
    console.log(num_1 + 1);
}


// This is called Hoisting, you can not call function before it declared with this syntax.
// addTwo(5); // Error : Cannot access 'addTwo' before initialization
const addTwo = function(num_2) {
    console.log(num_2 + 2);
}
addTwo(5);