import InboxIcon from './icons/inbox.svg'; 
import TodayIcon from './icons/calendar-today.svg'; 
import ThisWeekIcon from './icons/calendar-week.svg'; 
import Plus from './icons/plus.svg'; 

import { todo, createProject, addTodo, deleteTodo } from './todo';

//Add Icon
function addIcon() {
    const inbox = document.getElementById("inbox"); 
    const inboxImage = new Image(); 
    inboxImage.src = InboxIcon; 
    inbox.prepend(inboxImage);
    const today = document.getElementById("today"); 
    const todayImage = new Image(); 
    todayImage.src = TodayIcon; 
    today.prepend(todayImage); 
    const thisWeek = document.getElementById("this_week"); 
    const thisWeekImg = new Image(); 
    thisWeekImg.src = ThisWeekIcon; 
    thisWeek.prepend(thisWeekImg); 
    const addProject = document.getElementById("add_project"); 
    const plus1 = new Image(); 
    plus1.src = Plus; 
    addProject.prepend(plus1); 
    const addTodo = document.getElementById("todo_btn"); 
    const plus2 = new Image(); 
    plus2.src = Plus; 
    addTodo.prepend(plus2);  
}

//Form for adding Todo
function displayForm() {
    const todoBtn = document.querySelector("#todo_btn"); 
    const dialog = document.getElementById("todo_dialog"); 
    const closeDialog = document.querySelector("#close_todo"); 
    const title = document.querySelector("#title"); 
    const description = document.querySelector("#description"); 

    //Set minimum date to today
    let today = new Date(); 
    let date = today.getDate(); 
    let month = today.getMonth() + 1;
    let year = today.getFullYear(); 
    if (date < 10) {
        date = '0' + date; 
    }
    if (month < 10) {
        month = '0' + month; 
    }
    today = year + '-' + month + '-' + date; 
    document.getElementById("date").setAttribute("min", today); 

    todoBtn.addEventListener("click", () => {
        dialog.showModal(); 
    })
    closeDialog.addEventListener("click", () => {
        dialog.close(); 
        title.value = ''; 
        description.value = ''; 
    })
}

//Display todos
function displayTodos() {
    const inbox = document.getElementById("inbox"); 
    const today = document.getElementById("today"); 
    const thisWeek = document.getElementById("this_week"); 
    const todoTitle = document.getElementById("todo_title"); 
    inbox.addEventListener("click", () => {
        todoTitle.textContent = "Inbox"; 
    })
    today.addEventListener("click", () => {
        todoTitle.textContent = "Today"; 
    })
    thisWeek.addEventListener("click", () => {
        todoTitle.textContent = "This Week"; 
    })
}

//Add new project 
function displayProject() {
    const addProject = document.getElementById("add_project"); 
    const dialog = document.getElementById("project_dialog"); 
    const closeDialog = document.getElementById("close_project"); 
    const newProject = document.getElementById("new_project"); 
    addProject.addEventListener("click", () => {
        dialog.showModal(); 
    })
    closeDialog.addEventListener("click", () => {
        dialog.close(); 
        newProject.value = ''; 
    })
}

//Add new todo
function makeTodo() {
    const dialog = document.getElementById("todo_dialog"); 
    const title = document.getElementById("title"); 
    const description = document.getElementById("description"); 
    const dueDate = document.getElementById("date"); 
    const priority = document.getElementById("priority"); 
    const submit = document.getElementById("submit_todo"); 
    const project = document.getElementById("project"); 

    submit.addEventListener("click", (event) => {
        if (title.value.length != 0 && dueDate.value != '') {
            event.preventDefault(); 
            const newToDo = todo(title.value, description.value, dueDate.value, priority.value);   
            addTodo(newToDo, project.value); 
            const todos = document.querySelector(".todos"); 
            const todoCard = document.createElement("div"); 
            todoCard.classList.add("task"); 
            todos.appendChild(todoCard); 
            const todoTitle = document.createElement("h3"); 
            const todoDescription = document.createElement("p"); 
            const todoDueDate = document.createElement("p");  
            todoTitle.textContent = title.value; 
            todoDescription.textContent = description.value; 
            todoDueDate.textContent = dueDate.value; 
            todoCard.append(todoTitle, todoDescription, todoDueDate);
            title.value = ''; 
            description.value = ''; 
            dueDate.value = ''; 
            console.log(newToDo); 
            dialog.close(); 
        } 
    })
}


export {displayForm, displayTodos, addIcon, displayProject, makeTodo}; 