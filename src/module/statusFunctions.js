import { tasks, storeTasksToLocalStorage } from './taskFunctions.js';

const updateStatus = (index, completed) => {
  tasks[index].completed = completed;
  storeTasksToLocalStorage();
};

export default updateStatus;