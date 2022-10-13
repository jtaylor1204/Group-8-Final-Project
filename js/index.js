// DOM Elements
const form = document.getElementById("form");
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const taskAssignedTo = document.getElementById("assignedTo");
const dueDate = document.getElementById("dueDate");
const status = document.getElementById("status");

// Submit Event Listener
form.addEventListener('submit' , (e) => {
  e.preventDefault();
  if(validFormFieldInput()){
    const task = new TaskManager(0);
    task.addTask("Wash Dishes", "Wash dishes before dinner","Jaida", "10-22-2022");
  }
});

// Validate Data function
function validFormFieldInput(data){
  // get the values from the inputs
  const taskValue = taskName.value.trim();
  const descriptionValue = taskDescription.value.trim();
  const assignedValue = taskAssignedTo.value.trim();
  const dueDateValue = dueDate.value.trim();
  const statusValue = status.value.trim();
}
// validFormFieldInput();

// Initialize new task
const task = new TaskManager(0);
task.addTask("Wash Dishes", "Wash dishes before dinner","Jaida", "10-22-2022");
