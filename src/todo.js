//Make new todo
function todo(title, description, dueDate, priority) {
    return {title, description, dueDate, priority} 
} 

//Make new project
function createProject(project) {
    let projectArr = []; 
    localStorage.setItem(project.toString(), JSON.stringify(projectArr)); 
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

//Delete a project 
function deleteProject(project) {
    localStorage.removeItem(project); 
}

export {todo, createProject, addTodo, deleteTodo, deleteProject}; 

