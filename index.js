const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const markDown = require("./utils/generateMarkdown")

const writeToFile = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
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
        },
        {
            type: "input",
            message: "Who contributed to the project? (add github username)",
            name: "contributers"
        }

    ]);
}

function generateMarkdown(data) {
    return `
  # ${data.title}
  ## ${data.description}
  ## ${data.install}
  ## ${data.license}
  ## ${data.contributers}
  
  `;
  }

  promptUser()
    .then(function(data) {
        const readme = generateMarkdown(data);

        return writeToFile("README1.md", readme)
    })
    .then(function() {
        console.log("Successfully wrote to index.html");
      })
      .catch(function(err) {
        console.log(err);
      });

  
  module.exports = generateMarkdown;

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();