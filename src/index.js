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
// localStorage.removeItem("custom1");
// localStorage.removeItem("Custom1");
// localStorage.removeItem("Custom Projects"); 
// createProject("Custom Projects"); 
// localStorage.removeItem("custom1"); 
// localStorage.removeItem("custom2"); 
// localStorage.removeItem("custom3"); 
// localStorage.removeItem("custom4"); 
// localStorage.removeItem("custom5"); 
// localStorage.removeItem(""); 



addTodo.addEventListener("click", () => {
    makeTodo(); 
}); 

addProject.addEventListener("click", () => {
    makeProject(); 
})



