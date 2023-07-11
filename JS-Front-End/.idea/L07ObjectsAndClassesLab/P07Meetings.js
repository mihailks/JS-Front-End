function setMeeting(input) {
    let meetings = {};

    for (let inputElement of input) {
            let info = inputElement.split(" ");
            let day = info[0];
            let person = info[1];

        if(meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

setMeeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
setMeeting(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);