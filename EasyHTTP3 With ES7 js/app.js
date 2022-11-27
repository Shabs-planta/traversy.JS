const http = new EasyHttp;

// // Get Users
// // // Get Users in "Asynchronously" way...

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data));


// // POST User data...
// const data = {
//    name: 'ajide shedrack',
//    username: 'shabsplanta',
//    email: 'ajshpl@gmail.com'
// }

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// // PUT User data...
// const data = {
//    name: 'ajide shedrack',
//    username: 'shabsplanta',
//    email: 'ajshpl@gmail.com'
// }

// // UPdate Put data
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));



// Delete User data...
const data = {
   name: 'ajide shedrack',
   username: 'shabsplanta',
   email: 'ajshpl@gmail.com'
}

// delete user...
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
// .catch(err => console.log(err));