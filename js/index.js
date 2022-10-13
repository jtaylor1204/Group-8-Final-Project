const newTask = new TaskManager(0);
let submitButton = document.getElementById("button");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
let taskAssignedTo = document.getElementById("assignedTo");
let dueDate = document.getElementById("dueDate");
let status = document.getElementById("status");



function validFormFieldInput(data){
  // get the values from the inputs

}

// Submit Event Listener
submitButton.addEventListener('click' , (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  let taskValue = taskName.value.trim();
  let descriptionValue = taskDescription.value.trim();
  let assignedValue = taskAssignedTo.value.trim();
  let dueDateValue = dueDate.value.trim();
  let statusValue = status.value.trim();

  let taskHtml = createTaskHtml(
    taskValue,
    descriptionValue,
    assignedValue,
    dueDateValue,
    statusValue,
  );

  if (
      taskValue === '' ||
      descriptionValue === '' ||
    assignedValue === '' ||
      dueDateValue === '' ||
      statusValue === ''
    ) {
      alert('please complete required fields')

    }
    //if form has values call the addTask method and render method to see new task
    else {
      newTask.addTask(
        taskValue,
        descriptionValue,
        assignedValue,
        dueDateValue,
        statusValue
      );
      newTask.render;
      newTask.save;
      taskValue = '';
    descriptionValue = '';
      assignedValue = '';
      dueDateValue = '';
      statusValue = '';

  }
});
