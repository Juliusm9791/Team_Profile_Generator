// Packages needed for this application
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

const generateFile = require("./utils/generateHTML.js")

const fileName = "index.html";

const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const buildTeamQuestion = require("./utils/addTeamQuestion");

const team = [];
let employeeRole = "Manager";
let keepBuilding = true;

async function buildTeam() {
    let manager = new Manager();
    console.clear(); 
    manager.getRoleMan(employeeRole);
    await manager.getName(employeeRole);
    await manager.getId(employeeRole);
    await manager.getEmail(employeeRole);
    await manager.officeNumber();
    team.push(manager);

    let build = await inquirer.prompt(buildTeamQuestion);
    continueBuild(build.occupation);

    while (keepBuilding) {
        if (employeeRole === "Engineer") {
            let engineer = new Engineer();
            console.clear();
            engineer.getRoleEng(employeeRole);
            await engineer.getName(employeeRole);
            await engineer.getId(employeeRole);
            await engineer.getEmail(employeeRole);
            await engineer.getGithub();
            team.push(engineer);
            build = await inquirer.prompt(buildTeamQuestion);
            continueBuild(build.occupation);

        } else {
            let intern = new Intern();
            console.clear();
            intern.getRoleInt(employeeRole);
            await intern.getName(employeeRole);
            await intern.getId(employeeRole);
            await intern.getEmail(employeeRole);
            await intern.getSchool();
            team.push(intern);
            build = await inquirer.prompt(buildTeamQuestion);
            continueBuild(build.occupation);
        }
    }
    // console.log(team)
    writeToFile(team)
}

function continueBuild(build) {
    switch (build) {
        case "Finish building my team":
            keepBuilding = false;
            break;
        case "Engineer":
            employeeRole = "Engineer"
            break;
        case "Intern":
            employeeRole = "Intern"
            break;
    }
}

buildTeam();

function writeToFile(team) {
    fs.writeFile(path.join(__dirname, "dist", fileName), generateFile(team), err => {
        err ? console.log(err) : console.log('The file has been saved!');
    });
}