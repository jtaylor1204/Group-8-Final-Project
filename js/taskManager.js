class TaskManager{
  constructor(currentID = 0){
    this.currentID = currentID;
    this.tasks =[];
  }
  addTask(name, description, assignedTo, dueDate){
    const task = {
      id: this.currentID++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "To-do"
    }
    this.tasks.push(task);

}
}
