const taskInput =document.getElementById("task");
const taskForm =document.getElementById("task-form");
const taskList=document.getElementById("task-list");
let nextTaskId = 1;
const tasks = [];


taskForm.addEventListener("submit",function(event){

event.preventDefault();
const taskText=taskInput.value.trim()
if(taskText === ""){
    return;
}
const newTask = {
    id: nextTaskId,
    text: taskText,
    completed: false
};
nextTaskId++;
tasks.push(newTask);
taskInput.value = "";
displayTasks();

})


function displayTasks(){
    taskList.innerHTML = "";

    for(const task of tasks){
        const li = document.createElement("li");
li.textContent = task.text;
taskList.appendChild(li);

    }
}
