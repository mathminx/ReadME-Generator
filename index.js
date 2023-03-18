// Import packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


//const generateMarkdown = require ("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Input a short description of your application.",
    name: "description",
  },
  {
    type: "input",
    message: "Provide any installation instructions.",
    name: "installInstr",
  },
  {
    type: "input",
    message: "Provide instructions for use and examples.",
    name: "useInstr"
  },
  {
    type: "input",
    message: "Choose a license.",
    name: "license",
  },
  {
    type: "input",
    message: "Provide guidelines for other developers who wish to contribute to your application.",
    name: "contribute",
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
    message: "Provide an email address and instructions on how to reach you with additionasl questions.",
    name: "email",
  }
];


// Function to write README file
function writeToFile(ReadMe, userResponses) {
  fs.writeFile("readMe.md", JSON.stringify(userResponses), (err)=>
    err ? console.error(err) : console.log(userResponses)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      writeToFile("readMe.md", userResponses/*, generateMarkdown({...userResponses})*/);
  });
}

// Function call to initialize app
init();
