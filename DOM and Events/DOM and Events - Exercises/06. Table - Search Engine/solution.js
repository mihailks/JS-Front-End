function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const search = document.querySelector('#searchField');

        const cells = Array.from(document.querySelectorAll("tbody td"));
        
        cells.forEach(element => {
            element.parentElement.classList.remove('select')
        });
        cells.forEach(cell => {
            if (cell.textContent.includes(search.value)) {
                cell.parentElement.classList.add('select')

            }
        })
        search.value = "";
    }
}