// // Log to console
// console.log('Hello Nigeria');
// console.log(123);
// console.log(true);

// var greetings = "Hello Naija";
// console.log(greetings);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2})
// console.error('this is an error...');

// console.warn('this is a warning...')

// console.time('Hello');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
//   console.log('hello world');
// console.timeEnd('Hello');

// console.clear();

// // var, let and const

// var info = 'Ajide Shedrack';
// console.log(info);
// info = 'Temitope Bayo';
// console.log(info);


// // initiate var

// var greeting;
// console.log(greeting);
// greeting = 'Good morning!!!';
// console.log(greeting);

// // characters under variables:
// // letters, Numbers, _ and $.
// // multiples vars
// var firstName = 'bayo'; // Camel case
// var first_name = 'shabs'; // Underscore case
// var FirstName = 'tope'; // Pascal case

// console.clear();


// // Let
// let mame = 'shabs';
// console.log(mame);

// let mama;
// mama = 'Im ' + 25 + ' years old';
// console.log(mama);

// // Const

// const papa ='Papa, he likes reading';
// console.log(papa);
// // const can reassign a value
// // papa = 'im good';
// // const as to assign is value
// // const pops

// // using const with an Object.
// const person = {
//    name: 'shabs',
//    age: 25
// }

// person.name = 'tayo';
// person.age = 27;

// console.log(person);


// // using const with an Array.
// const numbers = [1,2,3,4,5];
// numbers.push(6);
// numbers.push(7);

// console.log(numbers);
// console.clear();



// // Primitive Data

// // strings
// const coco = 'damoch';
// console.log(typeof coco);

// // numbers 
// const co = 35;
// console.log(typeof co);

// // boolean 
// const house = true;
// console.log(typeof house);

// // Null
// const car = null;
// console.log(typeof car);

// // undefined
// let bayo;
// console.log(typeof bayo);

// console.clear();



// // Reference Data

// // Array
// const motors = ['toyota', 'lexus', 'benz']
// console.log(typeof motors);

// // Object data
// const address = {
//    state: 'lagos',
//    country: 'nigeria',
//    no: 35
// }
// console.log(typeof address);

// // date date
// const today = new Date();
// console.log(today);

// console.log(typeof today);
// console.clear();




// let val;

// // Number
// val = 7;

// // outline 
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// // convert a number to a string
// val = String(8);
// val = String(384);
// val = String(2+9+4/2);
// val = String(4+4);
// // bool to string
// val = String(true);
// // array to string
// val = String([1,2,3,4,5,6])
// // null to string
// val = String(null)
// // object to string
// val = String({a:1, b:2});
// // date to string
// val = String(new Date());

// // tostring
// val = (30).toString();
// val = (['bayo','shabs']).toString();
// val = (new Date()).toString();
// val = (true).toString();

// // outline 
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.clear();


// // String to numbers
// val = 5;
// // bool to number
// val = Number(true);
// val = Number(false);
// // null to number
// val = Number(null);
// // spring to number
// val = Number('hello')
// // array to number 
// val = Number([1,2,3,4])

// // parseint is an integer it doesnt come with a decimal point.
// val = parseInt('100');
// val = parseFloat('100.40')



// // output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed())
// console.clear();


// // Examples of typeCourtion  (is a default calculation by javascripts)

// // Before
// let val1 = 6;
// let val2 = 10;
// let sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// // After: where the default is happening.
// let val3 = String(6);
// let val4 = 10;
// let sum2 = val3 + val4;

// console.log(sum2);
// console.log(typeof sum2);

// // to run the sum to NUMBERS: with javescripts default calculation
// let val5 = String(6);
// let val6 = 10;
// let sum3 = Number(val5 + val6);

// console.log(sum3);
// console.log(typeof sum3);
// console.clear();



// // basic math operator

// const num1 = 100;
// const num2 = 50;
// let finalSum;

// // Simple math with numbers.
// finalSum = num1 + num2;
// finalSum = num1 * num2;
// finalSum = num1 - num2;
// finalSum = num1 / num2;
// finalSum = num1 % num2;

// // output
// console.log(finalSum);
// console.log(typeof finalSum);
// console.clear();


