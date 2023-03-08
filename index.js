import inquirer from 'inquirer';
import fs from "fs/promises";

const { title, description, installation, usage, license, contributing, tests, questions } = await inquirer.prompt([
  // Input for project title
  {
    name: 'title',
    message: "What is the title of your project?",
    type: 'input',
  },
  // Input for description of project
  {
    name: 'description',
    message: "Write a description of your project",
    type: 'input',
  },
  // Input for installation
  {
    name: 'installation',
    type: 'input',
    default() {
    },
    message: "Write a description of your installation instructions",
  },
  // Input for usage
  {
    name: 'usage',
    type: 'input',
    default() {
    },
    message: "Write a description of your usage information",
  },
  // Options for license
  {
    name: 'license',
    type: 'list',
    message: 'Which license do you need?',
    choices: ['MIT','Apache','Mozilla'],
    filter(val){
      return(val).toLowerCase();
    },
  },
  // Input for contributing
  {
    name: 'contributing',
    type: 'input',
    default() {
    },
    message: "Write include details of those who have contributed to your project here",
  },
  // Input for tests
  {
    name: 'tests',
    type: 'input',
    default() {
    },
    message: "Please include details of your project tests here",
  },

  {
    name: 'questions',
    type: 'input',
    default() {
      return 'Doe';
    },
    message: "If users have questions about your project would you like to include the option for them to contact you? If so, add your contact details here.",
    
  },
]);



let readmeText = `

# ${title}


## Project Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${installation}

## Usage
${usage}

## License
${license}
${generateLicense(license)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}
`

function generateLicense(){
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


await fs.writeFile("README.md", readmeText)
console.log('success!');
