import InboxIcon from './icons/inbox.svg'; 
import TodayIcon from './icons/calendar-today.svg'; 
import ThisWeekIcon from './icons/calendar-week.svg'; 
import Plus from './icons/plus.svg'; 

import { format, parseISO } from 'date-fns';
import { todo, createProject, addTodo, getTodo, deleteTodo, changeTodoTitle } from './todo';

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
    const projectBtns = document.querySelectorAll(".project_btn"); 
    const todoTitle = document.getElementById("todo_title"); 
    const todos = document.querySelector(".todos"); 
    todoTitle.textContent = localStorage.getItem("Todo Title"); 

    let displayTodoArr = getTodo(todoTitle.textContent); 
    if (displayTodoArr.length > 0) {
        for (let i = 0; i <= displayTodoArr.length - 1; i++) {
            const todoCard = document.createElement("div"); 
            todoCard.classList.add("task"); 
            todos.appendChild(todoCard); 
            const todoTitle = document.createElement("h3"); 
            const todoDescription = document.createElement("p"); 
            const todoDueDate = document.createElement("p");  
            const todoPriority = document.createElement("p"); 
            todoTitle.textContent = displayTodoArr[i].title; 
            todoDescription.textContent = `Description: ${displayTodoArr[i].description}`; 
            todoDueDate.textContent = `Due Date: ` + format(parseISO(displayTodoArr[i].dueDate), 'MMMM do yyyy');
            todoPriority.textContent = `Priority: ${displayTodoArr[i].priority}`; 
            todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority);  
        }
    }

    projectBtns.forEach((projectBtn) => {
        projectBtn.addEventListener("click", () => {
            while (todos.hasChildNodes()) {
                todos.removeChild(todos.firstChild); 
            }
            todoTitle.textContent = projectBtn.textContent; 
            let projectArr = getTodo(projectBtn.textContent); 
            if (projectArr.length > 0) {
                for (let i = 0; i <= projectArr.length - 1; i++) {
                    const todoCard = document.createElement("div"); 
                    todoCard.classList.add("task"); 
                    todos.appendChild(todoCard); 
                    const todoTitle = document.createElement("h3"); 
                    const todoDescription = document.createElement("p"); 
                    const todoDueDate = document.createElement("p");  
                    const todoPriority = document.createElement("p"); 
                    todoTitle.textContent = projectArr[i].title; 
                    todoDescription.textContent = `Description: ${projectArr[i].description}`; 
                    todoDueDate.textContent = `Due Date: ` + format(parseISO(projectArr[i].dueDate), 'MMMM do yyyy');
                    todoPriority.textContent = `Priority: ${projectArr[i].priority}`; 
                    todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority);  
                }
            }
            let currentTodoTitle = changeTodoTitle("Todo Title", todoTitle.textContent)
            todoTitle.textContent = currentTodoTitle; 
        })
    }); 
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
    const todoTitle = document.getElementById("todo_title"); 

    submit.addEventListener("click", (event) => {
        if (title.value.length != 0 && dueDate.value != '') {
            event.preventDefault(); 
            if (description.value == '') {
                description.value = "No Description"; 
            }
            const newToDo = todo(title.value, description.value, dueDate.value, priority.value);
            addTodo(newToDo, project.value); 
            if (project.value == todoTitle.textContent) {
                const todos = document.querySelector(".todos"); 
                const todoCard = document.createElement("div"); 
                todoCard.classList.add("task"); 
                todos.appendChild(todoCard); 
                const todoTitle = document.createElement("h3"); 
                const todoDescription = document.createElement("p"); 
                const todoDueDate = document.createElement("p");  
                const todoPriority = document.createElement("p"); 
                todoTitle.textContent = title.value; 
                todoDescription.textContent = `Description: ${description.value}`; 
                todoDueDate.textContent = `Due Date: ` + format(parseISO(dueDate.value), 'MMMM do yyyy');  
                todoPriority.textContent = `Priority: ${priority.value}`; 
                todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority);
            } 
            title.value = ''; 
            description.value = ''; 
            dueDate.value = ''; 
            console.log(newToDo); 
            dialog.close(); 
        } 
    })
}


export {displayForm, displayTodos, addIcon, displayProject, makeTodo}; 