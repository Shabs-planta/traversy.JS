 // *****BOOK CONSTRUCTOR*****
function Book(title, author, isbn) {
   this.title = title;
   this.author = author;
   this.isbn = isbn;
}

// UI Constructor.
function UI() {}

// add book to list
UI.prototype.addBookToList = function(bookObj){
   // call the list UI or value
   const bookList = document.getElementById('book-list');

   // create a "tr" element
   const row = document.createElement('tr');
   // create inneHTML for the "tb"
   row.innerHTML = `
   <td>${bookObj.title}</td>
   <td>${bookObj.author}</td>
   <td>${bookObj.isbn}</td>
   <td><a class="del-item">x</a></td>
   `;
   // AppendChild to Booklist Element
   bookList.appendChild(row);

   // console.log(bookList.value);
}

// validate book list and Alert...
UI.prototype.showAlert = function(message, className){
   // create a "div"
   const div = document.createElement('div');
   // add className to div
   div.className = `alert ${className}`;
   // add message to div by creating a text node & appendChild
   div.appendChild(document.createTextNode(message));

   // call parent Element
   const container = document.querySelector('.container');
   const form = document.querySelector('#book-form');

   // inserting div
   container.insertBefore(div, form);
   // set timeout
   setTimeout(function(){
      document.querySelector('.alert').remove();
   }, 3000);
   // setTimeout('alert', 3000);

}

// delete Book List..
UI.prototype.deleteBook = function(target) {
   if (target.className === 'del-item'){
      target.parentElement.parentElement.remove();
   }
}


// ClearInput function or task
UI.prototype.clearInput = function(){
   document.getElementById('title').value = '';
   document.getElementById('author').value = '';
   document.getElementById('isbn').value = '';
}

getBooks = function() {
   let books;

      if (localStorage.getItem('books') === null) {
         books = [];
      }
      else {
         books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
}

displayBooks = function() {
   const books = getBooks();

      books.forEach(function(bookObj){
         const ui = new UI;

         // add book to "ui"
         ui.addBookToList(bookObj);
      })
}

addBookToLocalStorage = function(bookObj) {
   const books = getBooks();

   books.push(bookObj);

   localStorage.setItem('books', JSON.stringify(books));
}



// DOM load Event
document.addEventListener('DOMContentLoaded', displayBooks);



// EVENT LISTENER for add Book...
document.querySelector('#book-form').addEventListener('submit', addBook);
function addBook(e){
   // console.log('Working...');
   // ***** GET FORM VALUES *****
   const UItitle = document.getElementById('title').value,
         UIauthor = document.getElementById('author').value,
         UIisbn = document.getElementById('isbn').value;

   // instantiate book object
   const bookObj = new Book(UItitle, UIauthor, UIisbn);

   // instantiate UI
   const ui = new UI();

   

   // validate 
   if(UItitle === '' || UIauthor === '' || UIisbn === ''){
      ui.showAlert('Please fill in all fields', 'error');
   }
   else {
      // add Book to LIst
      ui.addBookToList(bookObj);

      // add local storage
      addBookToLocalStorage(bookObj);

      ui.showAlert('Added Successfully', 'success');

      // clear input
      ui.clearInput();

   }

   
   e.preventDefault();
}

// Event listener for delete...
document.querySelector('#book-list').addEventListener('click', delList);
function delList(e){
   // instantiate UI
   const ui = new UI();

   // add deleteBoot to prototype
   ui.deleteBook(e.target);

   // remove Book from "LS"
   removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

   // add Alert
   ui.showAlert('List Successfully deleted', 'success');

   e.preventDefault();
}

// Remove Book list form "LS"
removeBook = function(title) {
   const books = getBooks();


   books.forEach(function(bookObj, index){
      if (bookObj.title === title){
         books.splice(index, 1);
      }
   })

   localStorage.setItem('books', JSON.stringify(books));
}