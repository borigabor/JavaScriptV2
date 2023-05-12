
/* 1 feladat

function camelLetters (string) {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }

    return newString;
}

console.log(camelLetters("yo eli"));
console.log(camelLetters("hello???"));
console.log(camelLetters("HELLO"));

*/

/* 2 feladat írj olyan fv ami egy természetes számról eldönti hogy primszám-e vagy sem

function primSzam (szam) {
    let counter = 0;

    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            counter++;
        }
    }

    return counter;

}

function viszgal (prim) {
    if (prim === 2) {
        console.log("Ez egy prímszám!");
    } else {
        console.log("Ez NEM egy prímszám!");
    }
}

const prim = primSzam(43);

viszgal(prim);
*/

/* 3 feladat Írjon olyan fv amely egy természetes számról eldönti hogy tökéletes szám-e vagy sem!
(pozitiív osztóinak összege a szám kétszerese)

function tokeletesSzam (szam) {

    let counter = 0;

    for (let i = 1; i < szam; i++) {
        if (szam % i === 0) {
            counter += i;
        }
    }

    return counter;
}

function vizsgal (tokeletes, szam) {
    if (tokeletes === szam) {
        console.log("Ez a szám egy tökéletes szám!");
    } else {
        console.log("EZ a szám NEM tökéletes szám!");
    }
}

vizsgal(tokeletesSzam(496), 496);

*/

/* 4 feladat irasd ki a tömböl a legnagyobb elemet

const array = [12, 8, 3, 9, 20, 7, 11];

function maximumElem (array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

function kiiratas (max) {
    console.log("A tömben a legnagyobb elem " + max);
}

const max = maximumElem(array);

kiiratas(max); */

/* 5 feladat this kulcsszó haszánata objektumban (trükkös!)

const objektum = {
    nev: "Ödön",
    baratok: ["Gábor", "Berry", "Józsi", "Katalin"],

    haverok: function () {
        this.baratok.forEach( (elem) => {
            console.log(`${this.nev} barátja ${elem}`);
        })
    }
}

objektum.haverok();
*/

/* 6 feladat call függvénymetódus hasznátat

const person = {
    name: "Ödön"
}

function introduce () {
    console.log("Hello a nevem " + this.name);
}

introduce.call(person);

const rabbit = {
    name: "White Rabbit"
}

function concatName (string) {
    return string + this.name;
}

console.log(concatName.call(rabbit, "Hello "))
*/

/* 7 feladat dobozok színét megváltoztatni kékre (dodgerblue)
 azon dobotok amik kékek lettej írják ki hogy kék lettem
 a címsor és a dobozok szövegeének színét változtasd sárgára
 az első dobozra kattintva írja ki az eredeti színét és pozicióját



(() => {

    const dobozokES5 = document.querySelectorAll(".doboz");
    const cimsor = document.querySelector("h1");
    const zoldDoboz = document.querySelector(".zold");

    Array.prototype.slice.call(dobozokES5);

    const dobozokTomb = [cimsor, ...dobozokES5];
    
    dobozokES5.forEach( doboz => {
        doboz.style.backgroundColor = "dodgerblue";
    })

    for (const elem of dobozokES5) {
        if (elem.className.includes('kek')) {
            continue;
        }
        elem.textContent = "Kék lettem";
    }

    dobozokTomb.forEach( doboz => {
        doboz.style.color = "yellow";
    })

    const zoldObj = {
        szin: "Zöld",
        pozicio: 1,

        kattRam: function () {
            zoldDoboz.addEventListener("click", () => {
                alert(`A(z) ${this.pozicio} doboz szine: ${this.szin}`);
            })
        }
    }

    zoldObj.kattRam();


})()

*/

