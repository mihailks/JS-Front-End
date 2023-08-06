function solve(input) {
    const n = parseInt(input[0]);
    const tasks = {};

    function calculatePointsByStatus(status) {
        return Object.values(tasks).reduce((acc, curr) => {
            return acc + curr.filter(task => task.status === status).reduce((total, task) => total + task.estimatedPoints, 0);
        }, 0);
    }


    for (let i = 1; i <= n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input[i].split(':');
        if (!tasks[assignee]) {
            tasks[assignee] = [];
        }
        tasks[assignee].push({taskId, title, status, estimatedPoints: parseInt(estimatedPoints)});
    }


    for (let i = n + 1; i < input.length; i++) {
        const [command, assignee, idOrIndex, newStatus] = input[i].split(':');
        if (command === 'Add New') {
            const [taskId, title, status, estimatedPoints] = [idOrIndex, newStatus, input[i + 1], input[i + 2]];
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                tasks[assignee].push({taskId, title, status, estimatedPoints: parseInt(estimatedPoints)});
            }
        } else if (command === 'Change Status') {
            const taskId = idOrIndex;
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                const taskIndex = tasks[assignee].findIndex(task => task.taskId === taskId);
                if (taskIndex === -1) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    tasks[assignee][taskIndex].status = newStatus;
                }
            }
        } else if (command === 'Remove Task') {
            const index = Number(idOrIndex);
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else if (index < 0 || index >= tasks[assignee].length) {
                console.log('Index is out of range!');
            } else {
                tasks[assignee].splice(index, 1);
            }
        }
    }

    console.log(`ToDo: ${calculatePointsByStatus('ToDo')}pts`);
    console.log(`In Progress: ${calculatePointsByStatus('In Progress')}pts`);
    console.log(`Code Review: ${calculatePointsByStatus('Code Review')}pts`);
    console.log(`Done Points: ${calculatePointsByStatus('Done')}pts`);

    const donePoints = calculatePointsByStatus('Done');
    const otherPoints = calculatePointsByStatus('ToDo') + calculatePointsByStatus('In Progress') + calculatePointsByStatus('Code Review');

    if (donePoints >= otherPoints) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}

solve([
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
);

solve([
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
);

