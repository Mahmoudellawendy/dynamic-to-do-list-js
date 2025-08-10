// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');    // Add Task button
    const taskInput = document.getElementById('task-input');      // Input field
    const taskList = document.getElementById('task-list');        // Unordered list

    // Define the function to add a task
    function addTask() {
        // Get the text from the input and trim spaces
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Correct way to add class

        // When Remove is clicked, delete the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Add the button to the task item, and add the item to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // When Add Task button is clicked, call addTask
    addButton.addEventListener('click', addTask);

    // When Enter key is pressed in input, call addTask
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
