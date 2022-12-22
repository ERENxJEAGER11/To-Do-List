const task = ["aman", "zaheer"];
const taskList = document.getElementsByClassName("task-list");

function adTask() {
  task.push(document.getElementById("my-task").value);
  console.log(task);
}
for (let i = 0; i < task.length; i++) {
  const element = document.createElement("p");
  element.textContent = task[i];
  taskList.append(element);
}