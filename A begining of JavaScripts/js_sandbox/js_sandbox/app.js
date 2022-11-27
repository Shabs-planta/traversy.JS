// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);












/*
let val;


val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.characterSet;
val = document.URL;
val = document.domain;
val = document.contentType;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[2].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsarr = Array.from(scripts);

scriptsarr.forEach(function(scripts){
   console.log(scripts.getAttribute('src'));
})



console.log(val);
*/

// SINGLE ELEMENT SELECTOR
// document.getElementById()

// console.log(document.getElementById('task-title'));
// // Get elements
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// DOM For Styling...
// document.getElementById('task-title').style.background = 'black';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '10px';
// // document.getElementById('task-title').style.display = 'none';


// // CHANGE CONTENTS
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Task';
// document.getElementById('task-title').innerHTML = '<span style="color: red;">Task List</span>';


// // THE OFFICIAL METHOD

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'black';
// taskTitle.style.color = 'white';
// taskTitle.style.padding = '10px';

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color: red;">Task List</span>';



// // QUERY SELECTOR
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.task'));
// console.log(document.querySelector('h5'));

// document.querySelector('#task-title').style.color = 'red';
// document.querySelector('li').style.background = 'blue';
// document.querySelector('li').style.color = 'white';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').textContent = 'My list';
// document.querySelector('li:nth-child(odd)').innerHTML = 'Hello World';
// document.querySelector('li:nth-child(even)').style.background = 'yellow';




// // MULTIPLE ELEMENTS SELECTION...
// // GET Element by classname
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[1]);
// items[0].style.color = 'red';
// items[4].style.background = 'yellow';
// items[4].textContent = 'Hello Developers';

// const taskList = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(taskList);



// // GET Elements by Tagname

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[1]);
// lis[0].style.color = 'red';
// lis[4].style.background = 'pink';
// lis[4].innerHTML = '<span style="color: blue;">Hello Developers</span>';


// // Convert HTML collection into Array...
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//    console.log(li.className)
//    li.textContent = `${index} List`; 
// });

