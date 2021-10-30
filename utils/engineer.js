const inquirer = require("inquirer");
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(role, employeeName, id, email, gitHub) {
        super(role, employeeName, id, email)
        this.gitHub = gitHub;
    }

    async getGithub() {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: "What is Engineer’s GitHub?",
                name: 'gitHub',
            },]);
            console.log("")
        this.gitHub = answ.gitHub;
    }
}

module.exports = Engineer;
