const inquirer = require("inquirer");
const Employee = require("./employee")

class Intern extends Employee {
    constructor(employeeName, id, email, school, role) {
        super(employeeName, id, email)
        this.gitHub = school;
        this.role = role;
    }

    getRoleInt(employeeRole) {
        if (employeeRole === "Intern") {
            console.log("\x1b[33m", `Enter ${employeeRole}'s information.`, "\x1b[33m")
            this.role = employeeRole;
        } else {
            this.role = "";
        }
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
