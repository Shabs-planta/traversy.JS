/**
 * EasyHttp Library
 * Library For Making HTTP Requests
 * 
 * @version 3.0.0
 * @author Ajide Shedrack
 * @license MIT
 * 
 **/

class EasyHttp {
   // make an HTTP Get Request, in an "Asynchronously" way...
   async get(url) {
      const response = await fetch(url);

      const resData = await response.json();
      return resData;
   }

   // Make an HTTP Post Request.
   async post(url, data) {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         
      const resData = await response.json();
      return resData;
   }

   // Make an HTTP Put Request.
   async put(url, data) {
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
               'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      
      const resData = await response.json();
      return resData;
   }

   // Make an HTTP Delete Request.
   async delete(url) {
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'content-type': 'application/json'
         },
      })

      const resData = await 'Response Deleted...';
      return resData;
   }
};