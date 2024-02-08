let myHero = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`\nSpiderman's power is ${this.spiderman}`);
    }
};

Object.prototype.Parth = () => {
    console.log(`Parth is boss of all heros!!!`);
}
myHero.Parth()
heroPower.Parth();

Array.prototype.sayHello = () => {
    console.log(`Parth says Hello...!`);
}

myHero.sayHello();

/* Inheritance */

const user = {
    name: 'parth',
    email: 'parth@gmail.com'
}

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssignments: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

console.log(`Is teacign support availabel : ${TAsupport.isAvailable}`)
console.log(`Name of user is : ${teacher.name}`)


/* Modern Inheritance Syntax */
Object.setPrototypeOf(teachingSupport, user);
console.log(`User's email ID is : ${teachingSupport.email}`);

const userOne = 'ParthPanchal       ';

String.prototype.trueLength = function(){
    console.log(`Lenght of "${this}" is: ${this.trim().length}`);
}

userOne.trueLength();
"usPondryKeDankKeBille".trueLength()