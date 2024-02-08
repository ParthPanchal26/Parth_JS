/* new Keyword
    -> In javascript everything is object at the end and the oject is null at the end.

    -> Array is object, string is object and a function is also an object.

*/
/* Array Prototype */
// const arr = [11, 12, 13, 14, 15];
// arr.map((val, index) => {
//     console.log(val + 10, index);
// });

/* function prototype */
// Let's crete an entire new method in function prototype as prototype gives some 
// functionalities to us, we can also create our own.

function product(productName, price) {
    console.log(`\nProduct name : ${productName}, price : ${price}`);
}

product.prototype.displayAllProducts = () => {
    console.log(`product name : ${this.productName}, price : ${this.price}`);
}

const product_1 = new product('T-Shirt', 250);
const product_2 = new product('Shirt', 350);
const product_3 = new product('cap', 150);
product_2.displayAllProducts();