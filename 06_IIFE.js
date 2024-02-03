/* IIFE: Immediately invoked Function Expression 
    -> IIFE used to Immediately execute function expressions.
    -> Sometimes we want a function to be executed as soon as it is defined.
    -> This is where we want to start server with DB_connection.
    -> At this point we doesn't like to define and then call function, instead it execute 
        as soon it defined.
*/

// function DB_conn() {
//     console.log("DB_CONNECTED!");
// }
// DB_conn();

// This can be does in IIFE like this,
(function conn() {
    console.log("DB_CONNECTED!");
})();

// Here we not need to call function, and it executes automatically as file execute.

(() => {
    console.log("\nThis will throw an error if we do not use semicolon to end previous IIFE");
})();

/* Whenever we define IIFE it executes automatically but it does not know where to end so
   we manually end its execution using semicolon.
*/

/* Named IIFE : 
    -> Named IIFE is when we declare name of IIFE function, on line 15 "conn" is named IIFE.
*/

// To pass arguments...

(function val_add(para_1, para_2) {
    return console.log(`\nSum of ${para_1} + ${para_2} = ${para_1 + para_2}`);
})(5, 3);