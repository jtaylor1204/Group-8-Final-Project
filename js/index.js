// Initialize Task Manager
const newTask = new TaskManager(0);


// DOM Elements
const form = document.getElementById("form");
const taskConfirmation = document.getElementById("newTaskList")
let submitButton = document.getElementById("button");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
let taskAssignedTo = document.getElementById("assignedTo");
let dueDate = document.getElementById("dueDate");
let status = document.getElementById("status");
let input = document.querySelectorAll("#taskName, #taskDescription, #assignedTo, #dueDate, #status");
let alert = document.getElementById('alert');

taskConfirmation.hidden= true;
alert.style.display = 'none';

// let taskHtml = createTaskHtml("wash dishes", "wash before dinner", "Jaida", "10-22-2022", "TODO");
// console.log(taskHtml);

// Validate Data function
function validFormFieldInput(data) {
  // get the values from the inputs
  return
  taskName.value.trim();
  taskDescription.value.trim();
  taskAssignedTo.value.trim();
  dueDate.value.trim();
  status.value.trim();
}
validFormFieldInput();

// Submit Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(taskName.value === ''|| taskDescription.value === ''|| taskAssignedTo.value === ''){
    alert.style.display = 'block';
    //Remove alert after one second
    setTimeout(() => {
      alert.style.display = 'none';
    }, 1000);
  } else {
  newTask.addTask(taskName.value.trim(),
    taskDescription.value.trim(),
    taskAssignedTo.value.trim(),
    dueDate.value.trim(),
    status.value.trim());
    newTask.render();
    taskConfirmation.hidden=false;
    input.forEach(input =>{
      input.value=" ";
    })
    }
});
