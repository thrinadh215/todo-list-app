function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);

    taskInput.value = "";

    li.onclick = function() {
        this.classList.toggle("completed");
    };
}
