function attachGradientEvents() {
    const gradient = document.querySelector("#gradient");
    const result = document.querySelector("#result");

    gradient.addEventListener('mousemove', (e)=>{
        let percent = Math.trunc(e.offsetX / (e.target.clientWidth) * 100);
        document.getElementById('result').textContent = percent + "%";
    })

    gradient.addEventListener('mouseout', () => {
        result.textContent = ''
    });

}