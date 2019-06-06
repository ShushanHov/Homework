
const addButtonActs=document.getElementById('add-button');
const newToDoElementName=  document.getElementById('new-task-input');
addButtonActs.addEventListener('click',whenAddButtonClicked);
newToDoElementName.addEventListener('keypress',whenKeyPressed);

function    whenAddButtonClicked (){
    
    const newToDoElement=document.createElement('div');
    const dne
    newToDoElement.innerText=newToDoElementName.value;
    //newToDoElement.classList.add('todo-item');
    const allToDoes=document.getElementById("todo-items-list");
    allToDoes.appendChild(newToDoElement);
    newToDoElementName.value='';
}

function whenKeyPressed(e){
    if (e.which===13) whenAddButtonClicked();
}