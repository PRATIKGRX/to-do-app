var tasks = ["task1", "task2","task3"];
displayOutput();
function displayOutput()
{
    var tasksString = "";
    for (let i = 0; i < tasks.length; i++) {
        tasksString = tasksString + `
                    <tr>
                        <td>`+(i+1)+`</td>
                        <td>`+tasks[i]+`</td>
                        <td>
                            <button>Edit</button>
                            <button onclick="deleteTask(`+i+`)">Delete</button>
                        </td>
                    </tr>
        `;
    }
    document.getElementById("task_body").innerHTML=tasksString;
}
const addTask=(event)=>
{
    event.preventDefault();
    var value=document.getElementById("add_text_input").value;
    if(String(value).trim()=="")
    {
        alert("should not be empty");
        return;
    }
    document.getElementById("add_text_input").value="";
    tasks.push(value);
    displayOutput();
}
function deleteTask(index)
{
    var result=confirm("Are you sure ?");
    if(result)
    {
        tasks.splice(index,1);
        displayOutput();
        alert("Delete Successfully")
    }
}


