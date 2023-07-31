function addItem() {
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');

    const option = document.createElement('option');

    option.textContent = textInput.value;
    option.setAttribute('value', valueInput.value);

    document.querySelector("#menu").appendChild(option)
    
    textInput.value = "";
    valueInput.value = "";

}