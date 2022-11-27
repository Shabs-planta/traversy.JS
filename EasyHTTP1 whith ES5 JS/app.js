const http = new easyHTTP();


// >>> Asynchronously

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts); it's undefined


// >>> Synchronously 

// // to make 'post' function
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
//    console.log(posts);
// });


// // To make error "function".....err
// http.get('https://jsonplaceholder.typicode.com/posts1', 
// function(err, posts){
//    if(err){
//       console.log(err);
//    }
//    else {
//       console.log(posts);
//    }
// });



// // To make both "Error and Posts" function While been uses...
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
//    if(err){
//       console.log(err);
//    }
//    else {
//       console.log(posts);
//    }
// });


// // GET a single Post Request.
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, posts){
//    if(err){
//       console.log(err);
//    }
//    else {
//       console.log(posts);
//    }
// });


// // ***** POST REQUEST... *****
// // First Create Data.
// const data = {
//    title: 'Custom Post',
//    body: 'The custom body post'
// };

// // Second Create Post.
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
// function(err, posts){
//       if(err){
//          console.log(err);
//       }
//       else {
//          console.log(posts);
//       }
// });


// // ***** PUT REQUEST... *****
// // First Create Data.
// const data = {
//    title: 'Custom Post',
//    body: 'The custom body post'
// };

// // Second Create Post.
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
// function(err, posts){
//       if(err){
//          console.log(err);
//       }
//       else {
//          console.log(posts);
//       }
// });


// // ***** DELETE REQUEST... *****
// // to make 'Delete' function without no else..
// http.delete('https://jsonplaceholder.typicode.com/posts/1', 
// function(Responses){
//    console.log(Responses);
// });

// To make both "Error and Delete" function While been uses...
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, posts){
   if(err){
      console.log(err);
   }
   else {
      console.log(posts);
   }
});
