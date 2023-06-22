import { deleteTask } from '../src/module/taskFunctions';

describe('deleteTask', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', completed: false },
    { description: 'Task3', completed: false },
  ];

  test('delete', () => {
    deleteTask(tasks, 1);
    expect(tasks.length).toBe(2);
  });
});
