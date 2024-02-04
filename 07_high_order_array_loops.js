// For of loop.
// -> We can use forof loop on array, string, objects, etc.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("Array contains : ");
for (const num of arr) {
    console.log(num);
}

// Map.
const map = new Map();
map.set('IN', "India");
map.set('USA', "United states of america");
map.set('FR', "France");

console.log("\n");
console.log(map);
console.log("\n");
for (const val of map) {
    console.log(val);
}
console.log("\nKeys and values are: ");
for (const [keys, values] of map) {
    console.log(keys, '->', values);
}

// For in Loop.

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
};
console.log('\n');
for (const key in myObj) {
    console.log(`${key} -> ${myObj[key]}`);
}

const myArr = [1, 2, 3, 4, 5];
console.log('\n');
for (const key in myArr) {
    console.log(`${key} => ${myArr[key]}`);
}

console.log('\n');

// ForEach loop.
const languages = ['js', 'ruby', 'cpp', 'python', 'ts'];
languages.forEach( (item) => {
    console.log(item);
});
console.log('\n');

const printItem = (item) => {
    console.log(item);
}
languages.forEach(printItem);

console.log('\n');

languages.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log('\n');


const DB = [
    {
        Id: 1,
        F_Name: "Parth",
        L_Name: "Panchal",
        age: 18
    },
    {
        Id: 2,
        F_Name: "Shivani",
        L_Name: "Panchal",
        age: 21
    },
    {
        Id: 3,
        F_Name: "Anamika",
        L_Name: "Panchal",
        age: 25
    },
];

DB.forEach((key) => {
    console.log(key);
});