const clr = document.querySelector('#clear');
clr.addEventListener('click', function() {
    document.querySelector('#todoList').innerHTML = '';
})

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        
        // Create a span to hold the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            if (editButton.textContent === "Edit") {
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = taskSpan.textContent;
                listItem.replaceChild(editInput, taskSpan);
                editButton.textContent = "Save";
            } else {
                const editInput = listItem.querySelector("input");
                taskSpan.textContent = editInput.value.trim();
                listItem.replaceChild(taskSpan, editInput);
                editButton.textContent = "Edit";
            }
        };
        
        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            listItem.remove();
        };

        // Append buttons to the list item
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Append list item to the todo list
        document.getElementById("todoList").appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}