// // Math object
// let sun;

// sun = Math.PI;
// sun = Math.E;
// sun = Math.round(2.6);
// sun = Math.ceil(2.3); // its roundUp to greater than with default
// sun = Math.floor(2.8); // it roundDowm to lesser than with default
// sun = Math.sqrt(81);
// sun = Math.abs(-5);
// sun = Math.pow(8,2);
// sun = Math.min(18,28,8,9,47,33,90,02,-10);
// sun = Math.max(18,28,8,9,47,33,90,02,-10);
// sun = Math.random();

// sun = Math.floor(Math.random() * 20 + 1);

// console.log(sun);
// console.clear();



// // String Methods amd Cocatenation

// const firstName1 = 'titilayo';
// const lastName1 = 'shaggy';
// const age1 = 26;
// const str = 'hello world i\'m shabs';
// const tags = 'web designer, website, netflix, comment box';
// let sweet;

// // cocatenation
// sweet = firstName1 + ' ' + lastName1;

// // Append
// sweet = 'Ajide ';
// sweet += 'Shedrack';

// sweet = 'My name is ' + firstName1 + ' ' + lastName1 + 'i am ' + age1 + ' Years old';

// // Escaping
// // sweet = 'i'm there i'ts samuel there'; (correction for this code)
// sweet = 'i\'m there i\'ts samuel there'; // (here)
// sweet = "i'm there i'ts samuel there";  // and (here)

// // length
// sweet = firstName1.length;

// // concat
// sweet = firstName1.concat(' ' + lastName1);

// // Change case
// sweet = firstName1.toUpperCase() + ' ' +  lastName1.toLowerCase();

// // Array 
// sweet = firstName1[7]

// // indexof
// sweet = firstName1.indexOf('l');
// sweet = firstName1.lastIndexOf('l');

// // charAt
// sweet = firstName1.charAt('7');
// // Get last Char
// sweet = firstName1.charAt(firstName1.length - 1);

// // Substring 
// sweet = firstName1.substring(0,4);

// // slice (its an Array functions)
// sweet = firstName1.slice(0,4);
// sweet = firstName1.slice(-4);

// // split
// sweet = str.split(' ');
// sweet = tags.split(',');

// // Replace
// sweet = str.replace('shabs', 'tope');

// // includes: its an Boolean data
// sweet = str.includes('shas');


// console.log(sweet);

// const name1 = 'Shabs';
// const age2 = 26;
// const job = 'Web developer'
// const city = 'Lagos State'
// let html;

// // without template string...(ES5)
// html = '<ul>' +
//        '<li> Name: ' + name1 + '</li>' +
//        '<li> Age: ' + age2 + '</li>' +
//        '<li> Job: ' + job + '</li>' +
//        '<li> City: ' + city + '</li>' +
//        '</ul>';

// document.body.innerHTML = html;

// // with template string...(ES6)

// // continue when key board arrive...

// // create some Array...
// const number1 = [28,27,9,90,84,82,12,32];
// const number2 = new Array(28,27,9,90,84,82,12,32);
// const fruits = ['Mango', 'Apple', 'Orange', 'Kiwi', 'strawberry'];
// const cars = new Array('toyota', 'lexus', 'jeep', 'benz', 'highLander');
// const mixed = [390, 'whats Up', undefined, null, new Date()]
// let val7;

// // The length of Array
// val7 = number1.length;
// // check if is array (like a boolean)
// val7 = Array.isArray(number1);
// // get single value
// val7 = number1[4];
// val7 = number1[0];
// // instal into Array
// number1[3] = 100;
// // find index of value
// val7 = number1.indexOf(100);

// // add to th end
// val7 = number1.push(21);
// // add to the end
// val7 = number1.unshift(43);
// // take of number from end
// val7 = number1.pop();
// // take of number from front
// val7 = number1.shift();
// // splice
// val7 = number1.splice(1,2);
// // reverse
// val7 = number1.reverse();
// // concatanate
// val7 = number1.concat( number2);

// // sort contants alfabetically
// val7 = fruits.sort();
// // to sort numbers is by the "compare function"
// val7 = number2.sort(function(x,y){
//    return x - y;
// })


