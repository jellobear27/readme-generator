// Includes packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Inquirer questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "describe the functionality and motivation of this project.",
  },
  {
    type: "input",
    name: "usage",
    message: "State the languages or technologies used in the project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "select a license applicable to this project.",
    choices: [
      "MIT",
      "APACHIE2.0",
      "Boost1.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "The Unlicense",
      "none",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If you created an application or package and would like other developers to contribute it? Include guidelines for how to do so.",
  },
  {
    type: "input",
    name: "name",
    message: "Type your full name.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
];

// created a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created README.md!");
    }
  });
}

// Created a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markDownContent = generateMarkdown(answers);
    writeToFile("README.md", markDownContent);
  });
}

// Function call to initialize app
init();
