const inquirer = require("inquirer");
const Employee = require("./employee")

class Intern extends Employee {
    constructor(role, employeeName, id, email, school) {
        super(role, employeeName, id, email)
        this.gitHub = school;
    }

    async getSchool() {
        while (!this.school) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: "What is Intern’s school?",
                    name: 'school',
                },]);
            answ.school ? this.school = answ.school : console.log('\x1b[31m', `You did not entered Intern's School!!!`, '\x1b[31m')
        }
        console.log("");
    }
}

module.exports = Intern;
