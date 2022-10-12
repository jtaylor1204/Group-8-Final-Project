
const taskName = document.getElementById("validationCustom01");
const taskDescription = document.getElementById("validationCustom02");
const taskConfirmation = document.getElementById("task-confirmation");
const submitBtn = document.getElementById("submit-btn");

taskConfirmation.hidden = true;

function createTask(event){
  taskConfirmation.hidden=false;
}
  submitBtn.onclick = createTask;


// function getInput(){
// let input = document.getElementById('task-confirmation');
// console.log(input); // 👉️ null
//
// if (input) {
//   input.value = 'New value';
// } else {
//   console.log('input does not exist');
// }
// }
// getInput();


// function taskName(event){
//   const newTaskName = document.getElementById('');
//   const name =  newTaskName.value;
//   alert("name: " + name);
// }
