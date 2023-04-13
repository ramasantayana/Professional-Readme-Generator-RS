// TODO: Include packages needed for this application (DONE)
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the project description?',
        name: 'description', 
      }, 
      {
        type: 'installation-instructions',
        message: 'give installation instruction for the project',
        name: 'installation',
      }, 
      {
        type: 'usage-information',
        message: 'give usage information for the project',
        name: 'usage',
      }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
