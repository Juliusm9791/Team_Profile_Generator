const inquirer = require("inquirer");
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub, role) {
        super(employeeName, id, email)
        this.gitHub = gitHub;
        this.role = role;
    }

    getRoleEng(employeeRole) {
        if (employeeRole === "Engineer") {
            console.log("\x1b[33m", `Enter ${employeeRole}'s information.`, "\x1b[33m")
            this.role = employeeRole;
        } else {
            this.role = ""
        }
    }

    async getGithub() {
        while (!this.gitHub) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: "What is Engineer’s GitHub?",
                    name: 'gitHub',
                },]);
            answ.gitHub ? this.gitHub = answ.gitHub.trim() : console.log('\x1b[31m', `You did not entered Engineer's GitHub!!!`, '\x1b[31m')
        }
        console.log("")
    }
}

module.exports = Engineer;
