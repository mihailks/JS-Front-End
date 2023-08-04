function solve(input) {
    let horses = input.shift().split('|');

    while (input.length > 0) {
        let command = input.shift().split(' ');

        if (command[0] === 'Finish') {
            break;
        }

        switch (command[0]) {
            case 'Retake':
                let overtakingIndex = horses.indexOf(command[1]);
                let overtakenIndex = horses.indexOf(command[2]);

                if (overtakingIndex < overtakenIndex) {
                    [horses[overtakingIndex], horses[overtakenIndex]] = [horses[overtakenIndex], horses[overtakingIndex]];
                    console.log(`${command[1]} retakes ${command[2]}.`);
                }
                break;

            case 'Trouble':
                let horseIndex = horses.indexOf(command[1]);

                if (horseIndex > 0) {
                    [horses[horseIndex], horses[horseIndex + 1]] = [horses[horseIndex + 1], horses[horseIndex]];
                    console.log(`Trouble for ${command[1]} - drops one position.`);
                }
                break;

            case 'Rage':
                let index = horses.indexOf(command[1]);
                let horse = command[1];

                if (index === horses.length - 2) {
                    horses.splice(index, 1);
                    horses.splice(horses.length, 0, horse);
                } else if (index < horses.length - 2) {
                    horses.splice(index, 1);
                    horses.splice(index + 2, 0, horse);
                }
                console.log(`${command[1]} rages 2 positions ahead.`);
                break;

            case 'Miracle':
                const horseName = horses.shift();
                horses.push(horseName);
                console.log(`What a miracle - ${horses[0]} becomes first.`);
                break;

            default:
                console.log('Invalid command.');
        }
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

// solve((['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])
// );
solve((['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])
);
// solve((['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])
// );