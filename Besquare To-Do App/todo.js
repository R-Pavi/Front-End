// Get references to HTML elements
const addInput = document.getElementById("addInput");
const addBtn = document.getElementById("add_todo");
const todoList = document.getElementById("list_of_todo");

// Create an array to store todo items
let todos = [];

// Define a function to render the todos in the list
function renderTodos() {
  // Clear the current list
  todoList.innerHTML = "";
  // Iterate over each todo item in the array
  for (let i = 0; i < todos.length; i++) {
    // Create a new li element for the todo item
    const todoItem = document.createElement("li");
    // Create a new checkbox for the todo item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Create a new delete icon for the todo item
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    // Add a click event listener to the delete icon to remove the item from the array and re-render the list
    deleteIcon.addEventListener("click", function () {
      todos.splice(i, 1);
      renderTodos();
    });
    // Set the text of the li element to the todo item text
    todoItem.textContent = todos[i];
    // Add the checkbox and delete icon to the li element
    todoItem.prepend(checkbox);
    todoItem.append(deleteIcon);
    // Add the li element to the todo list
    todoList.append(todoItem);
  }
}

// Add a submit event listener to the form to add new todo items to the array and re-render the list
document.getElementById("to_dos").addEventListener("submit", function (event) {
  event.preventDefault();
  const todoItem = addInput.value.trim();
  if (todoItem !== "") {
    todos.push(todoItem);
    addInput.value = "";
    renderTodos();
  }
});

// Render the initial todos list
renderTodos();