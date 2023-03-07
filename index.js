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
    message: "Please include details of your project tests here",
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
`

function generateLicense(){
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache-2.0") {
    return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Mozilla 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

