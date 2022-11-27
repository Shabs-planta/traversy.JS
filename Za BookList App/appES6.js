// Book class contractor
class Book {
   constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

// UI class 
class UI {
   // Add to list
   addBookToList(bookObj) {
      // call the list UI or value
      const bookList = document.getElementById('book-list');

      // create a "tr" element
      const row = document.createElement('tr');
      // create inneHTML for the "tb"
      row.innerHTML = `
      <td>${bookObj.title}</td>
      <td>${bookObj.author}</td>
      <td>${bookObj.isbn}</td>
      <td><a class="delete-item">x</a></td>
      `;
      // AppendChild to Booklist Element
      bookList.appendChild(row);
   }

   showAlert(message, className) {
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
   }

   deleteBook(target) {
      if (target.className === 'delete-item'){
         target.parentElement.parentElement.remove();
      }
   }

   clearInput() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
   }
}

class store {
   static getBooks() {
      let books;

      if (localStorage.getItem('books') === null) {
         books = [];
      }
      else {
         books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
   }

   static displayBooks() {
      const books = store.getBooks();

      books.forEach(function(bookObj){
         const ui = new UI;

         // add book to "ui"
         ui.addBookToList(bookObj);
      })
   }

   static addBook(bookObj) {
      const books = store.getBooks();

      books.push(bookObj);

      localStorage.setItem('books', JSON.stringify(books));
   }

   // Remove bookList for "LS"
   static removeBook(isbn) {
      let books = store.getBooks();

      books.forEach(function(bookObj, index){
         if (bookObj.isbn === isbn){
            books.splice(index, 1);
         }
      })

      localStorage.setItem('books', JSON.stringify(books));
   }

}

// DOM load Event
document.addEventListener('DOMContentLoaded', store.displayBooks);


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
      store.addBook(bookObj);

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
   store.removeBook(e.target.parentElement.previousElementSibling.textContent);

   // add Alert
   ui.showAlert('List Successfully deleted', 'success');

   e.preventDefault();
}