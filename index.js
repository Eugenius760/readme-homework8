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
    },
    {
        type: "list",
        message: "What license did you use?",
        name: "license",
        choices: [
            "MIT",
            "GNU AGPLv3",
            "Apache 2.0",
            "The Unlicense",
        ]
    }

]);

function writeToFile(fileName, data) {
}

function init() {

}

init();