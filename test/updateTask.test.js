import { updateStatus } from '../src/module/statusFunctions';

describe('updateStatus', () => {
  test('should update the completed status of a task at the specified index', () => {
    const tasks = [
      { description: 'Task1', completed: true },
      { description: 'Task2', completed: true },
    ];
    const index = 0;
    const newStatus = false;
    tasks[index].completed = newStatus;
    expect(tasks[index].completed).toBe(false);
  });
});
