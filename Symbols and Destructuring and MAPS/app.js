// // Create a Symbol

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// // console.log(sym1);
// // console.log(sym2);
// // console.log(typeof sym2);
// // console.log(`Hello ${String(sym2)}`);
// // console.log(`Hello ${sym2.toString()}`);


// // *** Unique object Keys...
// const KEY1 = Symbol();
// const KEY2 = Symbol('Sym2');

// const myObj = {};

// myObj[KEY1] = 'prop1';
// myObj[KEY2] = 'prop2';
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop4';

// // console.log(myObj[KEY1]);
// // console.log(myObj[KEY2]);


// // Symbols are not enumerable in for...in 
// for(let i in myObj) {
//    console.log(`${i}: ${myObj[i]}`)
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({Key: 'prop5'}));
// console.log(JSON.stringify({[Symbol('sym5')]: 'prop5'}));




// // ***** Destructuring Assignment *****

// let a, b;
// [a, b] = [100, 200];

// // Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// // // Using parenthesis in destructuring an assignment...
// // ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500})

// ({a, b, c, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500})

// // Destructuring with Array.
// const people = ['Shabs', 'Planta', 'Tolulope'];
// const [pep1, pep2, pep3] = people;

// // perse Array destructuring with return function()
// function getPeople() {
//    return ['Shabs', 'Planta', 'Tolu']
// }

// let people1, people2, people3;
// [people1, people2, people3] = getPeople();


// // Object destructuring
// const profile = {
//    name: 'Ajide Shadrack',
//    age: 28,
//    city: 'lagos',
//    sayHello: function() {
//       console.log('Hello')
//    }
// }

// // ES5 way of destructuring
// const name = profile.name,
//       age = profile.age,
//       city = profile.city = profile;

// // ES6 way of destructuring
// const {name, age, city, sayHello} = profile;



// // console.log(a);
// // console.log(b);
// // console.log(rest);
// // console.log(a, b, c);
// // console.log(rest);
// console.log(pep1, pep2, pep3);
// console.log(people1, people2, people3);
// console.log(name, age, city, sayHello);
// sayHello();




// // ***** MAPS: its a key-value pairs - can use any type as Key or Value
// const map1 = new Map();

// // set keys
// const key1 = 'some strings',
//       key2 = {}
//       key3 = function() {};

// // set map value by key
// map1.set(key1, 'value of key1');
// map1.set(key2, 'value of key2');
// map1.set(key3, 'value of key3');

// // Get values by keys
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // count Values
// console.log(map1.size);


// //  *** Iterating maps ***
// //  loop using for....of to get Keys and values
// for(let [key, value] of map1) {
//    console.log(`${key}: = ${value}`)
// }

// // *** Iterate keys only.
// //  loop using for....of to get Keys only
// for(let key of map1.keys()) {
//    console.log(`${key}`)
// }

// // *** Iterate values only.
// //  loop using for....of to get the new values of Keys only
// for(let value of map1.values()) {
//    console.log(`${value}`)
// }

// //  loop using forEach to get Keys and values
// map1.forEach(function(key, value) {
//    console.log(`${key}: = ${value}`)
// })


// // **** Convert to Array ....
// // Create an array of the key value pair
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// console.log(keyValArr[2])


// // Create an array for value pair
// const valArr = Array.from(map1.values());
// console.log(valArr);


// // Create an array for key pair
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);



// ***** SETS *****
// SETS - are basically unique values, they are set to store any unique type of value.
const set1 = new Set();

// add value to set
set1.add(1000);
set1.add('A Strings');
set1.add({ name: 'Shabs' });
set1.add(true);
set1.add(1000);


console.log(set1)

// // Get count
// console.log(set1.size);

// // Check for value
// console.log(set1.has(100));
// console.log(set1.has(1000));
// console.log(set1.has('A Strings'));
// console.log(set1.has({ name: 'Shabs' })); // It will be false because its not a premetive value....

// // Delete value...
// set1.delete(1000);

// console.log(set1)

// // Iterating through SET using a For...of loop
// for (let items of set1) {
//    console.log(items)
// }

// for (let items of set1.values()) {
//    console.log(items)
// }

// for (let items of set1.keys()) {
//    console.log(items)
// }

// for (let items of set1.entries()) {
//    console.log(items)
// }

// // SET, SETS with forEach loop.
// set1.forEach((value) => {
//    console.log(value);
// })

// // SET, SETS with Array.
// const setArr = Array.from(set1);
// console.log(setArr);


// // *** SET - second method
// const set2 = new Set([90, 'All Strings', true, {place: 'Lagos Nigeria'}]);
// console.log(set2);