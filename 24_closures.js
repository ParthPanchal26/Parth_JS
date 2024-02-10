// This value will not acceptable until inner() will finds userName inside outer()
let userName = "ParthPanchal"; 
const outer = () => {
    let userName = "Parth";
    const innerOne = () => {
        const valInnerTwo = "Inner Two"
        console.log(`${userName} from innner`);
    }
    const innerTwo = () => {
        // console.log(`${valInnerTwo} from inner two`); 
        // This will throw an error because it can not access property from another function, in simple word siblings does not share property here!
    }
    // return innerOne;
    innerOne()
    innerTwo()
}
outer();
// const inner_val = outer();
// console.log(inner_val());