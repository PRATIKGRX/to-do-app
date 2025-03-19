var tasks = ["task", "taslk1", "taslk2"];
showTask();
function showTask(){
    var stringTask = "";
    for(var i = 0; i < tasks.length; i++){
        stringTask += ` <tr>
                <td>`+(i+1)+`</td>
                <td>`+tasks[i]+`</td>
                <td><Button onclick="editTask(`+i+`)">Edit</Button>
                <button>Delete</button></td>
            </tr>`
    }
    document.getElementById("tableBody").innerHTML = stringTask;
}
function addTask(event){
    event.preventDefault();
    var userInput = document.getElementById("userInput").value;
    if(String(userInput).trim() == ""){
        alert("Please enter a task");
        return;
    }
    tasks.push(userInput);
    document.getElementById("userInput").value = "";
    showTask();
}
editTask(index){
    
}