import InboxIcon from './icons/inbox.svg'; 
import TodayIcon from './icons/calendar-today.svg'; 
import ThisWeekIcon from './icons/calendar-week.svg'; 
import Plus from './icons/plus.svg'; 

import { format, parseISO } from 'date-fns';
import { todo, createProject, addTodo, getTodo, deleteTodo, changeTodoTitle } from './todo';

const todos = document.querySelector(".todos"); 

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
    loadProject("Custom Projects"); 

    const projectBtns = document.querySelectorAll(".project_btn"); 
    const todoTitle = document.getElementById("todo_title"); 
    todoTitle.textContent = localStorage.getItem("Todo Title"); 

    while (todos.hasChildNodes()) {
        todos.removeChild(todos.firstChild); 
    }

    let displayTodoArr = getTodo(todoTitle.textContent); 
    if (displayTodoArr.length > 0) {
        populateTodoArr(displayTodoArr); 
    }

    projectBtns.forEach((projectBtn) => {
        projectBtn.addEventListener("click", () => {
            while (todos.hasChildNodes()) {
                todos.removeChild(todos.firstChild); 
            }
            todoTitle.textContent = projectBtn.textContent; 
            let projectArr = getTodo(projectBtn.textContent); 
            if (projectArr.length > 0) {
                populateTodoArr(projectArr); 
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
            title.value = ''; 
            description.value = ''; 
            dueDate.value = ''; 
            console.log(newToDo); 
            dialog.close(); 
            const projectArr = getTodo(todoTitle.textContent); 
            if (project.value == todoTitle.textContent) {
                populateTodoArr(projectArr);  
            } 
        } 
    })
}   

//Make new project
function makeProject() {
    const projectTitle = document.getElementById("new_project"); 
    const dialog = document.getElementById("project_dialog"); 
    const submit = document.getElementById("submit_project"); 

    submit.addEventListener("click", (event) => {
        event.preventDefault(); 
        createProject(projectTitle.value); 
        let projectArr = JSON.parse(localStorage.getItem("Custom Projects")); 
        projectArr.push(projectTitle.value); 
        localStorage.setItem("Custom Projects", JSON.stringify(projectArr)); 
        displayTodos(); 
        projectTitle.value = ''; 
        dialog.close();  
    })
}

//Populate display of todo cards from array
function populateTodoArr(array) {
    const projectTitle = document.getElementById("todo_title"); 
    const dialog = document.getElementById("todo_dialog"); 
    const title = document.getElementById("title"); 
    const description = document.getElementById("description"); 
    const dueDate = document.getElementById("date"); 
    const priority = document.getElementById("priority"); 
    const project = document.getElementById("project");

    while (todos.hasChildNodes()) {
        todos.removeChild(todos.firstChild); 
    }

    for (let i = 0; i <= array.length - 1; i++) {
        const todoCard = document.createElement("div"); 
        todoCard.classList.add("task");
        todos.appendChild(todoCard); 
        const todoCardCol1 = document.createElement("div"); 
        todoCardCol1.classList.add("task_col_1");  
        todos.appendChild(todoCard); 
        const todoTitle = document.createElement("h3"); 
        const todoDescription = document.createElement("p"); 
        const todoDueDate = document.createElement("p");  
        const todoPriority = document.createElement("p"); 
        todoTitle.textContent = array[i].title; 
        todoDescription.textContent = `Description: ${array[i].description}`; 
        todoDueDate.textContent = `Due Date: ` + format(parseISO(array[i].dueDate), 'MMMM do yyyy');
        todoPriority.textContent = `Priority: ${array[i].priority}`; 
        todoCardCol1.append(todoTitle, todoDescription, todoDueDate, todoPriority);
        const todoCardCol2 = document.createElement("div"); 
        todoCardCol2.classList.add("task_col_2"); 
        const deleteBtn = document.createElement("button"); 
        deleteBtn.classList.add("task_btn"); 
        deleteBtn.textContent = "Delete"; 
        const editBtn = document.createElement("button"); 
        editBtn.classList.add("task_btn"); 
        editBtn.textContent = "Edit";  
        todoCardCol2.append(deleteBtn, editBtn); 
        todoCard.append(todoCardCol1, todoCardCol2);
        deleteBtn.addEventListener("click", () => {
            todoCard.remove(); 
            deleteTodo(todoTitle.textContent, projectTitle.textContent);
        }); 

        editBtn.addEventListener("click", () => {
            dialog.showModal(); 
            title.value  = todoTitle.textContent; 
            description.value = array[i].description; 
            dueDate.value = array[i].dueDate;  
            priority.value = array[i].priority; 
            project.value = projectTitle.textContent; 
        })
    }
}

//Populate project buttons to display todos 
function loadProject(array) {

    const customProjects = document.querySelector(".custom_projects"); 

    while (customProjects.hasChildNodes()) {
        customProjects.removeChild(customProjects.firstChild); 
    }

    array = JSON.parse(localStorage.getItem(array)); 
    const projectList = document.getElementById("project"); 
    for (let i = 0; i <= array.length - 1; i++) {
        //Create new option in todo dialog
        const newProjectChoice = document.createElement("option"); 
        newProjectChoice.value = array[i]; 
        newProjectChoice.textContent = array[i]; 
        projectList.appendChild(newProjectChoice);
        //make new project button 
        const newProject = document.createElement("button"); 
        newProject.classList.add("project_btn"); 
        newProject.setAttribute("id", array[i]); 
        newProject.textContent = array[i];    
        customProjects.appendChild(newProject);
    }
}

export {displayForm, displayTodos, addIcon, displayProject, makeTodo, makeProject}; 