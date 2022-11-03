

// Instantiaze taskManager
let taskManager = new TaskManager(0);



taskManager.load();
taskManager.render();


// Page Load
const pageContent = document.querySelector('#content');
pageContent.style.opacity = 0;

function showContentAfter1Second(){
  setTimeout(() => {
  pageContent.style.opacity = 100;
}, 1000)
};
showContentAfter1Second();

// Add a new task
const newTaskForm = document.querySelector('#form');


newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskNameInput = document.querySelector('#taskName');
    const newTaskDescription = document.querySelector('#taskDescription');
    const newTaskAssignedTo = document.querySelector('#assignedTo');
    const newTaskDueDate = document.querySelector('#dueDate');
    const newStatus = document.querySelector('#status');


    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    const status = newStatus.value;

    taskManager.addTask(name, description, assignedTo, dueDate, status);
    taskManager.save();
    taskManager.render();
    taskManager.todaysTasks();
    taskManager.allTasks();


    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
    newStatus.value = '';
});

// button event listeners
// Done Listener
const tasksList = document.querySelector('#newTaskList');
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = 'DONE';
        taskManager.save();
        taskManager.render();

    }

    // Delete Listener
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.deleteFromAllTasks(taskId);
        taskManager.deleteFromTodaysTasks();
        taskManager.save();
        taskManager.render();

    }

});




