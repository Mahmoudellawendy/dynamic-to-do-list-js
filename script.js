function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');  // ✅ this is the correct way

    removeButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}
