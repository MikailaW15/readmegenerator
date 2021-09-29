// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown') 

// TODO: Create an array of questions for user input
const questions = [
    {
                type: 'input',
                message: "What's your GitHub username?",
                name: 'username',
                default: 'MikailaW15',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid GitHub username is required.");
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What's the name of your GitHub repo?",
                name: 'repo',
                default: 'readme-generator',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid GitHub repo is required for a badge.");
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "What's the title of your project?",
                name: 'title',
                default: 'Project Title',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project title is required.");
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: "Write a description of your project.",
                name: 'description',
                default: 'Project Description',
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid project description is required.");
                    }
                    return true;
                }
            },
            {
                type: 'list',
                message: "Choose a license for your project.",
                choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
                name: 'license'
            }
        
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    let data = generateMarkdown(answers)
    console.log(data)
    fs.writeFile('README.md', JSON.stringify(data), err => {
        if (err) {
            return console.log(err);
        }
console.log('File successfully made!')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        // let data = generateMarkdown(answers)
            writeToFile(answers)
            // console.log(JSON.stringify(answers));
          });
}

// Function call to initialize app
init();
