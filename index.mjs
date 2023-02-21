import inquirer from 'inquirer';
import fs from "fs/promises";

const { title, description, installation, usage, license, contributing, tests } = await inquirer.prompt([
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
    choices: ['MIT','Apache-2.0','Mozilla'],
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
      return 'Doe';
    },
    message: "Write include details of those who have contributed to yourr project here",
  },
]);

function generateLicense(license){
  if (license === "MIT") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}.svg)](https://opensource.org/licenses/${license})`
  } else if (license === "Apache-2.0") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  } else if (license === "Mozilla") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-orange.svg)](https://opensource.org/licenses/${license})`
  }
}

let readmeText = `
# ${title}

${generateLicense(license)}

## Project Description
${description}

## Table of Contents


## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}
`

await fs.writeFile("README.md", readmeText)
console.log('success!');
