import { addTask } from '../src/module/taskFunctions';

describe('addTask', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', compeleted: false },
    { description: 'Task3', compeleted: false },
  ];

  test('add', () => {
    const addTaskTo = { description: 'Task4', completed: false };
    const newTask = addTask(tasks, addTaskTo);

    expect(newTask).toHaveLength(4);
    expect(newTask[3]).toEqual(addTask);
  });
});
