// Define UI Vars...
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.getElementById('filter');
const clearBtn = document.querySelector('a.clear-task');
const taskList = document.querySelector('.collection');
// const cardAction = document.querySelector('.card-action')

// Call a function load EventListeners..
loadEventListener();

// Load all event listeners...
function loadEventListener() {
   // DOM event listner..
   document.addEventListener('DOMContentLoaded', getTask);
   // Add Task Event
   form.addEventListener('submit', addTask);

   // USing Event Delegation to delete li Element
   taskList.addEventListener('click', deleteItem);

   // USing clearBtn 
   clearBtn.addEventListener('click', clearTasks);

   // add filter
   filter.addEventListener('keyup', filterTasks);
   
}
// Get Task from LS
function getTask(){
   let tasks;

   if (localStorage.getItem('tasks') === null){
      tasks = [];
   }
   else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   // create a loop
   tasks.forEach(function(task){

      // Create "li" Element...
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // create a test node and append...
      li.appendChild(document.createTextNode(task));
      // Create an a tag
      const link = document.createElement('a');
      // Add CLassName
      link.className = 'delete-item secondary-content';
      // Add InnerHTML
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // append link
      li.appendChild(link);
      // tasklist append li
      taskList.appendChild(li);

   })
}

function addTask(e) {
   if(taskInput.value === '') {
      alert('Fill New Task');
      li.value = '';
   }

   // Create "li" Element...
   const li = document.createElement('li');
   // Add class
   li.className = 'collection-item';
   // create a test node and append...
   li.appendChild(document.createTextNode(taskInput.value));
   // Create an a tag
   const link = document.createElement('a');
   // Add CLassName
   link.className = 'delete-item secondary-content';
   // Add InnerHTML
   link.innerHTML = '<i class="fa fa-remove"></i>';
   // append link
   li.appendChild(link);
   // tasklist append li
   taskList.appendChild(li);

   // Store Task to local storage...
   storeTaskInLocalStorage(taskInput.value);
   
   // clear taskinput value...
   taskInput.value = '';

   e.preventDefault();
}

// store task...
function storeTaskInLocalStorage(task){
   let tasks;

   if (localStorage.getItem('tasks') === null){
      tasks = [];
   }
   else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.push(task);
   localStorage.setItem('tasks', JSON.stringify(tasks));
   // alert('New task saved to localStorage');
}


function deleteItem(e){
   if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('Are you sure!')) {
         e.target.parentElement.parentElement.remove();

      // remove form LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
      // console.log(e.target)
   }
}

// Remove form LS
function removeTaskFromLocalStorage(taskList) {
   let tasks;

   if (localStorage.getItem('tasks') === null){
      tasks = [];
   }
   else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task, index){
      if(taskList.textContent === task){
         tasks.splice(index, 1);
      }
   });

   localStorage.setItem('tasks', JSON.stringify(tasks));
}


function clearTasks(){
   // taskList.innerHTML = '';

   // OR
   while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
   }

   // OR
   // if (e.target.className === 'clear-task btn black'){
   //    if (confirm('Are you sure')){
   //       e.target.previousElementSibling.remove();
   //    }
   // }

   // clearTAsk form LS
   clearTasksFromLocalStorage();
}

// clearTAsk form LS
function clearTasksFromLocalStorage(){
   localStorage.clear();
}

// filter tasks
function filterTasks(e){
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach(
      function(task){
         const item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
         }
         else {
            task.style.display = 'none';
         }
      }
   );
}


