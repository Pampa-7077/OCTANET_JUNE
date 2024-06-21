function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.className = 'task-action';
    completeButton.onclick = function() {
        completeTask(this);
    };

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'task-action';
    editButton.onclick = function() {
        editTask(this);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function completeTask(button) {
    const completedTaskList = document.getElementById('completedTaskList');
    const listItem = button.parentNode;

    listItem.removeChild(button.nextSibling); // Remove the edit button
    listItem.removeChild(button); // Remove the complete button

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'task-action';
    deleteButton.onclick = function() {
        deleteTask(this);
    };

    listItem.appendChild(deleteButton);
    listItem.classList.add('completed');
    completedTaskList.appendChild(listItem);
}

function editTask(button) {
    const listItem = button.parentNode;
    const taskSpan = listItem.firstChild;
    const taskText = taskSpan.innerText;

    const newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}
