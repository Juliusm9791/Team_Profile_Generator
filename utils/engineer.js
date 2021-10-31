const inquirer = require("inquirer");
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(role, employeeName, id, email, gitHub) {
        super(role, employeeName, id, email)
        this.gitHub = gitHub;
    }

    async getGithub() {
        while (!this.gitHub) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: "What is Engineer’s GitHub?",
                    name: 'gitHub',
                },]);
            answ.gitHub ? this.gitHub = answ.gitHub : console.log('\x1b[31m', `You did not entered Engineer's GitHub!!!`, '\x1b[31m')
        }
        console.log("")
    }
}

module.exports = Engineer;
