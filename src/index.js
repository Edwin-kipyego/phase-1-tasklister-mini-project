document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks'); 
  
 //submit
 form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = taskInput.value;

  if (taskDescription.trim() !== "") {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear the input field after adding the task
  }
});
});