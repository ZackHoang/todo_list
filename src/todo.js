//Make new todo
function todo(title, description, dueDate, priority, status) {
    return {title, description, dueDate, priority, status} 
} 

//Make new project
function createProject(project) {
    project = []; 
    return project; 
} 


export {todo, createProject}; 

