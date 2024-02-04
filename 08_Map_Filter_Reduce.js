// Filter.
const languages = ['js', 'ts', 'html', 'css', 'python', 'ruby'];

const few_lang = languages.filter((few_lang) => {
    return few_lang === 'js'
});
console.log(few_lang);
console.log('\n');

// Map.
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNum.map((num) => { return num + 10 })
console.log(newNums);
console.log('\n');
/* chaining: When you use methods like map().map().filter() called chaining */

const chained_nums = myNum.map((num) => num * 10).map((num) => num + 10).map((num) => num / 10);
console.log(chained_nums);
console.log('\n');

// Reduce.

const red_arr = [1, 2, 3];
const red_total = red_arr.reduce((acc, curr) => (acc + curr), 0);
console.log(red_total);