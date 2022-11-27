// function myFunc() {
//    return 'Hello There';
// }

// console.log(myFunc());


// async function myFunc() {
//    return 'Hello There';
// }

// myFunc().then(res => console.log(res));


// // // ES7 NEW PROMISE WITHOUT ERROR FUNCTION
// async function myFunc() {
//    const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('Hello World')
//       }, 2000)
//    })

//    const res = await promise;
//    return res;
// }

// myFunc().then(res => console.log(res));


// // // ES7 NEW PROMISE WITH ERROR FUNCTION
// async function myFunc() {
//    const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('Hello World')
//       }, 2000)
//    })

//    const error = true;
//    if (!error){
//       const res = await promise;
//       return res;
//    }
//    else {
//       await promise.reject(new Error('Something Went Wrong...'))
//    }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));



// // ES7 NEW PROMISE WITH ERROR FUNCTION
async function getData() {
   // Await Users of the Fetch Call...
   const users = await fetch('https://jsonplaceholder.typicode.com/users');
   // Await proceed once its resolved..
   const data = await users.json();
   // Only proceed once Second Promise is resolved...
   return data;
};

getData().then(users => console.log(users));