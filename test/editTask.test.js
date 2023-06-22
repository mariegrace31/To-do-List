import { editTask } from '../src/module/taskFunctions';

describe('editTask', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', completed: false },
    { description: 'Task3', completed: false },
  ];

  test('edit task description', () => {
    const newIndex = 0;
    const newDescription = 'Updated Task2';
    editTask(tasks, newDescription, newIndex);
    expect(tasks[newIndex].description).toBe(newDescription);
  });
});
