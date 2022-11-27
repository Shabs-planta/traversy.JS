// //  Create "post"...
// const posts = [
//    {title: 'Post one', body: 'This is post one'},
//    {title: 'Post two', body: 'This is post two'}
// ];


// // function for the "future post"
// function createPost(post) {
//    setTimeout(function() {
//       posts.push(post);
//    }, 2000);
// }


// // function for the "Post created".......
// function getPost() {
//    setTimeout(function() {
//       let output = '';
//       posts.forEach(function(post){
//          output += `<li>${post.title}</li>`;
//       })

//       document.body.innerHTML = output;
//    }, 1000)
// }


// // "future post"...inside it's function
// createPost({title: 'Post three', body: 'This is post three'});
// getPost();



// // ***** When you want to create a call back *****
// //  Create "post"...
// const posts = [
//    {title: 'Post one', body: 'This is post one'},
//    {title: 'Post two', body: 'This is post two'}
// ];


// // function for the "future post".
// function createPost(post, callBack) {
//    setTimeout(function() {
//       posts.push(post);
//       callBack();
//    }, 2000);
// }

// // function for the "Post created".......
// function getPost() {
//    setTimeout(function() {
//       let output = '';
//       posts.forEach(function(post){
//          output += `<li>${post.title}</li>`;
//       })

//       document.body.innerHTML = output;
//    }, 1000)
// }

// // "future post"...inside it's function
// createPost({title: 'Post three', body: 'This is post three'}, getPost);




// *****>>>>> ES6 Promises <<<<<*****
// ***** When you want to create a "Promise" *****
//  Create "post"...
const posts = [
   {title: 'Post one', body: 'This is post one'},
   {title: 'Post two', body: 'This is post two'}
];


// // function for the "future post"...and make only resolve "function".
// function createPost(post) {
//    return new Promise(function(resolve, reject){
//       setTimeout(function() {
//          posts.push(post);
//          resolve();
//       }, 2000);
//    })
// }

// function for the "future post"...and make resolve & reject "function".
function createPost(post) {
   return new Promise(function(resolve, reject){
      setTimeout(function() {
         posts.push(post);

         const error = false;
         if (!error) {
            resolve();
         }
         else {
            reject('Error: Something went wrong');
         }
      }, 2000);
   })
}


// function for the "Post created".......
function getPost() {
   setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
         output += `<li>${post.title}</li>`;
      })

      document.body.innerHTML = output;
   }, 1000)
}

// "future post"...inside it's function
createPost({title: 'Post three', body: 'This is post three'})
.then(getPost)
.catch(function(err){
   console.log(err);
});
