( () => {

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
    console.log(checkComplete());
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
//task.innerHTML = content;
    task.appendChild(taskContent);
  //al elemento lista le quiero agregar un hijo
  list.appendChild(task);
  console.log(content);
};

console.log(btn);
// listener eventos tales como click o movimiento de mouse, se usa la funcion de addEvenListener donderecibe dos parametros.
btn.addEventListener("click", createTask);

const checkComplete = () =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square","icon");
    i.addEventListener("click", completeTask)
    return i;
};

//Immediately invoked function expression IIFE, funciones en cuanto se declaran se ejecutan

const completeTask = () =>{
    const element = event.target;
    //hace que ek usuario al dar click cambie de color el check
    element.classList.toggle("fas");
    //color azul
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

})()//funcion que elimina lo que esta por debajo para que no se vea