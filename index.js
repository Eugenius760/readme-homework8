const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const markDown = require("./utils/generateMarkdown")
const axios = require("axios")

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
            type: "input",
            message: "What did you use for install?",
            name: "install",
            default: "npm i"
            // choices: [
            //     "npm i",
            //     "other",
            // ]
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
        },
        {
            type: "input",
            message: "Use this to test the program.",
            name: "test",
            default: "npm test",
            // choices: [
            //     "npm test"
            // ]
        },
        {
            type: "input",
            message: "Enter your github URL.",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email"
        },
        {
            type: "input",
            message: "How will the user use your program?",
            name: "usage"
        }

    ])
    // .then(function(data) {
    //     const gitURL = `https://api.github.com/users/${data.github}`;

    //     axios.get(gitURL).then(function(res) {
    //         const gitPic = res.data.avatar_url;
    //         const user = res.data.url;

    //         generateMarkdown(data, gitPic, user);
    //     })
    // })
}

function generateMarkdown(data) {
    return `
  # ${data.title}
  [![GitHub license](https://img.shields.io/badge/license-${data.license}-purple.svg)](https://github.com/${data.github})

  ## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Run ${data.install} to install the necessary dependencies.

## Usage

${data.usage}

## License

This project is licenesed under the ${data.license} license.

## Contributing

The following contributed to the end product of this project:

https://github.com/${data.contributers}

## Tests

Run ${data.test} to test the program

## Questions

If you have any questions or concerns, please contact me at ${data.email}.
Also find me at [My GitHub](https://github.com/${data.github})
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