// Getting Text With "FETCH"

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// // get local "text.tnt" Data...
// function getText() {
//    fetch('text.tnt')
//     .then(function(res){
//       return res.text();
//    })
//    .then(function(data){
//       console.log(data);
//       document.getElementById('output').innerHTML = `<li>${data}</li>`;
//    })
//    .catch(function(err){
//       console.log(err);
//    })
// };


// // get local "post.Json" Data...
// function getJson() {
//    fetch('post.json')
//    .then(function(res){
//       console.log(res)
//       return res.json();
//    })
//    .then(function(data){
//       console.log(data);
//       let output = '';
//       data.forEach(function(post){
//          output += `
//           <li>${post.title}</li>
//          `;
//       })
//       console.log(output);
//       document.getElementById('output').innerHTML = output;
//    })
//    .catch(function(err){
//       console.log(err);
//    })
// }


// // get from External API Data...
// function getExternal() {
//    fetch('https://api.github.com/users')
//    .then(function(res){
//       return res.json();
//    })
//    .then(function(data){
//       console.log(data);
//       let output = '';
//       data.forEach(function(user){
//          output += `
//           <li>${user.login}</li>
//          `;
//       })
//       // console.log(output);
//       document.getElementById('output').innerHTML = output;
//    })
//    .catch(function(err){
//       console.log(err);
//    })
// }




// //    ***** CS6 ARROW FUNCTION *****     <<<<<
// get local "text.tnt" Data...
function getText() {
   fetch('text.tnt')
    .then( res => res.text())
   .then( data => document.getElementById('output').innerHTML = `${data}`)
   .catch( err => console.log(err))
};


// get local "post.Json" Data...
function getJson() {
   fetch('post.json')
   .then( res => res.json())
   .then( data => {
      console.log(data);
      let output = '';
      data.forEach(function(post){
         output += `
          <li>${post.title}</li>
         `;
      })
      console.log(output);
      document.getElementById('output').innerHTML = output;
   })
   .catch(err => console.log(err));
}


// get from External API Data...
function getExternal() {
   fetch('https://api.github.com/users')
   .then(res => res.json())
   .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user){
         output += `
          <li>${user.login}</li>
         `;
      })
      // console.log(output);
      document.getElementById('output').innerHTML = output;
   })
   .catch( err => console.log(err))
}







// Error Handling with Fetch...

fetch('https://api.github.com/users').then(res => res.json)
.then(res => {
   if (!res.ok) {
      throw new Error(res.error);
   }
   return res;
}).catch(err => console.log(err));


// I would suggest creating a separate fuction for error handling

function handleError(res) {
   if (!res.ok) {
      throw new Error(res.error);
   }
   return res;
}

fetch('post.json').then(function(res){
   return res.json()
}).then(handleError).then(function(res){
   console.log(res.data);
}).catch(function(err){
   console.log(err);
});


// fetch('post.json')
// .then(function(res){
//    console.log(res);
//    return res.json();
// }).then(function(data){
//    console.log(data)
//    let output = '';
//    data.forEach(function(post){
//       output += `
//        <li>${post.body}</li>
//       `;
//    })
//    console.log(output);
// });





//     ***    ARROW FUNCTION...   ***

// const sayHello = function() {
//    console.log('Hello');
// }

// const sayHello = () => {
//    console.log('Hello');
// }


// // ***** ONE LINE FUNCTIONS DOES NOT NEED BRACES
// const sayHello = () => console.log('Hello Man')

// // ***** ONE LINE FUNCTION FOR "RETURN FUNcTION"
// const sayHello = () => 'Hello';

// // ***** SAME AS ABOVE
// const sayHello = function() {
//    return 'Hello Above';
// }

// //  ***** ONE LINE FUNCTION FOR AN OBJECT
// const sayHello = () => ({msg: 'Hello Shabs'});

// // SINGLE PARAM WITH PARENTHESIS...
// const sayHello = (name) => console.log(`Hello ${name}`)

//// SINGLE PARAM DOES NOT NEED PARENTHESIS...
// const sayHello = name => console.log(`Hello ${name}`);

//// MULTUIPLE PARAMs NEED PARENTHESIS...
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

// // Call Back FUNCTION...
const users1 = ['human', 'animal', 'plants'];
users1.push('Gangster');
users1.unshift(['name', 'place', 'things']);
users1.pop();
users1.shift();

// const nameLength = users1.map(function(list){
//    return list.length;
// });

// // SHORTER...
// const nameLength = users1.map((list) => {
//   return list.length;
// })

// // SHORTEST...
const nameLength = users1.map(list => list.length);



// sayHello();
// console.log(sayHello());
// let post = sayHello('Shabs', 'Planta');
// document.querySelector('.output1').innerHTML = post;

console.log(nameLength);
document.querySelector('.output1').innerHTML = nameLength;
