// ***** PATTERNS *****
/* 
    Whats pattern?
       - its a re-usable solution that can be applied to occurring problems in software design (JAVASCRIPT Applications)

       - it can also be thought of as programming templates

       - situations vary significantly...

   
    Patterns we will look at
      - Module
      - Revealing module pattern
      - Singleton
      - Factory
      - Observer
      - Mediator
      - State
*/

//  *** Basic Structure ***
// What a Module pattern is:

// (function() {
//    // Declare private vars and functions

//    return {
//       // Declare public var and funtions
//    }
// })();


// // STANDARD MODULE PATTERN
// const UICtrl = (function(){
//    let text = 'Hello World';

//    const createText = function() {
//      const element = document.querySelector('h1');
//      element.textContent = text;
//    }

//    return {
//       callCreatedText: function() {
//          createText();
//          console.log(text);
//       }
//    }
// })();

// UICtrl.callCreatedText();

// UIctrl.createText();
// console.log(UIctrl.text);



// //      **********      REVEALING MODULE PATTERN      **********  //

// const ItemCtrl = (function(){
//    let data = [];

//    function add(item) {
//       data.push(item);
//       console.log('Item Added....');
//    }

//    function get(id) {
//       return data.find(item => {
//          return item.id === id;
//       })
//    }

//    return {
//       add: add,
//       get: get
//    }
// })();


// ItemCtrl.add({id: 1, name: 'Shabs'});
// ItemCtrl.add({id: 2, name: 'Planta'});
// console.log(ItemCtrl.get(2));



// //     *****     Singleton pattern     ******
//  const Singleton = (function() {
//    let instance;

//    const createInstance = function() {
//       const object = new Object({name: 'shabs'});

//       return object;
//    }

//    return {
//       getInstance: function() {
//          if(!instance) {
//             instance = createInstance();
//          }
//          return instance;
//       }
//    }
//  })();

//  const instanceA = Singleton.getInstance();
//  const instanceB = Singleton.getInstance();

// //  console.log(instanceA);
// // console.log(instanceA === instanceB);
// // console.log(instanceB);




// //  ***** Factory Pattern *****
// function MemberFactory() {
//    this.createMember = function(name, type) {
//       let member;

//       if(type === 'simple') {
//          member = new SimpleMembership(name);
//       } else if(type === 'standard') {
//          member = new StandardMembership(name);
//       } else if(type === 'super') {
//          member = new SuperMembership(name);
//       }

//       member.type = type;

//       member.define = function() {
//          console.log(`${this.name} (${this.type}): ${this.cost}`)
//       }

//       return member;
//    }
// }

// const SimpleMembership = function(name) {
//    this.name = name;
//    this.cost = '$5';
// }

// const StandardMembership = function(name) {
//    this.name = name;
//    this.cost = '$15';
// }

// const SuperMembership = function(name) {
//    this.name = name;
//    this.cost = '$25';
// }

// const member = [];
// const factory = new MemberFactory();

// member.push(factory.createMember('Ajide Shedrack', 'simple'));
// member.push(factory.createMember('Shabs Planta', 'standard'));
// member.push(factory.createMember('James Nana', 'simple'));
// member.push(factory.createMember('Ajide Tolulope', 'simple'));
// member.push(factory.createMember('Jack Sparow', 'simple'));

// console.log(member);
// member.forEach(function(member){
//    member.define();
// });





// //  ***** Observer Pattern *****
// //  Its best use when you want to subscribe and unsubscribe a plan
// function EventObserver() {
//    this.observers = [];
// }

// EventObserver.prototype = {
//    subscribe: function(fu) {
//       this.observers.push(fu);
//       console.log(`You have now subscribed to ${fu.name}`);
//    },
//    unsubscribe: function(fu) {
//       // Filter out from thr list Whatever matches the callback function. if there is no match, callback gets to stay on the list, the filter returns a new list and reassigns the list of observers.
//       this.observers = this.observers.filter(function(item){
//          if(item !== fu) {
//             return item;
//          }
//       });
//       console.log(`You have now Unsubscribe from ${fu.name}`);
//    },
//    fire: function(fu) {
//       this.observers.forEach(function(item) {
//          item.call();
//       });
//    }
// }

// const click = new EventObserver();

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//    click.subscribe(getCurMilliSeconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//    click.unsubscribe(getCurMilliSeconds);
// });

// document.querySelector('.sub-s').addEventListener('click', function() {
//    click.subscribe(getCurSeconds);
// });

// document.querySelector('.unsub-s').addEventListener('click', function() {
//    click.unsubscribe(getCurSeconds);
// });

// document.querySelector('.fire').addEventListener('click', function() {
//    click.fire();
// });

// // Click Handler
// const getCurMilliSeconds = function() {
//    console.log(`current Milliseconds: ${new Date().getMilliseconds()}`);
// };

// const getCurSeconds = function() {
//    console.log(`current Seconds: ${new Date().getSeconds()}`);
// };




// ***** Mediator Pattern *****
const User = function(name) {
   this.name = name;
   this.chatroom = null;
}

User.prototype = {
   send: function(message, to) {
      this.chatroom.send(message, this, to);
   },
   recieve: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}


const Chatroom = function() {
   let users = {}; // list of users

   return {
      register: function(user) {
         users[user.name] = user;
         user.chatroom = this;
      },
      send: function(message, from, to) {
         if(to) {
            // single user message
            to.recieve(message, from);
         } else {
            // mass message
            for(key in users) {
               if(users[key] !== from) {
                  users[key].recieve(message, from);
               }
            }
         }
      }
   }
}

const shabs = new User('shabs');
const planta = new User('planta');
const tolu = new User('tolu');

const chatroom = new Chatroom();

chatroom.register(shabs);
chatroom.register(planta);
chatroom.register(tolu);

shabs.send('Hello planta', planta);
planta.send('How have you guys been');
tolu.send('Please how much is bread in your area now', shabs);