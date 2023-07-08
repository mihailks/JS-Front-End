function calculateSprintPoints(sprintData) {
    const statusPoints = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    };
    const assignees = {};

    // Parse the initial state of the Sprint board
    const n = sprintData[0];
    for (let i = 1; i <= n; i++) {
        let [assignee, taskId, title, status, estimatedPoints] = sprintData[i].split(':');
        if (!assignees.hasOwnProperty(assignee)) {
            assignees[assignee] = [];
        }
        assignees[assignee].push({
            taskId,
            title,
            status,
            estimatedPoints: parseInt(estimatedPoints)
        });
        statusPoints[status] += parseInt(estimatedPoints);
    }

    // Process the commands to change the state of the tasks
    for (let i = n + 1; i < sprintData.length; i++) {
        const [command, ...args] = sprintData[i].split(':');
        const assignee = args[0];
        if (!assignees.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }

        switch (command) {
            case 'Add New':
                let [newAssignee, taskId, title, status, estimatedPoints] = args;
                assignees[newAssignee].push({
                    taskId,
                    title,
                    status,
                    estimatedPoints: parseInt(estimatedPoints)
                });
                statusPoints[status] += parseInt(estimatedPoints);
                break;
            case 'Change Status':
                let [taskId, newStatus] = args;
                let taskIndex = assignees[assignee].findIndex(task => task.taskId === taskId);
                if (taskIndex === -1) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    continue;
                }
                let task = assignees[assignee][taskIndex];
                statusPoints[task.status] -= task.estimatedPoints;
                task.status = newStatus;
                statusPoints[newStatus] += task.estimatedPoints;
                break;
            case 'Remove Task':
                let index = parseInt(args[1]);
                if (index < 0 || index >= assignees[assignee].length) {
                    console.log('Index is out of range!');
                    continue;
                }
                let removedTask = assignees[assignee].splice(index, 1)[0];
                statusPoints[removedTask.status] -= removedTask.estimatedPoints;
                break;
            default:
                console.log(`Invalid command: ${command}`);
        }
    }

    // Calculate the total points for all types of tasks
    const totalToDoPoints = statusPoints['ToDo'];
    const totalInProgressPoints = statusPoints['In Progress'];
    const totalCodeReviewPoints = statusPoints['Code Review'];
    const totalDonePoints = statusPoints['Done'];

    // Print the total points for each type of task
    console.log(`ToDo: ${totalToDoPoints}pts`);
    console.log(`In Progress: ${totalInProgressPoints}pts`);
    console.log(`Code Review: ${totalCodeReviewPoints}pts`);
    console.log(`Done Points: ${totalDonePoints}pts`);

    // Determine whether the Sprint was successful or not
    const combinedPoints = totalToDoPoints + totalInProgressPoints + totalCodeReviewPoints;
    if (totalDonePoints >= combinedPoints) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}

// Example usage
const sprintData = [
    3,
    'John:task1:Task 1:ToDo:5',
    'John:task2:Task 2:In Progress:3',
    'Alice:task3:Task 3:Code Review:2',
    'Change Status:John:task1:Done',
    'Remove Task:John:1',
    'Add New:Alice:task4:Task 4:ToDo:4'
];
calculateSprintPoints(sprintData);


parseInput([
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

