const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');

function addRecord(event){
  if (input.value.trim().length === 0) {
    return;
  }
  tasksList.insertAdjacentHTML('beforeEnd',
  `<div class="task">
    <div class="task__title">`+ input.value +`</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
  input.value = '';
  event.preventDefault();
};

function deleteRecord(event) {
  if (event.target.className == 'task__remove') {
    let task = event.target.closest('.task');
    task.remove();
  }
}

tasksList.addEventListener('click', deleteRecord);
button.addEventListener('click', addRecord);