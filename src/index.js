import { createProject, getTodo } from "./todo";
import { displayForm, displayTodos, addIcon, displayProject, makeTodo} from "./dom";
import './index.css'; 

const addTodo = document.getElementById("todo_btn"); 
const todoTitle = document.getElementById("todo_title"); 

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
})



