// function Github(client_id, client_secret) {
//    this.client_id = 'd02d24c50b8a3fc9ce4a';
//    this.client_secret = '460e13fc8164a2868924334527cfa5468a952264';
//    // this.repos_count = 5;
//    // this.repos_sort = 'created: asc';
// }


// // GitHub.prototype.postUser = function(url, data, callback) {
// //    this.http.open('POST', url, true);
// //    this.http.setRequestHeader('content-type', 'application/json');

// //    let self = this;
// //    this.http.onload = function() {
// //       callback(null, self.http.responseText);
// //    }


// //    this.http.send(JSON.stringify(data));
// // }



// Github.prototype.getUser = function(user, callback) {
//    this.http.open('GET', `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, true);

//    // Make Get Request, "get request" and send "Error" if the source is error... 
//    let self = this;
//    this.http.onload = function() {
//       if(self.http.status === 200) {
//          callback(null, self.http.responseText);
//       }
//       else {
//          callback('Error: ' + self.http.status);
//       }
//    }


//    this.http.send()
// }