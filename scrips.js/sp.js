const todoForm = document.getElementById('form');
const todoInput = document.getElementById('input');
const todoList = document.getElementById('lista');
const clearBtn = document.getElementById('boton');

// obtiene los datos guardados en el local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];
 

// muestra los datos guardados en el local storage
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo,index) => {//--
    const li = document.createElement(`li`);
    li.textContent= todo; 
    const botton= document.createElement('button');//--
    //const span= document.createElement('button');
    botton.textContent='Borrar';//----
    botton.addEventListener('click',function(){//---
      this.parentNode.remove();//--
      console.log(todos)
      todos.splice(index,1)//--
      localStorage.setItem('todos',JSON.stringify(todos))//--
    })
    li.appendChild(botton);//--
     //li.innerHTML+='<button>x</button>'//
    //span.textContent='x';
        if (li ==''){      
    }      
    todoList.appendChild(li)      
  });  
}

//eleiminar uno por uno
/*function spa(){
  var x = document.createElement("SPAN");
  var t = document.createTextNode("x");
  x.appendChild(t);
  document.body.appendChild(x);
}

*/


// agregar un nuevo to do  y guarda en el local storage
function addTodo() {
  const todoText = todoInput.value.trim();
  /*console.log(todoText);*/
    if (todoText==''){
    alert('El campo esta vacio');
  }
 console.log(todoText);
  if (todoText) {
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));/*convertir el arreglo en un cadena*/
    renderTodos();    
    todoInput.value = '';/*para dejar el campo vacio despues de usarlo*/
  
  }
}
  //borrar por elemento
  //Eliminar un valor de localStorage:

  
  

// borrar todos los todo  y borra del local storage
function clearTodos() {
  todos = [];
  localStorage.removeItem('todos');
  renderTodos();
}

// llama a la función addTodo cuando se envía el formulario
todoForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

clearBtn.addEventListener('click', clearTodos);

// llama a la función renderTodos para mostrar los datos guardados en el local storage
renderTodos();

