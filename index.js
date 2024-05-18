import inquirer from "inquirer";
let todos = ["Job", "Coding", "Teacing"];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"],
        });
        if (answer.option === "Add") {
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add a Task in your todo list",
                name: "addmore",
            });
            todos.push(addMore.addmore);
            todos.forEach((addMore) => console.log(addMore));
        }
        if (answer.option === "Update") {
            let UpdateMore = await inquirer.prompt({
                type: "list",
                message: "Update task in the list",
                name: "todos",
                choices: todos.map((item) => (item))
            });
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTask = todos.filter((val) => val !== UpdateMore.todos);
            todos = [...newTask, addMore.todo];
        }
        if (answer.option === "View") {
            console.log("*****TO DO LIST *****");
            console.log(todos);
            console.log("*********************");
        }
        if (answer.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "Delete task from the list",
                name: "deletetask",
                choices: todos.map((item) => (item))
            });
            let newTask = todos.filter((val) => val !== deleteTask.deletetask);
            todos = [...newTask];
        }
        let task = await inquirer.prompt({
            name: 'runtask',
            type: 'confirm',
            message: "Do you want to run the program ?",
            default: "false"
        });
        console.log(todos);
    } while (true);
}
createTodo(todos);
