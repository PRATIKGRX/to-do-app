// Modify tasks structure to include a "checked" property
const tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { text: "task", checked: false },
    { text: "task1", checked: false },
    { text: "task2", checked: false }
  ];
  
  var globalIndex;
  const alertText = document.getElementById("alert");
  let editInput = document.getElementById("taskEdit");
  const userInput = document.getElementById("taskInput");
  
  userInput.addEventListener('focus', () => {
    alertText.style.display = 'none';
  });
  
  editInput.addEventListener('focus', () => {
    alertText.style.display = 'none';
  });
  
  // Hide edit form on page load
  document.getElementById("edit").style.display = "none";
  // Hide alert on page load
  alertText.style.display = "none";
  
  showTask();
  
  function showTask() {
    let taskString = "";
    for (let i = 0; i < tasks.length; i++) {
      // Set the checked attribute based on task state
      const checkedAttribute = tasks[i].checked ? 'checked' : '';
      // Add text-decoration if checked
      const textStyle = tasks[i].checked ? 'line-through' : 'none';
      
      taskString += `<tr>
     
                  <td class="pl-2"><input id="input-${i}" type="checkbox" ${checkedAttribute} onclick="toggleTaskCheck(${i})"></td>
                  <td class="pl-2" id="task-${i}" style="text-decoration: ${textStyle}"><label for="input-${i}"> ${tasks[i].text}</label></td>
                  <td class="w-[100px] flex justify-between p-[4px]">
                      <button onclick="edit(${i})" class="text-green-500 rounded-lg p-[4px] transition duration-500 hover:bg-green-500 hover:text-white">Edit</button>
                      <button onclick="deleteTask(${i})" class="text-red-500 rounded-lg p-[2px] transition duration-500 hover:bg-red-500 hover:text-white">Delete</button>
                  </td>
              </tr>`;
    }
    document.getElementById("taskContainer").innerHTML = taskString;
  }
  
  // New function to toggle checked state
  function toggleTaskCheck(index) {
    tasks[index].checked = !tasks[index].checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTask();
  }
  
  // Function to underline text (replaced by toggleTaskCheck)
  function underlineText(index) {
    // This function is no longer needed
  }
  
  function addTask(event) {
    let taskInput = document.getElementById("taskInput").value;
    
    event.preventDefault();
    if (String(taskInput.trim()) == "") {
      alertText.style.display = "block";
      return;
    }
    
    console.log(taskInput);
    // Add task with checked property
    tasks.push({ text: taskInput, checked: false });
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
    document.getElementById("taskInput").value = "";
  }
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
  }
  
  function edit(index) {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block"; 
    document.getElementById("taskEdit").value = tasks[index].text;
    globalIndex = index;
  }
  
  function updateTask(event) {
    event.preventDefault();
    let newTaskName = document.getElementById("taskEdit").value;
    if (String(newTaskName.trim()) == "") {
      alertText.style.display = "block";
      return;
    }
    tasks[globalIndex].text = newTaskName;
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    showTask();
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none"; 
  }