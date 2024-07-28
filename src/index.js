import { createProject, getTodo } from "./todo";
import { displayForm, displayTodos, addIcon, displayProject, makeTodo, makeProject } from "./dom";
import './index.css'; 

const addTodo = document.getElementById("todo_btn"); 
const addProject = document.getElementById("add_project"); 

addIcon(); 
displayForm(); 
displayTodos(); 
displayProject(); 

//Creates three default projects 
// localStorage.setItem("Todo Title", todoTitle.textContent); 
// createProject("Inbox"); 
// createProject("Today"); 
// createProject("This Week"); 
// localStorage.clear(); 
// localStorage.removeItem("project1"); 
// localStorage.removeItem("inbox"); 


addTodo.addEventListener("click", () => {
    makeTodo(); 
}); 

addProject.addEventListener("click", () => {
    makeProject(); 
})