// console.log(lis);

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(items, index){
//    items.textContent = `${index} List`; 
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//    li.style.background = '#ccc'; 
// });

// for(let i = 0; i < liEven.length; i++){
//    liEven[i].style.color = 'red';
// }

// console.log(liEven);


// // TRAVERSING THE DOM...
//  let val;

//  const list = document.querySelector('ul.collection');
//  const listItem = document.querySelector('li.collection-item:first-child');

//  val = list;
//  val = listItem;

// //  GET Child Nodes
//  val = list.childNodes;
//  val = list.childNodes[0];
//  val = list.childNodes[0].nodeName;
//  val = list.childNodes[0].nodeType;

// //  1 - Elements
// //  2 - Attribute (deprecated)
// //  3 - text node
// //  8 - Comment
// //  9 - document itself
// //  10 - doctype 
 
// //  GET children Element nodes
//  val = list.children;
//  val = list.children[1];
//  list.children[1].innerHTML = 'hello';
// //  Children of Children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// // First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child element
// val = list.childElementCount;

// // GET Parents Nodes
// val = list.parentNode;
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // GET next Sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.style.color = 'red';
// listItem.nextElementSibling.nextElementSibling.previousElementSibling.style.color = 'blue';

// // GET Previous Sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


// // list.children[3].children[0].onclick = function(){
// //    if (confirm('Are you sure you want to delete it.')) {
// //       val = list.children[3].style.display = 'none';
// //    }
// //    else {
// //       val = console.log(`I tried deleting ${list.children[3]}`)
// //    }
// // }
// // list.children[3].children[0].click = function(){
// //    val = list.children[3].style.display = 'none';
// // }


//  console.log(val);


// // CREATING ELEMENTS
// // Create Element...
// const li = document.createElement('li');

// // add className
// li.className = 'collection-item';
// // add id
// li.id = 'new item';
// // add attribute
// li.setAttribute('title', 'new title');
// // create a textNode and append...
// li.appendChild(document.createTextNode('Hello World'));

// // createElement...
// const list = document.createElement('a');
// // Add class
// list.className = 'delete-item secondary-content';
// // install with innerHTML.. or add icon html
// list.innerHTML = '<i class="fa fa-remove"></i>';
// // Append list to li...
// li.appendChild(list);



// // Append list to as child to task collection...
// document.querySelector('ul.collection').appendChild(li);
// li.style.color = 'blue';
// li.style.background = '#f2f2';


// console.log(li);
// console.log(list);



// // REPLACE ELEMENT...
// // creating element
// const newHeading = document.createElement('h2');
// // add id
// newHeading.id = 'task title';
// // add claseName
// newHeading.className = 'task';
// // add text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // get the oldheading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');
// // REPLACE
// cardAction.replaceChild(newHeading, oldHeading);


// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul.collection')

// // Remove item
// lis[0].textContent = 'Blue man';
// lis[0].remove();

// // Remove From list
// list.children[0].textContent = 'Red Man';
// list.children[0].remove();
// // OR 
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTE
// const firstlis = document.querySelector('li:first-child');
// let link = firstlis.children[0];

// // classes
// val = link;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList.add('good');
// val = link.classList.remove('good');
// val = link;

// // attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'BIGboy');
// val = link.getAttribute('href');
// val = link.hasAttribute('href');
// val = link.removeAttribute('href');
// val = link;



// console.log(val);
// // console.log(newHeading);

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//    console.log('Hello World');

//    // e.preventDefault()
// // })

// document.querySelector('.clear-tasks').addEventListener('click', 
// onclick)
// function onclick(e) {
//    // console.log('Confirm');

//    let val;

//    // Event Target Element...
//    val = e;
//    val = e.target;
//    val = e.target.className;
//    val = e.target.classList;
//    val = e.target.textContent = 'Hello';
//    // Event type...
//    val = e.type;
//    // Event Timestamp
//    val = e.timeStamp;
//    // coords event relative to the window...
//    val = e.clientY;
//    val = e.clientX;
//    // Coords event relative to the Element...
//    val = e.offsetY;
//    val = e.offsetX;


//    console.log(val);
// }


// // ADDEVENTLISTENER
// // Mouse event...
// const clickBtn = document.querySelector('a.clear-tasks');
// const card = document.querySelector('.card');
// const task = document.querySelector('h5');
// const lis = document.querySelectorAll('li');
// const liId = document.querySelector('li:nth-child(2)');

// // Click
// clickBtn.addEventListener('click', runEvent);
// // double click
// clickBtn.addEventListener('dblclick', runEvent);
// // mousedown
// clickBtn.addEventListener('mousedown', runEvent);
// // mouseup
// clickBtn.addEventListener('mouseup', runEvent);
// // mouseenter
// card.addEventListener('mouseenter', runEvent);
// // mouseleave
// card.addEventListener('mouseleave', runEvent);
// // mouseover
// clickBtn.addEventListener('mouseover', runEvent);
// // mouseout
// clickBtn.addEventListener('mouseout', runEvent)
// // mousemove
// card.addEventListener('mousemove', runEvent)


// function runEvent(e) {
//    console.log(`EVENT TYPE: ${e.type}`);
//    task.textContent = `CoordsY: ${e.clientY} CoordsX: ${e.clientX}`;
//    lis[3].textContent = `Mousemove: ${e.type}`;
//    liId.style.color = '#f4f';

//    document.body.style.backgroundColor = `rgb(${e.offsetY}, 60, ${e.offsetX})`;

// }




// // keyboard & Input Events
// const from = document.querySelector('form');
// const InputTask = document.getElementById('task');
// const task = document.querySelector('h5');


// // empty the value input
// InputTask.value = ' ';

// // submit from
// from.addEventListener('submit', runEvent);
// // keydown
// InputTask.addEventListener('keydown', runEvent);
// // keyup
// InputTask.addEventListener('keyup', runEvent);
// // keypress
// InputTask.addEventListener('keypress', runEvent);
// // focus
// InputTask.addEventListener('focus', runEvent);
// // blur
// InputTask.addEventListener('blur', runEvent);
// // cut
// InputTask.addEventListener('cut', runEvent);
// // paste
// InputTask.addEventListener('paste', runEvent);
// // input
// InputTask.addEventListener('input', runEvent);

// // For select tag we can use a change Event..
// Select.addEventListener('change', runEvent);


// function runEvent(e){
//    console.log(`Event Type: ${e.type}`);

//    task.textContent = e.target.value;

//    // Get input value
//    console.log(e.target.value);
//    console.log('Event Value: ' + InputTask.value);


//    // e.preventDefault():
// }



// // Event Bubbling & Delegation...
// document.querySelector('.card-action').addEventListener('click', function()
// {
//    console.log(`card-action`)
// });

// document.querySelector('.card-content').addEventListener('click', function()
// {
//    console.log(`card-content`)
// });

// document.querySelector('.card').addEventListener('click', function()
// {
//    console.log(`card`)
// });

// document.querySelector('.col').addEventListener('click', function()
// {
//    console.log(`col`)
// });


// // EVENT DELEGATION
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
// function deleteItem(e){
//    console.log('Delete Item');
// }

// document.body.addEventListener('click', deleteItem);
// function deleteItem(e){
//    // console.log(e.target.className);

//    // first check out the i tag
//    if(e.target.className === 'fa fa-remove'){
//       console.log('delete item');
//    }
//    // secondly check out the parent tag of i tag, which is the parentElement
//    if(e.target.parentElement.className === 'delete-item secondary-content'){
//       console.log('mother box');
//    }
//    // OR
//    if(e.target.parentElement.classList.contains('delete-item')){
//       e.target.parentElement.parentElement.remove();
//    }

// }

// const delItem = document.querySelector('ul.collection');
// delItem.addEventListener('click', deleteItem);
// function deleteItem(e){
//    if(e.target.parentElement.className === 'delete-item secondary-content'){
//       e.target.parentElement.parentElement.remove();
//    }
//    // OR 
//    if(e.target.parentElement.classList.contains('delete-item')){
//       e.target.parentElement.parentElement.remove();
//    }
// }



// // LOCAL AND SESSION STORAGE...
// // Set Local Storage Item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', 35);

// // Set session Storage Item
// sessionStorage.setItem('name', 'shabs');

// // Remove From Storage
// localStorage.removeItem('name');

// const nameItem = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(nameItem + ' ' + age);
// // localStorage.clear();

// const form = document.querySelector('form');


// form.addEventListener('submit', runEvent);
// function runEvent(e){
//    // const task = document.querySelector('task').value;
//    const inputItem = document.querySelector('input#task').value;
   

//    let input;

//    if (localStorage.getItem('input') === null){
//       input = [];
//    }
//    else {
//       input = JSON.parse(localStorage.getItem('input'));
//    }

//    input.push(inputItem);

//    localStorage.setItem('input', JSON.stringify(input));
//    alert('Saved in Local Storage.');
//    // localStorage.clear();
//    // console.log(inputItem);

//    e.preventDefault();
// }

// const input = JSON.parse(localStorage.getItem('input'));

// input.forEach(function(inputItem){
//    console.log(inputItem);
// })