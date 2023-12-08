// catch the elements
let inputField = document.querySelector(".input");
let addButton = document.querySelector(".add");
let addedTasks = document.querySelector(".tasks");
// create an empty array to store the tasks
let tasksListArray = [];
// let inputValue = inputField.value;

// check if theres tasks in local storage
if (localStorage.getItem("tasks")) {
  tasksListArray = JSON.parse(localStorage.getItem("tasks"));
}

// get data form local storage function
getDataFromLocalStorage();

// add tasks
// applying the event on the button
addButton.onclick = function () {
  if (inputField.value !== "") {
    addToArray(inputField.value);  //add tasks to array
    inputField.value = "";  //empty input field
  }
};

// click on task element
addedTasks.addEventListener("click", (e) => {
  // delete button
  if (e.target.classList.contains("delete")) {
    // remove element from array and save back into localstorage
    deleteTaskFromLocalStorageNamedById(e.target.parentElement.getAttribute("data-id"));
    // remove element from page
    e.target.parentElement.remove();
  }
  // task element 
  if (e.target.classList.contains("task")) {
    // toggle task completed 
    toggleTaskFromLocalStorageNamedById(e.target.getAttribute("data-id"));
    // toggle done class
    e.target.classList.toggle("done");
  }
});

function addToArray(tasks) {
  // tasks data
  let newTaskData = {
    id: Date.now(),
    title: tasks,
    isDone: false
  };
  // push the tasks to (tasks list array)
  tasksListArray.push(newTaskData);
  // add the tasks to the page
  addTasksToPageFrom(tasksListArray);
  // add tasks to local storage
  addDataToLocalStorageFrom(tasksListArray);
}

function addTasksToPageFrom(tasksListArray) {
  // empty (added tasks) area
  addedTasks.innerHTML = "";
  // loop on tasks list array
  tasksListArray.forEach(newTaskData => {
    // create added tasks div
    let div = document.createElement("div");
    div.className = "task";
    // check if task is done
    if (newTaskData.isDone === true) {
      div.className = "task done";
    }
    div.setAttribute("data-id", newTaskData.id);
    div.appendChild(document.createTextNode(newTaskData.title));
    // create delete button
    let span = document.createElement("span");
    span.className = "delete";
    span.appendChild(document.createTextNode("Delete"));
    // append button to added tasks div
    div.appendChild(span);
    // add added new tasks div to main tasks div
    addedTasks.appendChild(div);
  });
}

function addDataToLocalStorageFrom(tasksListArray) {
  window.localStorage.setItem("tasks", JSON.stringify(tasksListArray));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addTasksToPageFrom(tasks);
  }
}

function deleteTaskFromLocalStorageNamedById(taskId) {
  tasksListArray = tasksListArray.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(tasksListArray);
}

function toggleTaskFromLocalStorageNamedById(taskId) {
  for (let i = 0; i < tasksListArray.length; i++) {
    if (tasksListArray[i].id == taskId) {
      tasksListArray[i].isDone == false ? (tasksListArray[i].isDone = true) : (tasksListArray[i].isDone = false)
    }
  }
  addDataToLocalStorageFrom(tasksListArray);
}



