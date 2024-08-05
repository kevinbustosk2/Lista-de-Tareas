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

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);

            taskInput.value = '';
        }
    }

        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase();
            const tasks = taskList.getElementsByTagName('li');

            Array.from(tasks).forEach(function(task) {
                const taskText = task.firstChild.textContent.toLowerCase();
                if (taskText.includes(filter)) {
                    task.style.display = '';
                } else {
                    task.style.display = 'none';
                }
            });
        });