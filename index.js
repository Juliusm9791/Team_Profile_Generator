// Packages needed for this application
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// Array of questions for user input
const questions = require("./utils/questionsManager.js");
const questions = require("./utils/questionsEngineer.js");
const questions = require("./utils/questionsIntern.js");

// Function for creating file content
const generateFile = require("./utils/generateHTML.js")

const fileName = ("index.html");

// Writes to HTML file
function writeToFile() {
    inquirer.prompt(questions)
        .then(answers => {
            fs.writeFile(path.join(__dirname,"dist",fileName), generateFile(answers), err => {
                err ? console.log(err) : console.log('The file has been saved!');
            });
        });
}

writeToFile();