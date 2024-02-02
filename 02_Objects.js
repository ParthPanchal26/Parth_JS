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
console.log("\n profile_1 : ", profile_1);

profile_1.intro = function() {
    console.log(`\nHey! whatsApp, ${this.firstName}`);
}

console.log(profile_1.intro());

/* SingleTon objects */

const profile_2 = new Object();
profile_2.Id = "124421";
profile_2.name = "Parth";
profile_2.isLoggedIn = true;

console.log("\n\nIs profile_2 loggedIn ?", profile_2.isLoggedIn);

const user = {
    email: "user@gmail.com",
    userData: {
        userInfo: {
            firstName: "Parth",
            lastName: "Panchal"
        }
    }
}

console.log("\nFirstname of user is : ", user.userData.userInfo.firstName);

/* Object.assign(arguments) is used to mearge two or more objects */
// const target = {1: 'a', 2: 'b'};
// const source = {3: 'c', 4: 'd'};

// const targetReturned = Object.assign(target, source);
// console.log(targetReturned);

/* The only problem with above code is that the source is mearge to target which is an 
    object and we have to mearge two object into one, so
*/
const source_1 = {1: 'a', 2: 'b'};
const source_2 = {3: 'c', 4: 'd'};

// const returnedTarget = Object.assign({}, source_1, source_2);
/* Here the target is an empty object so the both sources will mearge to an empty object 
 instead to mearge second object into previous object */
// console.log("\nMearged object : ", returnedTarget);

/* But using spread operator is best choice of all time */
const mearge_target = {...source_1, ...source_2}
console.log("\nMearged object : ", mearge_target);

console.log("\nProfile_2 Object ...");
console.log(profile_2);
console.log("\nKeys of profile_2 : ", Object.keys(profile_2));
console.log("\nValues of profile_2 : ", Object.values(profile_2));

console.log("\nDoes isLogged property exists in profile_2? : ", profile_2.hasOwnProperty('isLogged'));