// console.log(number1);
// console.log(mixed);
// console.log(val7);




// // Object literal
// const person = {
//    firstname: 'shabs',
//    lastname: 'planta',
//    age: 27,
//    email: 'shabsplanta@gmail.com',
//    hobbies: ['Music', 'Sport', 'Fun'],
//    address: {
//       city: 'Ifako',
//       state: 'Lagos'
//    },
//    getBrithYear: function(){
//       return 2022 - this.age;
//    }
// }
// let val;



// val = person.firstname;
// val = person['lastname'];
// val = person.age;
// val = person.email;
// val = person.hobbies;
// val = person.hobbies[2];
// val = person.address.city;
// val = person.address['state'];
// val = person.getBrithYear();


// console.log(val);



// const group = [
//    {name1: 'shabs', age: 32},
//    {name1: 'plata',  age: 32},
//    {name1: 'jack',  age: 32}
// ];

// for (let i=0; i < group.length; i++){
//    console.log(group[i].name1)
// }



// // DATE AND TIME

// const today = new Date();
// let birthday = new Date('05-12-2022');
// birthday = new Date('may 10 1996');
// let baby = new Date('jan-10-2005');


// let val;

// //requesting for an information.
// val = today;
// val = today.getMonth();
// val = today.getDate();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getDay();
// val = today.getTime();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTimezoneOffset();

// //changing something in the data
// birthday.setMonth(4);
// birthday.setFullYear(2021);
// birthday.setDate(12);
// birthday.setHours(9);
// birthday.setMinutes(45);
// birthday.setSeconds(30);


// console.log(val);
// console.log(birthday);



// // IF STATEMENT AND COMPARISON OPERATORS

// // if (something){
// //    do something
// // } else {
// //    do something else
// // }

// const id = 100;

// // if - if is Equal to...
// if (id == 100){
//    console.log('CORRECT');
// }
// else {
//    console.log('INCORRECT');
// }

// // if - if is not Equal to...
// if (id != 100){
//    console.log('CORRECT');
// }
// else {
//    console.log('INCORRECT');
// }




// const num = '100';

// // if - if is Equal to... value and type
// if (num === 100){
//    console.log('CORRECT');
// }
// else {
//    console.log('INCORRECT');
// }

// // if - if is not Equal to...value and type
// if (num !== 100){
//    console.log('CORRECT');
// }
// else {
//    console.log('INCORRECT');
// }


// const id = 100;

// // Test id undefined 
// if (typeof id !== 'undefined'){
//    console.log('the ID is ' + id);
// }
// else {
//    console.log('NO ID');
// }


// // GREATER OR LESS
// if (id >= 200){
//    console.log('the ID is ' + id);
// }
// else {
//    console.log('NO ID');
// }

// if (id <= 200){
//    console.log('CORRECT');
// }
// else {
//    console.log('INCORRECT');
// }



// //  LOGICAL OPERATORS
// const person = 'planta';
// const age = 18;

// // AND &&
// if(age > 0 && age <= 10){
//    console.log(age + ' Years old PERSON is a KID');
// }
// else if(age > 10 && age <= 20){
//    console.log(age + 'Years old PERSON is a TEENAGE');
// }
// else {
//    console.log(age + 'Years old PERSON is an ADULT');
// }

// // OR ||

// if(age < 16 || age > 60){
//    console.log('You are not qualified to run this race')
// }
// else {
//    console.log('WELCOME you have just been REGISTERED')
// }

// // TERNARY OPERATOR 
// console.log(age === 18 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(age > 0 && age <= 17)
// console.log('YOU ARE A KID');
// else 
// console.log('YOU ARE AN ADULT');


// // SWITCH (is the same thing as "IF" but in a more complex way...)
// const color = 'red';

// switch(color){
//    case 'red':
//    console.log('MY COLOR IS RED');
//    break;
//    case 'blue':
//    console.log('MY COLOR IS BLUE');
//    break;
//    default:
//    console.log('THE color is not blue nor red');
//    break;
// }

// let day;


