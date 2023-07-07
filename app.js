// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const man = document.querySelector('.icons');
const theme = document.querySelector('.theme');
var bee = document.createElement('a');
var wasp = document.createElement('a')

theme.appendChild(bee);
theme.appendChild(wasp);
bee.innerHTML = '<i class = "fas fa-toggle-off dada"></i>';
wasp.innerHTML = '<i class = "fas fa-toggle-on dada"></i>';
// wasp.remove();
bee.className = 'dada';
wasp.className = 'dada';

// icons.innerHTML = '<i class = "fas fa-toggle-on dada"></i>'
// theme.appendChild(icons)


loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);  
  bee.addEventListener('click', changeThemeon);
  bee.addEventListener('click', changeThemeoff);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }
  else{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
  
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
  
    taskList.appendChild(li);
  
    taskInput.value = '';
    e.preventDefault();

    let ar = new Array(form);
    console.log(ar);
  }
}


// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) { 
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


function changeThemeon(e){
  // if(bee.innerHTML = '<i class = "fas fa-toggle-off dada"></i>'){
  //     bee.innerHTML = '<i class = "fas fa-toggle-on dada"></i>';
  //     document.body.style.backgroundColor = '#36393f'
  //     this.children[0].style.color = "white";
  //     nnn.syle.color = 'white';
  //     man.style.color = 'white';
  // } 
  // else if(bee.innerHTML = '<i class = "fas fa-toggle-on dada"></i>'){
  //     bee.innerHTML = '<i class = "fas fa-toggle-off dada"></i>'
  // } else{
  //   bee.innerHTML =  '<i class = "fas fa-toggle-off dada"></i>'
  // }

  // switch(bee.innerHTML){
  //   case '<i class = "fas fa-toggle-off dada"></i>':
  //     bee.innerHTML = '<i class = "fas fa-toggle-on dada"></i>';
  //     break;
  //   case '<i class = "fas fa-toggle-on dada"></i>':
  //     bee.innerHTML = '<i class = "fas fa-toggle-off dada"></i>';
  //     break;
  // }

    var element = document.body;
    element.classList.toggle("dark-mode");
    this.children[0].remove();
    wasp.classList.toggle('the-night');
    // man.classList.toggle('the-night');
}

function changeThemeoff(e){
    element.classList.toggle("dark-mode");
}