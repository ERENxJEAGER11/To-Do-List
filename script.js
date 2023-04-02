const task = ["aman", "zaheer"];
const taskList = document.getElementsByClassName("task-list");
const para = document.createElement("p");

para.innerText = "This is a paragraph.";

document.body.append(taskList.item);



for (let i = 0; i < task.length; i++) {
  const element = document.createElement("p");
  element.innerText = task[i];
  taskList.appendChild(element);
}

function adTask() {
  task.push(document.getElementById("my-task").value);
  console.log(task);
}

