// Import packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Input a short description of your application.",
    name: "description",
  },
  {
    type: "input",
    message: "Provide any installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions for use and examples.",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Choose a license.",
    name: "license",
    choices: ["Apache 2.0", "Boost", "Eclipse", "MIT", "Mozilla"],
  },
  {
    type: "input",
    message: "Provide guidelines for other developers who wish to contribute to your application.",
    name: "contributing",
  }, 
  {
    type: "input",
    message: "Include any tests written for your application and how to run them.",
    name: "tests",
  },
  { 
    type: "input",
    message: "Provide your github username for anyone with questions.",
    name: "githubUserName",
  },
  {
    type: "input",
    message: "Provide an email address and instructions on how to reach you with additional questions.",
    name: "email",
  }
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
  err ? console.log(err) : console.log("Creating your README..."));
}

// Function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("SampleREADME.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