/* 8 feladat Írj egy ködöt ami visszad egy tömböt a felhasználók nevével
irasd ki azon felhasználók nevét akik aktívak
 irasd ki életkor szerint növejvő sorrendben azoknak a nevét aktívak

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30
    }
];

function usersName1 (obj) {
    const names = [];

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].isActive) {
            names.push(obj[i].name);
        }   
    }

    return names;

}

function usersName2 (obj) {
    const names = [];

    obj.forEach( person => {
        if(person.isActive) {
            names.push(person.name);
        }
        
    })
    return names;
}


const usersName3 = users
.filter( person => person.isActive).sort( (person1, person2) => person1 > person2 ? 1 : -1)
.map( person => person.name);

console.log(usersName3);

*/

/* 9 feladat lottó sorsolás kisorsol 5 számot random generátor
  kiirja növekvő sorrendben a kihúzott lottószámokat
  írj függvényt ami visszadja a találatok számát

(() => {

const lottoSzamaim = [1, 5, 3, 6, 9];

function lottoSorsolas () {
    let sorsol = 0;
    let lottoSzam;
    let bennevan;
    const lottoSzamok = [];

    while (sorsol < 5) {
        lottoSzam = Math.floor(Math.random() * 10) + 1;
        bennevan = false;

        for (let i = 0; i < sorsol; i++) {
            if (lottoSzamok[i] === lottoSzam) {
                bennevan = true;
            } 
        }
        if(!bennevan) {
            lottoSzamok.push(lottoSzam);
            sorsol++;
        }
    }

    return lottoSzamok;
}

function novekvoSorrend (lottoszamok) {
    let temp;

    for (let i = lottoszamok.length; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (lottoszamok[j] > lottoszamok[j + 1]) {
                temp = lottoszamok[j];
                lottoszamok[j] = lottoszamok[j + 1];
                lottoszamok[j + 1] = temp;
            }
        }
    }

    return lottoszamok;
}

function talalatok (lottoszamok) {
    let talalat = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(lottoszamok[i] === lottoSzamaim[j]) {
                talalat++;
            }
        }
    }
    return talalat;
}

console.log(`A lottszamok növekvő sorrendben: ${novekvoSorrend(lottoSorsolas())}`);
console.log(lottoSzamaim);

console.log(`talalatok szama: ${talalatok(lottoSorsolas())}`);



})();
*/

/* 10 feladat fv-nek egy tömböt átadunk mint paraméterelista és az visszadja az összegüket.
 spread operátor és ES5 megoldás

function osszead (a, b, c, d) {
    return a + b + c + d;
}

szamokTomb = [1, 2, 3, 4];

var eredmenyES5 = osszead.apply(null, szamokTomb);

console.log("A tömb elemeinek összege ES5: " + eredmenyES5);

const eredmenyES6 = osszead(...szamokTomb);

console.log(`A tömb elemeinek összege ES6: ${eredmenyES6}`);
*/

/* 11 feladat Írj egy fv ami kap tetszőleges db számot és ezekről kiírja a konzolban hogy páros vag páratlan
 Rest paraméter használata ES5 és ES6

function parosVagyParatlanES5 (tomb) {
    var argumentumok = Array.prototype.slice.call(arguments, 0);
    argumentumok.forEach(function(elem) {
        if (elem % 2 === 0) {
            console.log("páros");
        } else {
            console.log("páratlan");
        }
    })
}

parosVagyParatlanES5('100', 1, 2, 3);

function parosVagyParatlanES6 (...szamok) {
    szamok.forEach( elem => {
        if (elem % 2 === 0) {
            console.log("páros");
        } else {
            console.log("páratlan");
        }
    })
} 

parosVagyParatlanES6(1, 2, 3);
*/

/* 12 feladat írj egy fv emi kap egy elemet és egy tömböt majd visszadja a tömböt az elemmel a végén

const tomb = [1, 2, 3, 4];

const appendES5 = (tomb, elem) => {
    tomb.push(elem);

    return tomb;
}

console.log(tomb);
//console.log(append(tomb, 5));
console.log(tomb); // módsítja a tömbömet


const appendES6 = (tomb, elem) => {
    return [...tomb, elem];
}

console.log(appendES6(tomb, 5));
console.log(tomb);

*/

