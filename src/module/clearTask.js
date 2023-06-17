import { tasks, storeTasksToLocalStorage } from './taskFunctions.js';

const clearAllCompletedTasks = () => {
  const filteredTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...filteredTasks);
  storeTasksToLocalStorage();
};

export default clearAllCompletedTasks;
