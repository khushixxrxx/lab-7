const taskForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        createTask(taskContent);
        taskInput.value = '';
    }
});

function createTask(taskContent) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    taskText.textContent = taskContent;

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
