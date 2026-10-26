console.log("hello world");

//we target the html button element
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");

let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");

let buttonToDo = document.querySelector("#toDoButton");
let inputToDo = document.querySelector("#toDoInput");

let target = document.querySelector("#target");
let toDoList = document.querySelector("#toDo")

console.log(button);

//we listen to the click on the button
button.addEventListener("click", function(){
    console.log(inputName.value);
    target.innerHTML = inputName.value;
});

buttonColor.addEventListener("click", function(){
    target.style.color = inputColor.value;
})

buttonToDo.addEventListener("click", function(){
    let currentToDo = inputToDo.value
    let newListElement = `<li>${currentToDo}</li>`;
    toDoList.innerHTML = toDoList.innerHTML + newListElement;
})