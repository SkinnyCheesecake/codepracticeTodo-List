let todo = JSON.parse(localStorage.getItem("todo")) || [];
const inputField = document.getElementById("inputField");
const todoElements = document.getElementById("todoElements");
const todoCounter = document.getElementById("todoCounter");
const deleteButton = document.getElementById("deleteButton");
const addButton = document.querySelector(".btn");

/* BEGINING OF THE CODE  */

document.addEventListener("DOMContentLoaded", function (){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function (event){
        if(event.key === "Enter"){
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteButton);
    displayTasks();
});


function addTask(){
    const newTask = todoInput.value.trim();
    if(newTask !== ""){
        todo.push({
            text: newTask,
            disabled: false;
        });
        saveToLocalStorage();
        inputField.value = '';
        displayTasks();
    }
}

function  displayTasks(){
    todoElements.innerHTML = "";
    todo.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML =  `
        <div class="todo-container">
        <input class="todo-checkbox" type="checkbox" id="input-${index}" ${item.disabled ? "checked" : ""}>
        <p id="todo-${index}" class="${items.disabled ? "disabled" : ""}"></p>
        </div>
        `
    })
}
