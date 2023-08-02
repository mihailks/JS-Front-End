function solve() {

    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    const bussInfoBox = document.querySelector('#info .info');
    let busStopInfo = {
        name: "",
        next: "depot"
    };

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
            .then((res) => res.json())
            .then(busStop => {
                busStopInfo = busStop
                departButton.disabled = true;
                arriveButton.disabled = false;
                bussInfoBox.textContent = `Next stop ${busStopInfo.name}`;
            })
            .catch(() => {
                departButton.disabled = true;
                arriveButton.disabled = true;
                bussInfoBox.textContent = `Error`;
            });
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;
        bussInfoBox.textContent = `Arriving at ${busStopInfo.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();