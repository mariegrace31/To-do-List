const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];

const storeTasksToLocalStorage = () => {
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

const sortTasks = () => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, newIndex) => {
    task.index = newIndex + 1;
  });
  sortTasks();
  storeTasksToLocalStorage();
};

const editTask = (description, index) => {
  tasks[index].description = description;
  storeTasksToLocalStorage();
};

const addTask = (taskDescription) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1, // Set the index as array length + 1
  };
  tasks.push(newTask);
  storeTasksToLocalStorage();
};

export {
  tasks, storeTasksToLocalStorage, deleteTask, editTask, addTask, sortTasks,
};