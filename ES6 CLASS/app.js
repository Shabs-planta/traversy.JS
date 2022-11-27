// // ***** ES6 CLASS *****
// // class Object prototype

// class person {
//    constructor(firsname, lastname, dob){
//       this.firsname = firsname;
//       this.lastname = lastname;
//       this.birthday = new Date(dob);
//    }

//    greeting(){
//       return `Hello ${this.firsname} ${this.lastname}`
//    }

//    calculateAge(){
//       const diff = new Date() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }

//    getMarried(newLastName){
//       this.lastname = newLastName;
//    }

//    static addNumbers(x, y){
//       return x + y;
//    }
// }

// const person1 = new person('Ajide', 'Shedrack', '05-12-1996');

// person1.getMarried('Nana')

// console.log(person1);
// console.log(person1.greeting());
// console.log(person1.calculateAge());
// console.log(person.addNumbers(2, 3));





// // ***** SUB CLASSES  is an inheritances*****
// class person {
//    constructor(firstName, lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
//    }

//    greeting(){
//       return `Hello ${this.firstName} ${this.lastName}.`;
//    }
// }

// class customer extends person {
//    constructor(firstName, lastName, phone, memberShip){
//       super(firstName, lastName)
//       this.phone = phone;
//       this.memberShip = memberShip;
//    }

//    static getMemberShipCost(){
//       return 500;
//    }
// }

// const customer1 = new customer('Ajide', 'Shedrack', '09090272746', 'Standard');

// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer.getMemberShipCost());