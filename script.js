var tasks = JSON.parse(localStorage.getItem("tasks"))??[];
console.log(tasks);
var globalIndex;
displayOutput();
function displayOutput()
{
    var tasksString     = "";
    for (let i = 0; i < tasks.length; i++) {
        tasksString = tasksString + `
                    <tr>
                        <td>`+(i+1)+`</td>
                        <td>`+tasks[i]+`</td>
                        <td>
                            <button onclick=editTask(`+i+`)>Edit</button>
                            <button onclick="deleteTask(`+i+`)">Delete</button>
                        </td>
                    </tr>
        `;
    }
    document.getElementById("task_body").innerHTML=tasksString;
}

function addTask(event){
    event.preventDefault();
    var userVal = document.getElementById("add_text_input").value;
    if(String(userVal).trim=""){
        alert("Please enter the valid text:");
        return;
    }
    document.getElementById("add_text_input").value="";
    tasks.push(userVal);
    displayOutput();
    updateLocalStorage();
}

function deleteTask(index){
    var confirmCheck=confirm("are you sure:");
    if(confirmCheck){
        tasks.splice(index,1);
        displayOutput();
        alert("delete successfully:")
    }
}
function editTask(index){
    document.getElementById("addForm").style.display="none";
    document.getElementById("editForm").style.display="block";
    var value=tasks[index];
    document.getElementById("edit_text_input").value=value;
    globalIndex=index;
}


function updateTask(event)
{
    event.preventDefault();//prevent to refresh the page
    var userVal = document.getElementById("edit_text_input").value;
    var index=globalIndex;
    tasks[index]=userVal;
    displayOutput();
    updateLocalStorage();
    document.getElementById("addForm").style.display="block";
    document.getElementById("editForm").style.display="none";
    alert("Task Edit Successfully")
}


function updateLocalStorage()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));
}