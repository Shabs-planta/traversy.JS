// <!-- ***** GET DATA POST ***** -->

// // create EVent listener
// document.querySelector('#button').addEventListener('click', loadData);
// function loadData() {

//    // create an XHR object
//    const xhr = new XMLHttpRequest();

//    // OPEN
//    xhr.open('GET', 'data.txt', true);

//    // console.log('READYSTATE', xhr.readyState);

//    // optional - used for Spinners/loader
//    xhr.onprogress = function(){
//       console.log('READYSTATE', xhr.readyState);
//    }

//    xhr.onload = function(){
//       // console.log('READYSTATE', xhr.readyState);
//       if(this.status === 200){
//          // console.log(this.responseText);
//          document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//       }
//    }

   // xhr.onreadystatechange = function() {
   //    if(this.status === 200 && this.readyState === 4) {
   //       console.log(this.responseText);
   //    }
   // }

   // xhr.onerror = function() {
   //    console.log('Request error...')
   // }

   // xhr.send();


   //// readstate value
   // - 0: request not initialized
   // - 1: server connection established
   // - 2: request received
   // - 3: processing request
   // - 4: request finished and response is ready

   //// HTTP statuses
   // - 100: "continue"
   // - 101: "Switching Protocols"
   // - 102: "processing"
   // - 200: "OK"
   // - 403: "FORBIDDEN"
   // - 404: "Error"
   // - "NOT FOUND"
// }



// // GET CUSTOMER AND CUSTOMERS IDs or INFOs...

// create event listeners
document.querySelector('#button1').addEventListener('click', loadCustomer);
document.querySelector('#button2').addEventListener('click', loadCustomers);


// load customer Event
function loadCustomer(e) {
   const xhr = new XMLHttpRequest;

   xhr.open('GET', 'customer.json', true);

   xhr.onload = function() {
      if(this.status === 200){
         // console.log(this.responseText);
         const customer = JSON.parse(this.responseText);
         const output = `
         <ul>
           <li>ID: ${customer.id}</li>
           <li>NAME: ${customer.name}</li>
           <li>COMPANY: ${customer.company}</li>
           <li>PHONE: ${customer.phone}</li>
         </ul>
         `;

         document.getElementById('customer').innerHTML = output;
      }
   }

   xhr.send();
}


// load customers Event
function loadCustomers(e) {
   const xhr = new XMLHttpRequest;

   xhr.open('GET', 'customers.json', true);

   xhr.onload = function() {
      if(this.status === 200){
         // console.log(this.responseText);
         const customers = JSON.parse(this.responseText);
         
         let output =  ``;

         customers.forEach(function(customer) {
            output += `
         <ul>
           <li>ID: ${customer.id}</li>
           <li>NAME: ${customer.name}</li>
           <li>COMPANY: ${customer.company}</li>
           <li>PHONE: ${customer.phone}</li>
         </ul>
         `;
         })

         document.getElementById('customers').innerHTML = output;
      }
   }

   xhr.send();
}




// // // Chuck Norris Joke Generator "JAVASCRIPTS"...
// // create event listener
// document.getElementById('get-joke').addEventListener('click', loadJoke);
// function loadJoke(e){
   
//    const number = document.querySelector('input[type="number"]').value;

//    const xhr = new XMLHttpRequest();
//    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//    xhr.onload = function(){
//       if (this.status === 200){
//          const response = JSON.parse(this.responseText);
         
//          let output = '';

//          if (response.type === 'success'){
//             response.value.forEach(function(joke){
//                output += `<li>${joke.joke}</li>`;
//             });
//          }
//          else {
//             output += `<li>Something went wrong</li>`;
//          }

//          document.querySelector('.jokes').innerHTML = output;

//       }
//    }

//    xhr.send();


//    // console.log(number);

//    e.preventDefault();
// }