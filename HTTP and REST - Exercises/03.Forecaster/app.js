function attachEvents() {
    //FIXME: HTML createElement
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations"

    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }

    document
        .querySelector("#submit")
        .addEventListener("click", getWeatherDataForLocation);

    async function getWeatherDataForLocation() {
        const locationInput = document.querySelector('#location').value;
        const response = await (
            await fetch(BASE_URL)
        ).json();

        const location = response
            .find(location => location.name.toLowerCase() === locationInput.toLowerCase());

        const foreCastContainer = document.querySelector("#forecast");
        foreCastContainer.style.display = 'block';


        const currentConditionResponse = await
            (await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`))
                .json()
        

        const threeDayConditionResponse = await
            (await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`))
                .json()



        const currentWeatherContainer = document.createElement('div');
        currentWeatherContainer.classList.add("forecasts")
        const weatherSymbol = document.createElement('span');
        weatherSymbol.classList.add("condition", "symbol")
        weatherSymbol.textContent = weatherSymbols[currentWeatherContainer.forecast.condition];

        currentWeatherContainer.appendChild(weatherSymbol);
        foreCastContainer.appendChild(currentWeatherContainer)


    }


}

attachEvents();