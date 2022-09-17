'use strict'

const taskManageForm = document.forms.tasks;

taskManageForm.onsubmit = (event)=>{
    event.preventDefault();
        if (taskDescription.value.trim()==="") {
            taskDescription.classList.add("border-danger","animate__animated","animate__shakeX");
            taskDescription.addEventListener('animationend', () => {
                taskDescription.classList.remove("animate__animated", "animate__shakeX")
            });
        }
        else{
            taskList.append(addTask(taskDescription.value));
            taskDescription.value = "";
        }
}
const {taskDescription} = taskManageForm;
const taskList = document.getElementById('list');

taskList.onclick = deleteTask;
function addTask(taskContent) {
    const row = document.createElement('div');
    row.classList.add('row');
    const contentCol = document.createElement('div');
    contentCol.classList.add('col-10');
    const manageCol = document.createElement('div');
    manageCol.classList.add('col-2');
    const task = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.name="deleteTask";
    deleteButton.innerHTML = '<i class=\"bi bi-trash pointerEvents\"></i> Delete';
    deleteButton.classList.add('btn', 'btn-primary',"w-100","h-100","border")
    manageCol.append(deleteButton);
    task.innerHTML = taskContent;
    task.classList.add("list-group-item","animate__animated","animate__fadeIn");
    deleteButton.classList.add("animate__animated","animate__fadeIn")

    contentCol.append(task);
    row.append(contentCol,manageCol)
    return row
}
function deleteTask (event){
    const targetTask = event.target;
    console.log(event.target.closest('.row'))
    if (targetTask.name  === 'deleteTask')  {
        targetTask.closest('.row').classList.toggle("animate__fadeOut");
        targetTask.closest('.row').addEventListener('animationend', () =>{
            targetTask.closest('.row').remove();

        })

    }
}
taskDescription.oninput = ()=>{
    taskDescription.classList.remove("border-danger");
}


