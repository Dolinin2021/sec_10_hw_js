const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

function resetValue(elem)
{
  elem.value = "";
}

function addRecord(event){
  if (this.value.length === 0) {
    return;
  }
  if (event.keyCode == 13) {
    console.log(this.value);
    tasksList.insertAdjacentHTML('beforeEnd',
    `<div class="task">
      <div class="task__title">`+ this.value +`</div>
      <a href="#" class="task__remove">&times;</a>
    </div>`)
    resetValue(input);
    event.preventDefault();
  }
};

function deleteRecord(event) {
  if (event.target.className == 'task__remove') {
    let task = event.target.closest('.task');
    task.remove();
  }
}

input.addEventListener('keyup', addRecord);
tasksList.addEventListener('click', deleteRecord);
