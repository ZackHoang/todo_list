//Create default localStorage keys and values 
function startStorage() {
    if (localStorage.length == 0) {
        createProject("Inbox"); 
        createProject("Today"); 
        createProject("This Week"); 
        createProject("Custom Projects"); 
        localStorage.setItem("Todo Title", "Inbox"); 
        localStorage.setItem("Edit todo", ""); 
    }
}

//Make new todo
function todo(title, description, dueDate, priority) {
    return {title, description, dueDate, priority} 
} 

//Make new project
function createProject(project) {
    let projectArr = []; 
    localStorage.setItem(project.toString(), JSON.stringify(projectArr)); 
    return projectArr; 
} 

//Add a todo to a project 
function addTodo(todo, project) {
    let projectArr = JSON.parse((localStorage.getItem(project)));  
    projectArr.push(todo); 
    localStorage.setItem(project.toString(), JSON.stringify(projectArr)); 
}

//Delete a todo from a project
function deleteTodo(todo, project) {
    let projectArr = JSON.parse(localStorage.getItem(project));
    for (let i = projectArr.length - 1; i >= 0; i--) {
        if (projectArr[i].title == todo) {
            projectArr.splice(i, 1); 
        }
    }
    localStorage.setItem(project.toString(), JSON.stringify(projectArr)); 
}

//Change todo title 
function changeTodoTitle(titleKey, titleValue) {
    let todoTitle = localStorage.getItem(titleKey); 
    todoTitle = titleValue; 
    localStorage.setItem(titleKey.toString(), todoTitle); 
    return todoTitle; 
}

//Retrieve todo from localStorage
function getTodo(project) {
    let projectArr = JSON.parse(localStorage.getItem(project)); 
    console.log(projectArr); 
    return projectArr; 
}

//Delete a project 
function deleteProject(project) {
    localStorage.removeItem(project); 
}

export {todo, createProject, addTodo, getTodo, deleteTodo, deleteProject, changeTodoTitle, startStorage}; 

