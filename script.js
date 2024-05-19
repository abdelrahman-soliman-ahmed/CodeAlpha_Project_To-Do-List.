// Select the task input field element
const taskInput = document.getElementById('taskInput');

// Select the add task button element
const addTask = document.getElementById('addTask');

// Select the task list element
const taskList = document.getElementById('taskList');

// Select the task counter element
const taskCounter = document.getElementById('taskCounter');

// Add an event listener to the add task button
addTask.addEventListener('click', () => {

    // Get the text value of the task input field and trim any whitespace
  const taskText = taskInput.value.trim();

  // Check if the task text is not empty
  if (taskText) {
    // Create a new task element using the createTaskElement function
    const task = createTaskElement(taskText);

    // Append the new task element to the task list
    taskList.appendChild(task);

    // Clear the task input field
    taskInput.value = '';

    // Update the task counter
    const taskCount = taskList.getElementsByClassName('task').length;
    taskCounter.querySelector('span').textContent = taskCount;
    taskCounter.querySelector('span').dataset.taskCount = taskCount;
  }
});

// Function to create a new task element
function createTaskElement(text) {

    // Create a new list item element
  const task = document.createElement('li');

  // Add the 'task' class to the list item element
  task.classList.add('task');

  // Create a new checkbox input element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Add an event listener to the checkbox to toggle the 'completed' class and update the task counter
  checkbox.addEventListener('change', () => {
    task.classList.toggle('completed');
    const taskCount = taskList.getElementsByClassName('task').length;
    const completedTaskCount = taskList.getElementsByClassName('completed').length;
    taskCounter.querySelector('span').textContent = `${taskCount - completedTaskCount} of ${taskCount}`;
    taskCounter.querySelector('span').dataset.taskCount = taskCount;
  });

  // Create a new span element to display the task text
  const taskContent = document.createElement('span');
  taskContent.textContent = text;

  // Create a new edit button element
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  // Add an event listener to the edit button to prompt the user to enter a new task text
  editButton.addEventListener('click', () => {
    const newText = prompt('Enter a new task:');
    if (newText) {
      taskContent.textContent = newText;
    }
  });

    // Create a new remove button element
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  // Add an event listener to the remove button to remove the task element
  removeButton.addEventListener('click', () => {
    task.remove();

    // Update the task counter
    const taskCount = taskList.getElementsByClassName('task').length;
    taskCounter.querySelector('span').textContent = taskCount;
    taskCounter.querySelector('span').dataset.taskCount = taskCount;
  });

  // Append the checkbox, task content, edit button, and remove button to the task element
  task.appendChild(checkbox);
  task.appendChild(taskContent);
  task.appendChild(editButton);
  task.appendChild(removeButton);

    // Return the new task element
  return task;
}