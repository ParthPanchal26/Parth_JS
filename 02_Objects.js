/* We can decalre objects as either literals or constructor 
    SingleTon : 
    -> If we create object using constructor then the SingleTon object created, that 
    means it is an object of its own type.
    -> But in other way its multiple instences were created instead of staying as SingleTon.
*/

// Object literals.
const symbol_1 = Symbol("key_1");
const profile_1 = {
    [symbol_1]: "paisa is money",
    firstName: "Parth",
    lastName: "Panchal",
    age: 18,
    contact_No: 1244218709,
    email: "parth26_facebook_amazon_apple_netflix_google.CEO@hotmail.com",
    salary: 999998888877777666665555544444n
};

console.log("\nFirstName of prifile_1 is : ", profile_1[symbol_1]);

/* The object.freeze() used to prevent overwriting key values */

// Object.freeze(profile_1);
profile_1.email = "kuchhbhi@email.com";
console.log("\nEmail will not update : ", profile_1["email"]);
console.log(profile_1);

profile_1.intro = function() {
    console.log(`Hey! whatsApp, ${this.firstName}`);
}

console.log(profile_1.intro());