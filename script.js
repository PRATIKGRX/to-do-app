
const tasks = JSON.parse(localStorage.getItem("tasks")) || ["task","task1","task2"];
var globalIndex;
const alertText = document.getElementById("alert");
let editInput = document.getElementById("taskEdit");
const userInput = document.getElementById("taskInput");
userInput.addEventListener('focus',()=>{
    alertText.style.display = 'none';
});
editInput.addEventListener('focus',()=>{
    alertText.style.display = 'none';
});
showTask();
function showTask(){
    let taskString = "";
    for(let i = 0; i<tasks.length; i++){
        taskString += `<tr>
                    <td class="pl-2"><input type="radio" name="" onclick="underlineText(`+i+`)"></td>
                    <td class="pl-2" id="task-${i}">`+tasks[i]+`</td>
                    <td class="w-[100px] flex justify-between p-[4px]">
                        <button onclick="edit(`+i+`)" class="text-green-500 rounded-lg p-[4px] transition duration-500 hover:bg-green-500 hover:text-white">Edit</button>
                        <button onclick="deleteTask(`+i+`)" class="text-red-500 rounded-lg  p-[2px] transition duration-500 hover:bg-red-500 hover:text-white">Delete</button>
                    </td>
                </tr>`;
        
    }
    document.getElementById("taskContainer").innerHTML = taskString;
}

function addTask(event){
    let taskInput = document.getElementById("taskInput").value;
    
    event.preventDefault();
    if(String(taskInput.trim()) == ""){
        
        alertText.style.display = "block";
        
        return;
    }
    
    
    console.log(taskInput);
    tasks.push(taskInput);
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
    document.getElementById("taskInput").value = "";

}
function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
}
function edit(index){
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block"; 
    document.getElementById("taskEdit").value= tasks[index];
    globalIndex=index;
    
}
function updateTask(event){
    event.preventDefault();
    let newTaskName = document.getElementById("taskEdit").value;
    if(String(newTaskName.trim()) == ""){
        alertText.style.display = "block";
        return;
    }
    tasks[globalIndex]=newTaskName;
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none"; 
}