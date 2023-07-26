function register(inputArray) {
    let register = {};
    for (let studentInfo of inputArray) {
        let [studentName,studentGrade, avgGrade] = studentInfo.split(', ');
        let currentName = currentInfo(studentName);
        let currentGrade = currentInfo(studentGrade);
        let currentAverage = currentInfo(avgGrade)


        if (currentAverage >= 3) {
            currentGrade++;
        } else {
            continue;
        }

        if (!register.hasOwnProperty(currentGrade)) {
            register[currentGrade] = {'students': [], 'score': []};
        }
        register[currentGrade].students.push(currentName);
        register[currentGrade].score.push(currentAverage);
    }


    function currentInfo(strInfo) {
        return strInfo.split(' ').pop();
    }

    for (const [key, value] of Object.entries(register)) {
        console.log(`${key} Grade\nList of students: ${value.students.join(', ')}\nAverage annual score from last year: ${(value.score.reduce((a, b) => Number(a) + Number(b), 0) / value.score.length).toFixed(2)}\n`);
    }
}

register([ "Student name: Mark, Grade: 8, Graduated with an average score: 4.75", "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66", "Student name: George, Grade: 8, Graduated with an average score: 2.83", "Student name: Steven, Grade: 10, Graduated with an average score: 4.20", "Student name: Joey, Grade: 9, Graduated with an average score: 4.90", "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" ]);