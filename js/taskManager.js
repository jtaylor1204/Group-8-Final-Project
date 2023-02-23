

// task html
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <br>
    <li class="list-group-item task-style task-bg" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'To-Do' ? 'badge badge-danger' : status === 'In Progress' ? 'badge badge-warning'
                    : status === 'In Review' ? 'badge badge-info': 'badge badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-end btns">
            <button class="btn-background btn btn-outline-success done-button mr-1 ${status === 'DONE' ? 'invisible' : 'visible'}">Mark As Done</button>
            <button class="btn-background btn btn-outline-danger delete-button">Delete</button>
        </div>
    </li>
    <br>
`;

// task manager
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate, status = "TO-DO") {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,

    };

    this.tasks.push(task);
  }

  //  deleteTask method
  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }
  // get task by id method
  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }
  // render method
  render() {
    const tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const date = new Date(task.dueDate);
      const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + (date.getDate() + 1)).slice(-2)}/${date.getFullYear()}`;
      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
      // console.log('this is the task due date' + task.dueDate)
    }
    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.querySelector('#newTaskList');
    tasksList.innerHTML = tasksHtml;
    if(tasksHtml=== ''){
      tasksList.classList.add("addTask");
      tasksList.innerHTML = 'Add a Task!';
    } else {
      tasksList.classList.remove("addTask");
    }
  }
  // Today Task Box
  todaysTasks() {
    let todaysTasks = [];
    const today = new Date();
    let todaysDate = today.getDate();
    const todaysFormattedDate = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + (todaysDate)).slice(-2)}`;
    let todayTasksBox = document.querySelector('#today-tasks');
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      // console.log('this is todays date' + todaysFormattedDate)
      if (todaysFormattedDate === task.dueDate) {
          todaysTasks.push(task);
        todayTasksBox.textContent = todaysTasks.length; 
      }
      
    }
  };

  deleteFromTodaysTasks(){
    let deletedTodayTasks = [];
    let todayTasksBox = document.querySelector('#today-tasks');
    const today = new Date();
    let todaysDate = today.getDate();
    const todaysFormattedDate = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + (todaysDate)).slice(-2)}`;;
    
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];    
      if (todaysFormattedDate === task.dueDate) {
        deletedTodayTasks.push(task);
        todayTasksBox.textContent = deletedTodayTasks.length;
      }
  }
  };

  // All Tasks Box
  allTasks() {
    let allTasksBox = document.querySelector('#all-tasks');
    for (let i = 0; i < this.tasks.length; i++) {
      allTasksBox.textContent = this.tasks.length;
    }
  };

  deleteFromAllTasks(taskId){
    let allTasksBox = document.querySelector('#all-tasks');
    
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      // let allTasksList = this.tasks.length;
      if (task.id !== taskId) {
        allTasksBox.textContent= this.tasks.length;
      }
      }
    }

    clearBoxes(){
      let todayTasksBox = document.querySelector('#today-tasks');
      let allTasksBox = document.querySelector('#all-tasks');  
      let tasksList = document.querySelector('#newTaskList');
     if(tasksList.innerHTML= 'Add a Task!'){
          todayTasksBox.textContent = 0;
          allTasksBox.textContent= 0;
        }
    }
  


  // Save tasks to local storage
  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = String(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  // load tasks
  load() {
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = Number(currentId);
    }
  }
};

//   loadContentAfter2Seconds(){
//
//       return new Promise(resolve => {
//         setTimeout(() => {
//         	 resolve(pageContent);
//         }, 2000);
//       });
//     }
//     async function asyncCall() {
//       const result = await showContentAfter2Seconds();
//       document.body.innerHTML = result;
//     }
// };
