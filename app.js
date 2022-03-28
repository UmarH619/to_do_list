//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event){
    
    //Prevent form from submitting
    event.preventDefault();
   
    //Todo DIV
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = <i class="fa-solid fa-circle-check"></i>;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = <i class="fa-solid fa-circle-trash"></i>;
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
}