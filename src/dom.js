import InboxIcon from './icons/inbox.svg'; 
import TodayIcon from './icons/calendar-today.svg'; 
import ThisWeekIcon from './icons/calendar-week.svg'; 
import Plus from './icons/plus.svg'; 

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
    const dialog = document.querySelector("dialog"); 
    const closeDialog = document.querySelector("#close"); 
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
    const inbox = document.getElementById("inbox"); 
    const today = document.getElementById("today"); 
    const thisWeek = document.getElementById("this_week"); 
    const todoTitle = document.getElementById("todo_title"); 
    inbox.addEventListener("click", () => {
        todoTitle.textContent = "Inbox"; 
    })
    today.addEventListener("click", () => {
        todoTitle.textContent = "Today"; 
    })
    thisWeek.addEventListener("click", () => {
        todoTitle.textContent = "This Week"; 
    })
}

// function submitForm() {

// }

export {displayForm, displayTodos, addIcon}; 