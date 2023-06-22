import './index.css';
import {
  tasks,
  storeTasksToLocalStorage,
  deleteTask,
  editTask,
  addTask,
  sortTasks,
} from './module/taskFunctions.js';

import updateStatus from './module/statusFunctions.js';
import clearAllCompletedTasks from './module/clearTask.js';

const todoListContainer = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.querySelector('.clear-completed');

const displayTasks = () => {
  todoListContainer.textContent = '';
  tasks.forEach((task, index) => {
    todoListContainer.innerHTML += `
      <li class="task" draggable="true" data-index="${index}">
        <div class="checkbox-container">
          <input type="checkbox" name="${task.description}" $( task.completed ? 'checked' : ''
    }>
          <input type="text" value="${task.description}" readonly>
        </div>
        <i class="fas fa-ellipsis-vertical" data-index="${index}"></i>
      </li>
    `;
  });

  const addedTasks = document.querySelectorAll('.task');

  const checkboxContainers = document.querySelectorAll('.task > .checkbox-container > input[type="checkbox"]');

  checkboxContainers.forEach((checkbox) => {
    const inputText = checkbox.nextElementSibling;
    let previousState = checkbox.checked;

    inputText.readOnly = true;

    checkbox.addEventListener('change', (event) => {
      const currentState = event.target.checked;

      if (currentState !== previousState) {
        const foundTask = tasks.find(
          (task) => task.description === inputText.value,
        );
        if (foundTask) {
          foundTask.completed = currentState;
          updateStatus(tasks.indexOf(foundTask), currentState);
        }
      }

      previousState = currentState;
    });
  });

  addedTasks.forEach((task, index) => {
    const textInput = task.querySelector('input[type="text"]');
    task.addEventListener('dblclick', () => {
      textInput.readOnly = false;
      if (task.querySelector('.fa-ellipsis-vertical')) {
        const ellipsisIcon = task.querySelector('.fa-ellipsis-vertical');
        ellipsisIcon.classList.remove('fa-ellipsis-vertical');
        ellipsisIcon.classList.add('fa-trash');
        ellipsisIcon.addEventListener('click', () => {
          deleteTask(tasks, index);
          displayTasks();
        });
      } else {
        const trashIcon = task.querySelector('.fa-trash');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        textInput.readOnly = true;
      }
    });

    // Edit
    textInput.addEventListener('input', () => {
      const data = textInput.value.trim();
      editTask(data, index);
    });
  });
};

const initializeTasks = () => {
  document.addEventListener('DOMContentLoaded', displayTasks);
};

const refreshPage = () => {
  localStorage.removeItem('Tasks');
  window.location.reload();
};

clearBtn.addEventListener('click', () => {
  clearAllCompletedTasks();
  sortTasks();
  storeTasksToLocalStorage();
  displayTasks();
});

initializeTasks();
addBtn.addEventListener('click', () => {
  const inputField = document.getElementById('input-task');
  const taskDescription = inputField.value.trim();

  // Check if the task description is not empty
  if (taskDescription !== '') {
    addTask(taskDescription, tasks);
    inputField.value = '';
    displayTasks();
  }
});
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputField = document.getElementById('input-task');
    const taskDescription = inputField.value.trim();

    // Check if the task description is not empty
    if (taskDescription !== '') {
      addTask(taskDescription);
      inputField.value = '';
      displayTasks();
    }
  }
});
document
  .querySelector('.fa-arrows-rotate')
  .addEventListener('click', refreshPage);

export {};
