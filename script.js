const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        taskList.removeChild(event.target);
    }
});

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');

    Array.from(tasks).forEach(function(task) {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});