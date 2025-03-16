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
    //priority values
    const priorityInput =document.getElementById("priority")
    const priority = priorityInput.value;

  // Apply color based on priority
  if (priority === "high") {
    taskItem.style.color = "red";
} else if (priority === "medium") {
    taskItem.style.color = "yellow";
} else if (priority ==="low"){
    taskItem.style.color = "green";
} else {
  console.log("unknown priority value:", priority);
}


// Create delete button
const deleteButton = document.createElement('button');
deleteButton.textContent = "❌";
deleteButton.style.marginLeft = "10px";
deleteButton.style.cursor = "pointer";
deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
});


//Append delete button to task item
 taskItem.appendChild(deleteButton);

taskList.appendChild(taskItem);
 taskInput.value = ""; // Clear the input field after adding the task
  }
});
});