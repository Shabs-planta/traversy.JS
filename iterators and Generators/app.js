//  ***** Iterators and Generators
   // // ? = then 
   // // : = else

//  *** Iterators: are functions that return values according to there indexes...
// // *** Iterator example...
// function nameIterator(names) {
//    let nextIndex = 0;

//    return {
//       next: function() {
//          return nextIndex < names.length ?
//          { value: names[nextIndex++], done: false} :
//          { done: true};
//       }
//    }
// }

// // create an Array for names..
// const nameArr = ['Shabs', 'Planta', 'bayo'];
// // init iterator and pass in the name Array
// const names = nameIterator(nameArr);

// // console.log(names.next());
// // console.log(names.next());
// // console.log(names.next());
// // console.log(names.next());
// // console.log(names.next().value);
// // console.log(names.next().value);
// // console.log(names.next().value);
// console.log(names.next().done);
// console.log(names.next().done);
// console.log(names.next().done);
// console.log(names.next().done);




// ***** Generators: are functions that can return multiples values

// *** Generators example...
function* saynames() {
   yield 'Shabs';
   yield 'Planta';
   yield 'Bayo';
}

const names = saynames();

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());


// Create IDs with Generators
function* createIds() {
   let nextIndex = 0;

   while(true) {
      yield nextIndex++;
   }
}

const index = createIds();

console.log(index.next().value);
console.log(index.next().value);
console.log(index.next());