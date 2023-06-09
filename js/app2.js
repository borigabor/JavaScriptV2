/*Closure */

/*
let username = "Lenovo";

function outerFunction () {
    let name = "Mozilla";
    function innerFunction (num) {
        console.log(name, num, username);
    } 
    return innerFunction;
}

outerFunction()(5);

*/

/*
let e = 10;

function sum (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e; // a belső fv Hozzáfér az összes külső scophóz 
            };
        };
    };
}

console.log(sum(1)(2)(3)(4));

*/

/*
let count = 0;
(function printCount() {
    if(count === 0) {
        let count = 1; // csak blokkon belül lessz elérhető
        console.log(count);
    }
    console.log(count);
})();
*/

/*
function createBase (num) {
    return function (innerNum) {
        return num + innerNum;
    }
}

var addSix = createBase(6);
addSix(10); //return 16
addSix(21); // return 27

console.log(addSix(10));
console.log(addSix(21));

*/

// Csináljunk belőle closurét úgy hogy var maradjon
/*
for(var i = 0; i < 3; i++) {
    setTimeout(function log () {
        console.log(i);
    }, i * 1000);
}
*/
/*
//Így 
for(var i = 0; i < 3; i++) {

    function innerFunction (i) {
        setTimeout(function log () {
            console.log(i);
        }, i * 1000);
    }
     innerFunction(i);

}

*/

// How would you use a closure to create a private counter?

/*
function counter () {
    var _counter = 0;

    function add (increment) {
        _counter += increment;
    }

    function retrive () {
        return "Counter = " + _counter;
    }

    return {
        add,
        retrive
    }
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());
*/

// Make this run only once// 

/*
let view

function likeTheVideo () {
    view = "Roadside Coder";
    console.log("Subscribe to ", view);
}

likeTheVideo();
likeTheVideo();
likeTheVideo();
*/

// MEGOLDÁS

/*
function likeTheVideo () {
    let called = 0;

    return function () {
        if (called > 0) {
            console.log("You already subscribe to Roadside Coder");
        } else {
            view = "Roadside Coder";
            console.log("Subscribe to ", view);
            called++;
        }
    }
}

let isSubscribe = likeTheVideo();
isSubscribe();
isSubscribe();
isSubscribe();
*/

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//                                                 THIS KULCSSZÓ
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*
let user = {
    name: 'Ödön',
    age: 32,
    newUser: {
        newName: 'Siska',
        getDetails() {
            console.log(`${this.newName} and ${this.name}`);
        }
    }
}

user.newUser.getDetails();

*/

/*
let user = {
    name: 'Ödön',
    age: 19,
    getDetails: () => {
        console.log("Hello a nevem ", this.name);
    }
}

user.getDetails();
*/
/*
class user {
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

new user("Ödön").getName();
*/
/*
const user = {
    name: "Ödön!",
    getName() {
        const name = "Ödön";
        console.log(this.name);
    }
}

user.getName(); //Mit ír ki?
*/

/*
function makeUser () {
    return {
        name: "Ödön!!",  // the parent object is the window object
        rel: this,
    }
}

let user = makeUser();

console.log(user.rel.name);
*/
// Müködik
/*
function makeUser () {
    return {
        name: "Ödön!!",
        rel () {
            return this;
        }
    }
}

const user = makeUser();
console.log(user.rel().name);
*/

/*
let user = {
    name: "Ödön!!",
    logMessage () {
        console.log(this.name) // Mit ír ki?
    }
}

setTimeout(user.logMessage, 1000); // Mint calback fv használja
*/

// Megjavítva

/*
const user = {
    name: "Ödön!!",
    logMessage () {
        console.log(this.name);
    }
}

setTimeout(function() {
    user.logMessage();
}, 1000);

*/

/*
const user = {
    name: "Ödön!!",
    greet() {
        console.log(this.name);
    },

    farewell: () => {
        console.log(this.name);
    }
}

user.greet();
user.farewell();
*/

/*
var length = 4;

function callback () {
    console.log(this.length);
}

const object = {
    length: 5,
    method (fn) {
        fn();
    }
}

object.method(callback);
*/
/*
var length = 4;

function callback () {
    console.log(this.length);
}

const object = {
    length: 5,
    method () {
        arguments[0]();
    }
}

object.method(callback, 2, 3);
*/

/*////////////////////////////////////////////////////////*/
//                  Objektumok
/*////////////////////////////////////////////////////////*/

/*
const func = (function (a) {
    delete a; // a delete scak objektumokon müködij az a egy lokális változó
    return a;
})(5);

console.log(func);
*/

/*
const user = {
    name: "Ödön",
    age: 24,
    isTotallyAwsome: true,
}

 for (key in user) {
    console.log(user[key]);
 }
 */
/*
// két kulcsunk van ugyanazzal a névvel így az első kicserélődik a másikra
 const obj = {
    a: "one",
    b: "two",
    a: "three",
 };

 console.log(obj);
 */

 /*

 // Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.


 let nums = {
    a: 100,
    b: 200,
    title: "My nums",
 };

 multiplyByTwo(nums);

 function multiplyByTwo (obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }
    }
 }

 console.log(nums);

 */

 // Mit fog kiírni?