/* 13 törli a tömböl a duplán előforduló elemekt

const tomb = [1, 1, 2, 1, 3, 4, 3, 5];

const elemTorol = tomb => {
    const eredmeny = [];
    tomb.forEach( elem => {
        if(!eredmeny.includes(elem)) {
            eredmeny.push(elem);
        }
    })

    return eredmeny;
}

console.log(elemTorol(tomb));
*/

/* 14 rendezd növekvő sorrenbe a tömb elemeit
  mind a 2 módszer

(() => {

    const tomb = [3, 5, 1];
    const tomb2 = [7, 3, 1, 5, 9, 4];

    const eredmeny = tomb.sort((elem1, elem2) => elem1 > elem2 ? 1 : -1);

    console.log(eredmeny);

    const rendez = tomb => {
        let temp = 0;
        for (let i = tomb.length; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                if (tomb[j] > tomb[j + 1]) {
                    temp = tomb[j];
                    tomb[j] = tomb[j + 1];
                    tomb[j + 1] = temp;
                }
            }
        }

        return tomb;
    }

    console.log(rendez(tomb2));

})();

*/

/* 15 feladat rendezd az objektum sorrendbe a az írók keresztneve alapján

const books = [
    {name: 'Harry Potter', author: 'Joanne Rowling'},
    {name: 'Warcross', author: 'Marie Lu'},
    {name: 'The Hunger Games', author: 'Suzanne Collins'}
];

books.sort((book1, book2) => {
    const auhotLastName1 = book1.author.split(' ')[1];
    const auhotLastName2 = book2.author.split(' ')[1];
    return auhotLastName1 > auhotLastName2 ? 1 : -1;
})

console.log(books);

*/

/* 16 Írj fv ami a kapott stringet forditva adja vissza

const revString = str => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;
}

console.log(revString("alma"));

const revString2 = str => {
    let string = '';
    for (let i = str.length; i >= 0; i--) {
        string += str.charAt(i);
    }

    return string;
}

console.log(revString2("Apple"));

*/

/* 17 feladat fv gey stringet kap paraméterül és eldönti hogy palindrom e vagy sem (visszafel olvasa ugyanaz)

const palindrom = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;
}

 const szoveg = "pap";

    if(szoveg === palindrom(szoveg)) {
        console.log("palindrom");
    } else {
        console.log("NEM palindrom");
    }

    */

    /* 18 feladat számokat visszafelé ír ki

    const revNumber = (number) => {
        if (number < 0) {
            return -1 * parseInt(number.toString().split('').reverse().join(''));
        }
        return parseInt(number.toString().split('').reverse().join(''));
    }

    console.log(revNumber(15));
    */

/* 19 írjon olyan fv amely egy szám esetén kiíírja hogy hány darab 9-est tartalmaz (A számot ne alakítsa stringé)

const szamVizsgal = (szam) => {
    let maradek;
    let db = 0;
    while (szam > 0) {
        maradek = parseInt(szam % 10);
        szam = parseInt(szam / 10);

        if (maradek === 9) {
            db++;
        }
    }

    return db;
}


console.log(szamVizsgal(989999));

const szamVizsgal2 = (szam) => {

    let str = szam.toString();
    let db = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '9') {
            db++;
        }
    }

    return db;

}

console.log(szamVizsgal2(9999998));

*/



// 20 alakítsd a következő feladatot closur-é

/*
var greeting = "Hello";

function greetWithExcitement (name) {
    var excitment = "!!!";
    console.log(greeting + name + excitment);
}

greetWithExcitement("Berry");
*/
/*
const greet = (() => {

const greeting = "Hello";

function greetWithExcitement (name) {
    const excitment = "!!!";
    console.log(`${greeting} ${name} ${excitment}`);
}

return greetWithExcitement;

})();

greet("Berry");
*/

