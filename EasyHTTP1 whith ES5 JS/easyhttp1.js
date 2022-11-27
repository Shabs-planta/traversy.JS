// ***** ES5 Class *****
function easyHTTP() {
   this.http = new XMLHttpRequest();
}

// Make an Http "GET" Request
easyHTTP.prototype.get = function(url, callback) {
   this.http.open('GET', url, true);

   // // Make Get Request, "get request" only...
   // let self = this;
   // this.http.onload = function() {
   //    if(self.http.status === 200) {
   //       callback(self.http.responseText);
   //    }
   // }

   // Make Get Request, "get request" and send "Error" if the source is error... 
   let self = this;
   this.http.onload = function() {
      if(self.http.status === 200) {
         callback(null, self.http.responseText);
      }
      else {
         callback('Error: ' + self.http.status);
      }
   }


   this.http.send()
} 


// Make an Http "POST" Request
easyHTTP.prototype.post = function(url, data, callback) {
   this.http.open('POST', url, true);
   this.http.setRequestHeader('content-type', 'application/json');

   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
   }


   this.http.send(JSON.stringify(data));
}


// Make an Http "PUT" Request
easyHTTP.prototype.put = function(url, data, callback) {
   this.http.open('PUT', url, true);
   this.http.setRequestHeader('content-type', 'application/json');

   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
   }


   this.http.send(JSON.stringify(data));
}


// Make an Http "DELETE" Request
easyHTTP.prototype.delete = function(url, callback) {
   this.http.open('DELETE', url, true);

   // // Make Delete Request, "Delete request" only...
   // let self = this;
   // this.http.onload = function() {
   //    if(self.http.status === 200) {
   //       callback('Response Deleted');
   //    }
   // }

   // Make Delete Request, "Delete request" and send "Error" if the source is error... 
   let self = this;
   this.http.onload = function() {
      if(self.http.status === 200) {
         callback(null, 'Response Deleted');
      }
      else {
         callback('Error: ' + self.http.status);
      }
   }


   this.http.send()
} 