import { addTask } from '../src/module/taskFunctions';

describe('addTask', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', compeleted: false },
    { description: 'Task3', compeleted: false },
  ];

  test('add', () => {
    addTask('tasks', tasks);
    expect(tasks.length).toBe(4);
  });
});
