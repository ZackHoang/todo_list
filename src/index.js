import { createProject } from "./todo";
import { displayForm, displayTodos, addIcon, displayProject, makeTodo} from "./dom";
import './index.css'; 

const addTodo = document.getElementById("todo_btn"); 

addIcon(); 
displayForm(); 
displayTodos(); 
displayProject(); 

//Creates three default projects 

createProject("inbox"); 
createProject("today"); 
createProject("thisWeek"); 
// localStorage.clear(); 
// localStorage.removeItem("project1"); 
// localStorage.removeItem("inbox"); 

addTodo.addEventListener("click", () => {
    makeTodo(); 
})

//Testing 
// let todo1 = createToDo("asd", "dummy task", "7/11/2024", "high", "done");
// console.log(todo1);   
// let newProject = createProject("My Project"); 
// console.log(newProject); 
// newProject.push(todo1); 
// console.log(newProject);
// newProject.splice(0, 1); 
// console.log(newProject);


