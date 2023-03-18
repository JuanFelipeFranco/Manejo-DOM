import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//funciones anonimas o arrow functions se basa en este signo =>
const createTask = (evento) => {
  evento.preventDefault();
//queremos que se ejecute al clickear el input
  const input = document.querySelector("[data-form-input]");
//Hace que el usuario digite y cuando se de click quede en blanco para volver a ejecutar
  const value = input.value;
  const list = document.querySelector("[data-list]");
//Hace que al dar click nos aparezca la alteracion en la lista.
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
//utilizamos template de js `` combinamos etiquetas JS con HTML, insertamos value
//nos regresa el console log la estructura html con lo que escribe el usuario en el value.
    const taskContent = document.createElement("div");

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
//task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon())
  //al elemento lista le quiero agregar un hijo
  list.appendChild(task);
  //console.log(content);
};

console.log(btn);
// listener eventos tales como click o movimiento de mouse, se usa la funcion de addEvenListener donderecibe dos parametros.
btn.addEventListener("click", createTask);

//funcion que elimina lo que esta por debajo para que no se vea, //Immediately invoked function expression IIFE, funciones en cuanto se declaran se ejecutan