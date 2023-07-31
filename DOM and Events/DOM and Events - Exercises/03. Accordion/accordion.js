function toggle() {
    const button = document.querySelector('.button');
    const div = document.querySelector('#extra');
    
    if (button.textContent === 'Less') {
        div.style.display = 'none';
        button.textContent = 'More'

    } else {
        div.style.display = 'block';
        button.textContent = 'Less'
    }
}