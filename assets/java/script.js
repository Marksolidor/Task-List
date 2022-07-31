const addTaskButton = document.getElementById("add-task"); //Agrega tareas
const taskInput = document.getElementById("new-task"); //input del html
const allTaskHtml = document.getElementById("task-list"); //list of task in the html
const totalOfTask = document.getElementById("total"); //counts all tasks added
const finishedTasks = document.getElementById("finished"); //counts the finished tasks


const tasks = [
    { id: 1, task: "Danza y ejercicio", state: false },
    { id: 2, task: "Solucionar la hambruna mundial", state: false },
    { id: 3, task: "Cena conmigo", state: false },
  ];



  addTaskButton.addEventListener("click", () => {
    const addTask = taskInput.value;
    if (addTask == "") {
      alert("Agrega una tarea");
    } else {
      tasks.push({ id: Date.now(), task: addTask, state: false });
      taskInput.value = "";
  

    }
  });


  allTaskHtml.innerHTML = html;
  totalOfTask.innerHTML = tasks.length;
  finishedTasks.innerHTML =
     + tasks.filter(({ state }) => state === true).length;
  console.log(tasks);

  console.log(tasks)