// switch(new Date().getDay()){
//    case 0:
//     day = 'Sunday';
//     break;
//    case 1:
//     day = 'Monday';
//     break;
//    case 2:
//     day = 'Tuesday';
//     break;
//    case 3:
//     day = 'Wednesday';
//     break;
//    case 4:
//     day = 'Thursday';
//     break;
//    case 5:
//     day = 'Friday';
//     break;
//    case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`)



// // FUNCTION DECLARATIONS AND EXPRESSIONS

// // FUNCTION DECLARATION
// function greet(firstname = 'james', lastname = 'nana'){
//    // if(typeof firstname === 'undefined'){firstname = 'tayo'};
//    // if(typeof lastname === 'undefined'){lastname = 'chalimain'};
//    // console.log('hello');
//    return `Hello ${firstname} ${lastname}`;
// }

// // greet();
// console.log(greet(/*'shabs', 'planta'*/));


// // FUNCTION EXPRESSIONS
// const greeting = function(x = 4){
//    return x*x;
// }

// console.log(greeting(9));


// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION

// (function(){
//    console.log('Hello Nigeria');
// })();

// (function(name){
//    console.log('Hello ' + name);
// })('Temitope');


// // PROPERTY METHOD (is a defination of "Function inside an Object")...
// const toto = {
//    add: function(){
//       console.log('Add Toto...');
//    },
//    edit: function(id){
//       console.log(`Edit toto ${id}`);
//    }
// }

// toto.delete = function(){
//    console.log('Delete TOTO...')
// }

// toto.add();
// toto.edit('shabs');
// toto.delete();


// let dodo;
// dodo = { 
//    call: function(id){
//    console.log(`i love dodo...${id}`);
// }
// }

// dodo.delete = function(){
//    console.log('yeah it was deleted');
// }

// dodo.call(44);
// dodo.delete();



// // GENERAL LOOPS
// // FOR loop

// for (let i = 0; i <= 10; i++){
//    // console.log('Number ' + i);

//    if (i === 2){
//       console.log('2 is my favourite number');
//       continue;
//    }

//    if (i === 7){
//       console.log('End by the commend of break')
//       break;
//    }

//    console.log(i); 
// }


// // WHILE loop
// let k = 0;

// while (k <= 10){
//    console.log(`number ${k}`);
//    k++;
// }


// // DO WHILE loop
// let i = 12;

// do {
//    console.log(`I love number ${i}`);
//    i++;
// }

// while(i <= 19);




// // LOOPING though Array..
// const cars = ['Benz', 'Toyota', 'Camery', 'ford']

// // for (i=0; i < cars.length; i++){
// //    console.log(cars[i]);
// // }


// // LOOPING through ARRAY WITH FOREACH.
// cars.forEach(function(car){
//    console.log(car);
// })

// // MAP
// const users = [
//    {id: 1, name: 'john'},
//    {id: 2, name: 'james'},
//    {id: 3, name: 'chalimain'},
//    {id: 4, name: 'planta'}
// ];

// const ids = users.map(function(user){
//    return user.id;
// })

// console.log(ids);

// // FOR IN LOOP
// const user1 = {
//    firstName: 'shabs',
//    lastName: 'planta',
//    age: 23
// };

// for (let x in user1){
//    console.log(`${x}: ${user1[x]}`);
// }
 
// console.log(user1.firstName, user1.lastName)
 
// WINDOWS METHODS / OBJECTS / PROPERTIES...

// 1- Alert.
// alert('Hello Web-Developers');

// 2- Prompt.
/* const input = prompt('Whats your name.');
   alert(input); */

// 3- Confirm.
/* if (confirm('Are you sure')){
   console.log('yes');
}
else {
   console.log('No');
}; */

// let val;

// 4- Outerheight & width.
/* val = outerHeight;
val = outerWidth; */

// 5- Innerheight & width.
/* val = innerHeight;
val = innerWidth; */

// 6- Scroll Points.
/* val = window.scrolly;
val = window.scrollX; */

// 7- Location Object.
/* val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.port;
val = window.location.search; */

// 8- Redirect window
/* window.location.href = 'www.google.com';
   window.location.reload(); */

//  Navigator Objects
/* val = window.navigator;
val = window.navigator.language;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor; */

// console.log(val);


// "var" is not a block scoop...
// "let" is a Block scoop...
// "const" is a block scoop...
