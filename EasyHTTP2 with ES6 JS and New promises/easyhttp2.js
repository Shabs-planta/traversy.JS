/**
 * EasyHttp Library
 * Library For Making HTTP Requests
 * 
 * @version 2.0.0
 * @author Ajide Shedrack
 * @license MIT
 * 
 **/

class EasyHttp {
   // // Make an HTTP Get Request.
   // get(url) {
   //    fetch(url)
   //    .then(res => res.json())
   //    .then(data => console.log(data))
   //    .catch(err => console.log(err));
   // }

   // make an HTTP Get Request, in an "Asynchronously" way...
   get(url) {
      return new Promise((resolve, reject) => {
         fetch(url)
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
         })
   }

   // Make an HTTP Post Request.
   post(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
         })
   }

   // Make an HTTP Put Request.
   put(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'PUT',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
         })
   }

   // Make an HTTP Delete Request.
   delete(url) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'DELETE',
            headers: {
               'content-type': 'application/json'
            },
         })
         .then(res => res.json())
         .then(() => resolve('Resources Deleted...'))
         .catch(err => reject(err));
         })
   }
};