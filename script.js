var addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTask);

function addTask() {
  // Get the input field and the task list
  var input = document.getElementById("new-task");
  var taskList = document.getElementById("task-list");

  // Create a new task item with a delete button
  var taskItem = document.createElement("li");
  var taskName = document.createTextNode(input.value);
  var deleteButton = document.createElement("button");
  var deleteButtonText = document.createTextNode("Delete");

  deleteButton.appendChild(deleteButtonText);
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskName);
  taskItem.appendChild(deleteButton);

  // Add the new task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  input.value = "";
}
