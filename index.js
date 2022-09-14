'use strict'

const taskManageForm = document.forms.tasks;
taskManageForm.onsubmit = (event)=>{
    event.preventDefault();
}
const {taskDescription} = taskManageForm;
const taskList = document.getElementById('list');

taskList.onclick = deleteTask;
taskManageForm.onclick = submitTask;

function deleteTask (event){
    const targetTask = event.target;
    if (targetTask.name  === 'deleteTask')  {
        targetTask.closest('li').classList.toggle("animate__fadeOutLeft");
        targetTask.closest('li').addEventListener('animationend', () =>{
            targetTask.closest('li').remove();
        })

    }
}
taskDescription.oninput = ()=>{
    taskDescription.classList.remove("danger")
}

function submitTask (event){
    const node = event.target;
    if (node.name  === 'submitTask'){
        if (taskDescription.value.trim()==="") {
            taskDescription.classList.add("danger","animate__animated","animate__shakeX");
            taskDescription.addEventListener('animationend', () => {
                taskDescription.classList.remove("animate__animated", "animate__shakeX")
            });
        }
        else{
            const task = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.name="deleteTask";
            deleteButton.innerHTML = "Delete";
            task.innerHTML = taskDescription.value;
            task.classList.add("animate__animated","animate__fadeInLeft")
            task.append(deleteButton);
            taskList.append(task);
            taskDescription.value = "";
        }

    }
}

