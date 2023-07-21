const todo = [];

//assigning
const todoForm = document.getElementById('to_dos');
const todoList = document.getElementById('list_of_todo');
const addInput = document.getElementById('addInput');



//setting the add task to local storage
function setList(){
    localStorage.setItem('list_of_todo', addInput.value);
}

function getList(){
    const list = localStorage.getItem('list_of_todo');
}

if(todoList) {
todoList.addEventListener('keyup', printList());
}

function printList(){
    todoList.innerHTML = '';

    for (let i = 0; i < todo.length; i++){
        const todo = todo[i];

        //checkbox
        const todoItem = document.createElement('li');

        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');
        todoCheckbox.checked = todo.is_complete;
        todoCheckbox.addEventListener('change', function() {
          todo.is_complete = this.checked;
          setList(todo);
        });
    
        //display task
        const todoText = document.createElement('span');
        todoText.innerHTML = localStorage.getItem('list_of_todo');
        
        
        //delete
        const todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.innerText = 'Delete';
        todoDeleteBtn.addEventListener('click', function() {
          todos.splice(indexOfElement, 1);
          setList(todo);
          printList();
        });
    
        todoItem.appendChild(todoCheckbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDeleteBtn);
        todoList.appendChild(todoItem);
      }
    
}



function buttonClick(){
    const input = document.getElementById('get_value').value;
    console.log(input);
}







  



























//to get the data when enter key is pressed at add task
//todoInput.addEventListener('keypress',function (event){
 //   if (event.key === 'Enter') {
 //       const addValue = todoInput.value;
  //      event.preventDefault();
   //     document.getElementById('add_todo');
    //    console.log(addValue);
   // }
//})

//todoInput.addEventListener('keydown', function(event){
  //  if (event.key === 'Enter'){
    //    buttonClick();
    //}
//})

//buttonClick.addEventListener('click', function(){
  //  console.log('Task is added');
//})



//prevent empty tasks added
//todoForm.addEventListener("click", function(event){
 //   event.preventDefault()
 // });




 //function buttonClick(){
   // const addInput = document.getElementById('addInput').value;
    //console.log (todo);
