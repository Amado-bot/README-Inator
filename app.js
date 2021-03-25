const fs = require('fs')
const inquirer = require('inquirer')
const generateReadme = require('./readme-template');
const writeFile = require('./generate-readme');



const promptUser = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the Title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide a project description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Choose a license',
      choices: ['none', 'MIT', 'ISC', 'MPL 2.0', 'GNU GPL v3']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'please provide installation instructions!',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('please provide Instructions!')
          return false;
        }
      }
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
      message: 'Enter your GitHub Username PLZ (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    }
  ]);
};
promptUser()
.then(answers => {
  const data = generateReadme(answers)
  writeFile(data);
});