/* 21 undefined vs null

var a;
let user = null;

console.log(a);
console.log(typeof(a));

console.log(user);
console.log(typeof(user));

if (typeof(user) != null) {
    console.log("Minden oké!");
}

*/

/* 22 feladat

let shoesAviable = new Promise((resolve, rejected) => {
    let inStock = true;

    if(inStock) {
        resolve("Store has shoes in stock!");
    } else {
        rejected("Store does not have shoes in stock");
    }
})

let sufficientFunds = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => resolve("Yay! Enough money in the bank!"), 1000);
        //setTimeout(() => rejected("Not enough money in the bank!"), 1000);
    })
}

let transaction = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => resolve("Transaction went trough"), 1000);
    })
}


shoesAviable
.then( (response) => {
    console.log(response);
    return sufficientFunds();
})
.then((responde) => {
    console.log(responde);
    return transaction();
})
.then((responde) => {
    console.log("Finished " + responde);
})
.catch((rejected) => {
    console.log(rejected);
})
*/

/*
const azonositokLekerdezese = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5]);
        rejected("Valami hiba történt!");
    }, 2000);
});

const receptLekerdez = (receptID) => {
    return new Promise((resolve, rejected) => {
        setTimeout((id) => {
            const receptek = {
                cim: 'Gulyásleves',
                kategoria: 'Levesek'
            };
            resolve(`${id}: ${receptek.cim}`);
        }, 1500, receptID);
    })
}

const kategoriaLekerdez = (kategoria) => {
    return new Promise((resolve, rejected) => {
        setTimeout((kat) => {
            const levesek = [
                {cim: "Tökleves", kategoria: "Levesek"},
                {cim: "Húsleves", kategoria: "Levesek"}
            ];
            resolve(levesek);
        }, 1500, kategoria);
    })
}

azonositokLekerdezese
.then((responde) => {
    console.log(responde);
    return receptLekerdez(responde[2]);
})
.then((responde) => {
    console.log(responde);
    return kategoriaLekerdez(responde.kategoria);
})
.then((responde) => {
    console.log(responde);
})
.catch((err) => {
    console.log(err);
})

*/


/* 24 alakítsd klózsöré
for(var i = 0; i < 2; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 1000);
    })(i);
}
*/

/* 25 feladat Implement a function that returns an updated array with r right rotations on an array of integers a .
Example:

Given the following array: [2,3,4,5,7]
Perform 3 right rotations:
First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

return [4,5,7,2,3]*/

/*
const array = [2,3,4,5,7];

function rotataeRight (array, n) {
    let element;
    if(n === 0) {
        return array;
    }

    for(let i = 0; i < n; i++) {
        element = array.pop();
        array.unshift(element);
    }

    return array;
}

console.log(array);
console.log(rotataeRight(array, 3));
*/

/* 26 feladat Írk kódot ami egy tömbnem megtalálja a magánhangzókat

const findVolwels = str => {
    let count = 0;
    const maganhangzok = ['a', 'e', 'i', 'o', 'u'];
    for(const betu of str.toLowerCase()) {
        if(maganhangzok.includes(betu)) {
            count ++;
        }
    }

    return count;
}

console.log(findVolwels("Elmentem a boltba"));

*/


/*
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000);
}

*/


/*
function haromSzamOsszege (...element) {
    return new Promise((resolve, rejected) => {
        if(element.length > 3) {
            rejected("Only three element or less allowed");
        } else {
            let sum = 0;
            for(let i = 0; i < element.length; i++) {
                sum += element[i];
            }

            resolve("Sum has been calculeted: " + sum);
        }
    })
}
haromSzamOsszege(4, 5)
.then((responde) => {
    console.log(responde)
})
.catch((err) => {
    console.log(err);
})

*/



