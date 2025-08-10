// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Select important elements from the HTML
    const addButton = document.getElementById('add-task-btn');   // "Add Task" button
    const taskInput = document.getElementById('task-input');     // Input field
    const taskList = document.getElementById('task-list');       // List to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input text

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // When the "Remove" button is clicked, delete the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Add the button to the list item, then add the item to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add task when user presses "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
