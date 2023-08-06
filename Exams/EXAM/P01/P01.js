function solve(input) {
    let commands = input.slice();
    let n = parseInt(commands.shift());
    let riders = {};

    let i = 0;
    while (i < n) {
        let riderInfo = commands.shift().split('|');
        let rider = riderInfo[0];
        let fuel = Number(riderInfo[1]);
        let position = Number(riderInfo[2]);
        riders[rider] = {fuel, position};
        i++;
    }

    let command = commands.shift();
    while (command !== "Finish") {
        let [action, ...params] = command.split(' - ');
        let rider = params[0];
        let minFuel = Number(params[1]);
        let changedPosition = Number(params[2]);

        switch (action) {
            case 'StopForFuel':
                if (riders[rider].fuel < minFuel) {
                    riders[rider].position = changedPosition
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':


                let rider1 = rider;
                let rider2 = params[1];

                let positionOne = riders[rider1].position;
                let positionTwo = riders[rider2].position;

                if (positionOne < positionTwo) {
                    riders[rider1].position = positionTwo;
                    riders[rider2].position = positionOne;
                    console.log(`${rider1} overtook ${rider2}!`);
                }
                break;

            case 'EngineFail':
                console.log(`${rider} is out of the race because of a technical issue, ${parseInt(params[1])} laps before the finish.`);
                delete riders[rider];
                break;
        }

        command = commands.shift();
    }

    Object.keys(riders).forEach(rider => {
        console.log(`${rider}\n  Final position: ${riders[rider].position}`);
    });

}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);

// solve((["4",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|3",
//     "Jorge Lorenzo|80|4",
//     "Johann Zarco|80|2",
//     "StopForFuel - Johann Zarco - 90 - 5",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])
// );