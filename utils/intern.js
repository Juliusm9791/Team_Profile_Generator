const inquirer = require("inquirer");
const Employee = require("./employee")

class Intern extends Employee {
    constructor(role, employeeName, id, email, school) {
        super(role, employeeName, id, email)
        this.gitHub = school;
    }

    async getSchool() {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: "What is Intern’s school?",
                name: 'school',
            },]);
            console.log("")
        this.school = answ.school;
    }
}

module.exports = Intern;
