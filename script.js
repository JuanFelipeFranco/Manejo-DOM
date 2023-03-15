const btn = document.querySelector("[data-form-btn]");

//funciones anonimas o arrow functions se basa en este signo =>
const createTask = (evento) =>{
    evento.preventDefault();
    //queremos que se ejecute al clickear el input 
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);

// listener eventos tales como click o movimiento de mouse, se usa la funcion de addEvenListener donderecibe dos parametros.

//funciones anonimas o arrow functions se basa en este signo => 
btn.addEventListener("click", createTask )

