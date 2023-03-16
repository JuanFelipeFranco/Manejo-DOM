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
  const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;

  //al elemento lista le quiero agregar un hijo
  list.appendChild(task);
  console.log(content);
};

console.log(btn);

// listener eventos tales como click o movimiento de mouse, se usa la funcion de addEvenListener donderecibe dos parametros.

btn.addEventListener("click", createTask);
