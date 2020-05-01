const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")



inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project-name"
    },
    {
        type: "input",
        message: "Tell me about your project",
        name: "description",
    },
    {
        type: "list",
        message: "What did you use for install?",
        name: "install",
        choices: [
            "npm i",
            "other",
        ]
    }
]);

function writeToFile(fileName, data) {
}

function init() {

}

init();