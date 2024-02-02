let arr = [1, 2, 3, 4, 5];
console.log("\nArray : ", arr);

arr.push(6);
console.log("\nAppended 6 : ", arr);

arr.pop();
console.log("\nRemoved 6  : ", arr);

arr.unshift(0);
console.log("\nPrepended 0 : ", arr);

arr.shift();
console.log("\nRemoved 0 : ", arr);

console.log("\nArray includes element 9 : ", arr.includes(9));

console.log("\nWhat is index of element 4 : ", arr.indexOf(4));

console.log("\njoin() method is used to convert array into string,\nSo array into string is : ", arr.join());

console.log("\nBefore slice method : ", arr);
console.log("\nSlice array : ", arr.slice(1, 3));
console.log("\nAfter slice method : ", arr);

console.log("\nBefore splice method : ", arr);
console.log("\nSpliced array : ", arr.splice(1, 3));
console.log("\nAfter splice method : ", arr);


const marvel_heros = ["SpiderMan", "IronMan", "Thor"];
const DC_heros = ["SuperMan", "BatMan", "Flash"];

console.log("\nMarvel Heros are : ", marvel_heros);
console.log("\nDC Heros are : ", DC_heros);

marvel_heros.push(DC_heros);

console.log("\nMearged array of marvel_heros and DC_heros is : ", marvel_heros);

console.log("\nAfter PUSH of DC_heros, hero at index[3][1] : ", marvel_heros[3][1]);

/* Using push method to mearge two array is bit inconvenient so we use spread operator (...) to mearge two arrays */

const marvel = ["SpiderMan", "IronMan", "Thor"];
const DC = ["SuperMan", "BatMan", "Flash"];
const all_heros = [...marvel, ...DC];
console.log("\nAfter using spread operator : ", all_heros);


const complicated_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log("\nComplicated array is : ", complicated_array);

const easy_solved_array = complicated_array.flat(Infinity);
console.log("\Complicated array into single easy array using flat method is : ", easy_solved_array);

/* Array.from(argument) used to implement array from given argument */
console.log("\nUsing Array.from method on string \"Parth\" : ", Array.from("Parth"));

/* Array.isArray(argument) used to ask is given argument is array or not! */
console.log("\nIs \"Parth\" array : ", Array.isArray("Parth"));

/* Array.of(argument) is used to create an array from given arguments */
let arr_val_1 = "Parth";
let arr_val_2 = "Dipakbhai";
let arr_val_3 = "Panchal";
console.log("\nArray using variables : ", Array.of(arr_val_1, arr_val_2, arr_val_3));