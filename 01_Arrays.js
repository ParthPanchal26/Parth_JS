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