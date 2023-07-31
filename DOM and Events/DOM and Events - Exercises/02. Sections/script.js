function create(words) {
    
    words.forEach(word => {
        const div = document.createElement('div');
        const p = document.createElement('p');

        p.textContent = word;
        p.style.display = "none";

        div.appendChild(p)
        document.querySelector('#content').appendChild(div)
        
        document.querySelector('#content')
            .addEventListener('click', (e) => {
                e.target.querySelector('p').style.display = 'block'
            })
    })
    
}