/*Egy objektum tulajdonságának beállítása során a javascript karakterláncba kényszeríti a paramétert.
Ezért, mivel y egy objektum, „objektum objektummá” lesz konvertálva.
Mind az x[y], mind az x[z] ugyanarra a tulajdonságra hivatkozik */


/*
 const a = {};
 const b = { key: "b" };
 const c = { key: "c" };

 a[b] = 123;
 a[a] = 456;


 console.log(a[c]);
 console.log(a);
*/


/*
// Mit ir ki?

console.log([..."Lyda"]);
*/
/*
// Mit ir ki?

const user = {name: "Lydia", age: 21};
const admin = {admin: true, ...user}; // Hozzáadja a user objektum összes tulajdonságát az admin objektumba

console.log(admin);
*/
/*
const shape = {
    radius: 10,
    diameter () {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
*/
/*
// Destrukturálás 

let user = {
    name: "Ödön",
    age: 24,
    fullName: {
        first: "Kiss",
        last: "Pista",
    }
};

const name = "Henry";

const {
    fullName: { first },
} = user;

console.log(first);
*/

/*
// Mit ir ki? 
// rest opertátornál az arggs utolsó helyen kell állnia
function getItems (fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange");
*/
/*
// Mit ír ki?

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
*/

/*
//Mit fog kiírni?
// mind a kettő külön memórihelyen helyezkednek el
console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
*/

// Mit ír ki 

/*
let person = { name: "Ödön"};
const members = [person];
person = null;

console.log(members);
*/
/*
//Mit ir ki?

function changeAgeAndReference (person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50,
    };

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30,
};


const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1);

console.log(personObj2);
*/

/*/////////////////////////////////////////////*/
//                  Function
/*////////////////////////////////////////////*/

/*
// fv deklaráció

function square (num) {
    return num * num;
}
*/


/*
// fv kifejezés

const square = function (num) {
    return num * num;
};

console.log(square(5));
*/
/*
// first class function

function square (num) {
    return num * num;
}

function display (fn) {
    console.log("Square is " + fn(5));
}

display(square);
*/
/*
//Mit ir ki
(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);
*/

/*
valami();
console.log(x);

function valami () {
    console.log("Ide irok valamit");
}

var x = 5;
*/

/*
function square (num) { // paraméter
    return sum * sum;
}

square(5); // Argumentum;
*/

/* BIND CALL APPLY */

/*
// What is call?
const person = {
    name: "Ödön",
}

function introduce (age) {
    console.log("Hello a nevem " + this.name + " az életkorom " + age);
}

introduce.call(person, 18);
*/


// What is apply?
/*
const person = {
    name: "Ödön",
}

function introduce (age, profession) {
    console.log("Hello a nevem " + this.name + " az életkorom " + age + " " + profession);
}

introduce.apply(person, [18, "Softwer Engineer"]);
*/

// What is blind?
/*
const person = {
    name: "Ödön",
}

function introduce (age, profession) {
    console.log("Hello a nevem " + this.name + " az életkorom " + age + " " + profession);
}

const bindFunc = introduce.bind(person);

console.log(bindFunc(24, "Softwer engineer"));
console.log(bindFunc(34, "Youteber"));

*/

// Mit fog kiírni?
/*
const person = {name: "Henry"};

function sayHi (age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 28));
console.log(sayHi.bind(person, 23));
*/


// call with function inside object
/*
const age = 10;

var person = {
    name: "Ödön",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person2 = { age: 24};

console.log(person.getAge.call(person2));

*/

// Mit ír ki?
/*
var status = ":)";

setTimeout(()=> {
    const status = ":|";

    const data = {
        status: ":(",
        getStatus() {
            return this.status;
                }
    }
    console.log(data.getStatus());
console.log(data.getStatus.call(this));
}, 0);
*/

/*
const animals = [
    {species: "Lion", name: "king"},
    {species: "Whale", name: "Queen"},
];

function printAnimals (i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}
*/

// Append an array to another array
/*
const array = ['a', 'b'];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array);

*/

// Find min/max number in an array
/*
const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));
*/



// currying example

/*
function f(a) {
    return function (b) {
        return `${a} ${b}`;
    }
}

console.log(f(5)(6));

*/

// Why should we use curriyng?

// question 1 - sum(2)(6)(1)
/*
function sum (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(6)(1));
*/

// question 2 
/*
    evaluate("sum")(4)(2) => 6;
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
    evaluate("substract")(4)(2) => 2
*/

/*
function evaluate (operation) {

    return function (a) {
        return function (b) {
            if (operation === "sum") { return a + b}
           else if (operation === "multiply") { return a * b}
           else if (operation === "divide") { return a / b}
           else if (operation === "substract") { return a - b}
           else return "Invalid operation!";
        }
    }

}

console.log(evaluate("sum")(4)(2));
const mul = evaluate("multiply");
console.log(mul(2)(3));
*/

// question 3 - Infintite Currying -> sum(1)(2)(3).....(n)

/*
function add (a) {
    return function (b) {
        if (b) return add(a + b) ; // Ha b lézezik;
        return a;
    }
}

console.log(add(5)(2)(4)(8)());
*/

// question 4 - Manipulating DOM
/*
function updateElementText (id) {
    return function (content) {
        document.querySelector(`#${id}`).textContent = content;
    }
}

const updateHeader = updateElementText("heading");

updateHeader("Hello kis mackó");
*/