// TODO: Include packages needed for this application
npm install

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
inquirer
  .prompt([
  {
    type: "input",
    message: "Provide a short description of your application.",
    name: 
  },
  {
    "Provide  installation instructions."
  },
  {
    "Provide instructions and examples for use."
  },
  {
    "Choose a license."
  },
  {
    "Provide guidlines for other developers who wish to contribute to your application.",
  }, 
  {
    "Include any tests written for your application and how to run them.",
  },
  { 
  "Provide your github username for anyone with questions."
  },
  {
  "Provide an email address and instructions on how to reach you with additionasl questions."
  },
  {
  "Include any tests written for your application and how to run them.",
  }
])
.then((answers) => {
  // Use user feedback for... whatever!!
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});


// TODO: Create a function to write README file
function writeToFile(ReadMe, data) {}

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
