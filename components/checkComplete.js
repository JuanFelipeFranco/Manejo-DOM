const checkComplete = () =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square","icon");
    i.addEventListener("click", completeTask)
    return i;
};

const completeTask = (event) =>{
    const element = event.target;
    //hace que ek usuario al dar click cambie de color el check
    element.classList.toggle("fas");
    //color azul
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

export default checkComplete;