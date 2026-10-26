const taskInput =document.getElementById("task");
const taskForm =document.getElementById("task-form");
const taskList=document.getElementById("task-list");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");
const taskSummary = document.getElementById("task-summary");
let nextTaskId = 1;
const tasks = [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
const savedTasks = localStorage.getItem("tasks");
if (savedTasks !== null) {
    const parsedTasks = JSON.parse(savedTasks);
tasks.push(...parsedTasks);


}
if (tasks.length > 0) {
    nextTaskId = Math.max(...tasks.map(function(task) {
        return task.id;
    })) + 1;
}

let currentFilter = "all";


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
saveTasks()
taskInput.value = "";

displayTasks();

})


function displayTasks(){
    taskList.innerHTML = "";
    let filteredTasks = tasks;
    const activeTasks = tasks.filter(function(task) {
    return task.completed === false;
});
if (tasks.length === 0) {
    taskSummary.textContent = "No tasks yet";
} else if (activeTasks.length === 0) {
    taskSummary.textContent = "All tasks completed!";
} else if (activeTasks.length === 1) {
    taskSummary.textContent = "1 task remaining";
} else {
    taskSummary.textContent = `${activeTasks.length} tasks remaining`;
}

    if (currentFilter === "active") {
    filteredTasks = tasks.filter(function(task) {
        return task.completed === false;
    });
}else if(currentFilter ==="completed"){
    filteredTasks= tasks.filter(function(task)
    {

        return task.completed === true;
    })
}



    for(const task of filteredTasks){
        const li = document.createElement("li");
        const checkbox =document.createElement("input");
        const deleteButton=document.createElement("button");
        deleteButton.textContent ="Delete"
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            const updatedTasks = tasks.filter(function(item) {
    return item.id !== task.id;
});
tasks.length = 0;
tasks.push(...updatedTasks);
saveTasks()
displayTasks();
    
});

        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;

        checkbox.addEventListener("change",function(){
            task.completed =checkbox.checked;
            saveTasks()
            displayTasks()

        });


const taskText = document.createElement("span");
taskText.textContent = task.text;
if (task.completed) {
    taskText.classList.add("completed");
}

li.appendChild(checkbox);

li.appendChild(taskText);
li.appendChild(deleteButton);
taskList.appendChild(li);



    }
}

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;
        displayTasks();
    });
});


clearCompletedButton.addEventListener("click", function() {
const activeTasks = tasks.filter(function(task) {
    return task.completed === false;
});
tasks.length = 0;
tasks.push(...activeTasks);
saveTasks()
displayTasks()
});
displayTasks();