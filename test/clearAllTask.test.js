describe('clearAllCompleted', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', completed: true },
    { description: 'Task3', completed: false },
  ];

  test('clear all completed tasks from the list', () => {
    const newArray = tasks.filter((task) => !task.completed);
    expect(newArray.length).toBe(2);
  });
});
