let createTaskHtml = (name, description, assignedTo, dueDate, status)=>{
  const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
    `;
    return html;
}

class TaskManager{
  constructor(currentID = 0){
    this.currentID = currentID;
    this.tasks =[];
  }
  addTask(name, description, assignedTo, dueDate, status = 'TO-DO'){
    let task = {
      id: this.currentID++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push(task);

  }
};
  render = () => {
  let tasksHtmlList =[];
  for (let i = 0; i < this.tasks.length; i++) {
    const task = this.tasks[i];
    const date = new Date(task.dueDate);
    const formattedDate = `${date.getMonth()}/${
      date.getDate() + 1
    }/${date.getFullYear()}`;
    let taskHtml = createTaskHtml(
      task.name,
      task.description,
      task.assignedTo,
      formattedDate,
      task.status,
      task.currentID
    );
    tasksHtmlList.push(taskHtml);
  }
  let tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.getElementById('newTaskList');
    tasksList.innerHTML = tasksHtml;
  };
