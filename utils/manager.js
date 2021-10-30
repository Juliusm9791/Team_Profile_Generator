const inquirer = require("inquirer");
const Employee = require("./employee")

class Manager extends Employee {
    constructor(role, employeeName, id, email, officePhone) {
        super(role, employeeName, id, email)
        this.officePhone = officePhone;
    }

    async officeNumber() {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: "What is Manager’s office number?",
                name: 'officePhone',
            },]);
            console.log("")
        this.officePhone = answ.officePhone;
    }

}

module.exports = Manager;

