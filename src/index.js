import { createProject, getTodo, startStorage } from "./todo";
import { displayForm, displayTodos, addIcon, displayProject, makeTodo, makeProject } from "./dom";
import './index.css'; 

const addTodo = document.getElementById("todo_btn"); 
const addProject = document.getElementById("add_project"); 

// localStorage.clear(); 

startStorage(); 

addIcon(); 
displayForm(); 
displayTodos(); 
displayProject(); 

addTodo.addEventListener("click", () => {
    makeTodo(); 
}); 

addProject.addEventListener("click", () => {
    makeProject(); 
})



