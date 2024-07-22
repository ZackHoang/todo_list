import { createToDo, createProject } from "./todo";
import { displayForm, displayTodos, addIcon } from "./dom";
import './index.css'; 

addIcon(); 
displayForm(); 
displayTodos(); 

//Creates three default projects 
let inbox = []; 
let today = []; 
let thisWeek = []; 

// localStorage.setItem("inbox", JSON.stringify(inbox)); 


//Testing 
// let todo1 = createToDo("asd", "dummy task", "7/11/2024", "high", "done");
// console.log(todo1);   
// let newProject = createProject("My Project"); 
// console.log(newProject); 
// newProject.push(todo1); 
// console.log(newProject);
// newProject.splice(0, 1); 
// console.log(newProject);


