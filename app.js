const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const goalsList = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElement.value;
    const listItemElement = document.createElement('li');
    listItemElement.textContent = enteredValue;
    goalsList.appendChild(listItemElement);
    inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal);
