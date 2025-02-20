const addButton = document.getElementById('add');
const textInput = document.getElementById('textInput');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    let textInputValue = textInput.value;
    if (textInputValue) {
        createItem(textInputValue);
        textInput.value = '';
    }
});

function createItem(text) {
    const item = document.createElement('li');
    list.prepend(item);
    item.appendChild(document.createTextNode(text));

    const checkbox = addCheckbox(item);
    const removeButton = addRemoveButton(item);

    checkbox.addEventListener('click', () => {
        throughLine(item);
    });

    removeButton.addEventListener('click', () => {
        item.remove();
    });
}

function addRemoveButton(item) {
    const removeButton = document.createElement('button');
    item.appendChild(removeButton);
    removeButton.classList.add('remove');
    removeButton.textContent = 'x';
    return removeButton;
}

function addCheckbox(item) {
    const checkbox = document.createElement('input');
    item.appendChild(checkbox);
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    return checkbox;
}

function throughLine(item) {
    item.classList.toggle('checked');
}