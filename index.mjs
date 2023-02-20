import inquirer from 'inquirer';
import fs from "fs/promises";

const { description, installation, usage, contributing, tests } = await inquirer
    .prompt([
        {
            name: 'description',
            message: "Write a description of your project",
            type: 'input',
        },
        {
            name: 'installation',
            type: 'input',
            default() {
                return 'Doe';
            },
            message: "Write a description of your installation instructions",
        },
        {
            name: 'usage',
            type: 'input',
            default() {
                return 'Doe';
            },
            message: "Write a description of your usage information",
        },
        {
            name: 'contributing',
            type: 'input',
            default() {
                return 'Doe';
            },
            message: "Write include details of those who have contributed to your project here",
        },
        {
            name: 'tests',
            type: 'input',
            default() {
                return 'Doe';
            },
            message: "Write include details of those who have contributed to yourr project here",
        },
    ])

let readmeText = 

`# Project Description
${description}

# Installation
${installation}

# Usage
${usage}

# Contributing
${contributing}

# Tests
${tests}

`






// ## The second largest heading

// ###### The smallest heading




await fs.writeFile("README.md", readmeText)
console.log('success!');