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
        type: 'input',
        message: 'give installation instruction for the project',
        name: 'installationInstructions',
      }, 
      {
        type: 'input',
        message: 'give usage information for the project',
        name: 'usageInformation',
      }, 
      {
        type: 'input',
        message: 'give contribution guidelines for the project',
        name: 'contribution-guidelines',
      }, 
      {
        type: 'input',
        message: 'give test instructions for the project',
        name: 'test-instructions',
      }, 
      {
        type: 'list',
        message: 'choose a license for the project',
        name: 'license',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None']
      }, 
      {
        type: 'input',
        message: 'give github username',
        name: 'git_hub',
      }, 
      {
        type: 'input',
        message: 'give email address',
        name: 'email',
      }, 
];

// TODO: Create a function to write README file (DONE)
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app (DONE)
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('responses', responses);
        writeToFile('README.md', genReadme(responses ))
    })
}
// Function call to initialize app
init();
