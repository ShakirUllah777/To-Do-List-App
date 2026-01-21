const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyText = document.getElementById('emptyText');

function updateEmptyText() {
    emptyText.style.display = taskList.children.length === 0 ? 'block' : 'none';
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.onclick = () => li.classList.toggle('completed');

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '✏️';
    editBtn.onclick = () => {
        const newText = prompt('Edit task', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = () => {
        li.remove();
        updateEmptyText();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = '';
    updateEmptyText();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

updateEmptyText();
