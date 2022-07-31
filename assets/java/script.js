const addTaskButton = document.getElementById("add-task"); //add tasks
const taskInput = document.getElementById("new-task"); //input del html
const allTaskHtml = document.getElementById("task-list"); //list of task in the html
const totalOfTask = document.getElementById("total"); //counts all tasks added
const finishedTasks = document.getElementById("finished"); //counts the finished tasks
const checkId = document.getElementById("cbox1"); //Validates checkbox
let statusCheck = "";

const tasks = [
  { id: 1, task: "Danza y ejercicio", state: false },
  { id: 2, task: "Solucionar la hambruna mundial", state: false },
  { id: 3, task: "Cena conmigo", state: false },
];

let add = function () {
  let html = "";
  for (assignment of tasks) {
    if (assignment.state == true) {
      statusCheck = "checked";
    } else {
      statusCheck = "";
    }

    html += `<li>${assignment.task} <input onclick="checkedBox(${assignment.id})" type="checkbox" id="c${assignment.id}" ${statusCheck}> <button onclick="deleteTask(${assignment.id})"> ❌ </button></li>`;
  }

  allTaskHtml.innerHTML = html;
  totalOfTask.innerHTML = tasks.length;
  finishedTasks.innerHTML = +tasks.filter(({ state }) => state === true).length;
  console.log(tasks);
};

let checkedBox = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  if (document.querySelector("#c" + id).checked == true) {
    tasks[index].state = true;
  } else {
    tasks[index].state = false;
  }
  add();
};

addTaskButton.addEventListener("click", () => {
    const addTask = taskInput.value;
    if (addTask == "") {
      alert("Agrega una tarea");
    } else {
      tasks.push({ id: Date.now(), task: addTask, state: false });
      taskInput.value = "";
      add();
    }
  });


let deleteTask = (id) => {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  let html = "";
  for (assignment of tasks) {
    html += `<li>${assignment.task} <input onclick="checkedBox(${assignment.id})" type="checkbox" id="option"> <button onclick="deleteTask(${assignment.id})"> ❌ </button></li>`;
  }
  add();
  allTaskHtml.innerHTML = html;
  totalOfTask.innerHTML = tasks.length;
};
add();
