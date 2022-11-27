// const brad = {
//    UIname: 'Shabs',
//    UIage: 26
// };

// console.log(brad);

// // person constructor 
// function Person() {
//    this.ELname = 'Planta';
// }

// const planta = new Person();
// const bayo = new Person();


// console.log(bayo);

// // person constructor 
// function People(name, dob) {
//    this.ELname = name;
//    // this.ELage = age;
//    this.birthday = new Date(dob);
//    this.calculateAge = function(){
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getFullYear() - 1970);
//    }

//    // console.log(this)
// }

// // const james = new People('James', 29);
// // const nana = new People('Nana', 27);


// const james = new People('James', '12-05-1996');
// console.log(james.calculateAge());


// // *****string*****
// const name1 = 'jeff';
// const name2 = new String('jeff');

// // name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if (name2 === 'jeff') {
//    console.log('YES');
// }
// else{
//    console.log('NO')
// }

// // numbers
// const num1 = 30;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // function 
// const sumNum1 = function(x, y){
//    console.log(x + y);
// }
// const sumNum2 = new function(x, y){
//    console.log(x + y);
// }
// // const sumNum3 = new function('x', 'y', 'return 2 + 3')

// // object 
// const shabs1 = {name: 'Shabs'};
// const shabs2 = new Object({name: 'Shedrack'});

// // Array
// const bayo1 = [1,2,3,4,5];
// const bayo2 = new Array(1,2,3,4,5);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);



// // *****PROTOTYPE EXPRESSION*****
 
// // object Prototype...

// // person constructor // person prototype...
// function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.birthday = new Date(dob);
//    // this.calculateAge = function(){
//    //    const diff = Date.now() - this.birthday.getTime();
//    //    const ageDate = new Date(diff);
//    //    return Math.abs(ageDate.getUTCFullYear() - 1970);
//    // }
// }
// // Calculate Age
// Person.prototype.calculateAge = function(){
//    const diff = Date.now() - this.birthday.getTime();
//    const ageDate = new Date(diff);
//    return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // get Full name
// Person.prototype.getFullName = function(){
//    return `${this.firstName} ${this.lastName}`;
// }

// // GEt married
// Person.prototype.getMarried = function(newLastName){
//    this.lastName = newLastName;
// }



// const john = new Person('john', 'nana', '6-12-96');
// const chalie = new Person('shabs', 'planta', '11-03-2000');

// console.log(john);
// console.log(john.calculateAge());
// console.log(chalie.getFullName());

// chalie.getMarried('Ajide');
// console.log(chalie.getFullName());

// console.log(chalie.hasOwnProperty('firstName'));
// console.log(chalie.hasOwnProperty('newLastName'));



// // *****PROTOTYPAL INHERITANCES*****
// // create a Person prototype.

// function Person(firstName, lastName){
//    this.firstName = firstName;
//    this.lastName = lastName;
// }

// // Greeting prototype
// Person.prototype.greeting = function(){
//    return `Hello ${this.firstName} ${this.lastName}`;
// }

// const mrWale = new Person('Ajide', 'Shedrack');

// console.log(mrWale.greeting());

// // Customer constructor...
// function Customer(firstName, lastName, phone, memberShip){
//    Person.call(this, firstName, lastName);

//    this.phone = phone;
//    this.memberShip = memberShip;
// }

// // greeting prototype for Customer constructor.
// Customer.prototype = Object.create(Person.prototype);
// // Make customer prototype return customer;
// Customer.prototype.constructor = Customer;


// const Customer1 = new Customer('James', 'Nana', '09090272746', 'Standard');

// console.log(Customer1);

// // OR create a New greeting prototype to Override.
// Customer.prototype.greeting = function(){
//    return `Hello ${this.firstName} ${this.lastName}, Welcome to SPcocktails.`
// }

// console.log(Customer1.greeting());




// // *****USING OBJECT.CREATE*****

// // create object prototype
// const personPrototypes = {
//    Greeting: function(){
//       return `Hello ${this.firstName} ${this.lastName}`;
//    },
//    getMarried: function(newLastname){
//       this.lastName = newLastname;
//    }
// }

// // first way of using the "OBJECT.CREATE"
// const person1 = Object.create(personPrototypes);
// person1.firstName = 'Ajide';
// person1.lastName = 'Shedrack';
// person1.age = 26;

// person1.getMarried('Nana');

// console.log(person1.Greeting());


// // Second way of using "OBJECT.CREATE"...
// const person2 = Object.create(personPrototypes, {
//    firstName: {value: 'Shabs'},
//    lastName: {value: 'Planta'},
//    age: {value: 26}
// });

// console.log(person2);
// console.log(person2.Greeting())


