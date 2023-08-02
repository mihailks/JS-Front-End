async function getInfoAsync() {

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    const stopIdInput = document.getElementById('stopId');
    const stopNameContainer = document.getElementById('stopName');
    const busesContainer = document.querySelector('#buses');

    const stopId = stopIdInput.value;

    busesContainer.innerHTML = "";

    try {
        const response = await fetch(`${BASE_URL}${stopId}`);
        const busInfo = await response.json();

        const {name, buses} = busInfo;

        stopNameContainer.textContent = name;

        for (const busId in buses) {
            const li = document.createElement('li')
            li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`
            busesContainer.appendChild(li);
        }

    } catch (_) {
        stopNameContainer.textContent = 'Error'
    }
}