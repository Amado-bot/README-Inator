const fs = require('fs')
const inquirer = require('inquirer')
const generateReadme = require('./readme-template');
const writeFile = require('./generate-readme');



const promptUser = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the Title of your project? (Required)',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Choose a license',
      choices: ['NONE', 'MIT', 'ISC', 'Open', 'Academic']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'please provide installation instructions!'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide Usage Information!'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who worked on this project?(Credits)'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add contributing guidelines'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Add tests for your application'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username PLZ (Required)'
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Provide email address in case the user has questions.'
    }
  ]);
};
function init() {
promptUser()
  .then(answers => {
    const data = generateReadme(answers)
    writeFile(data);
  });
};

init();