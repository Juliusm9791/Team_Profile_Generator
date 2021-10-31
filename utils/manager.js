const inquirer = require("inquirer");
const Employee = require("./employee")

class Manager extends Employee {
    constructor(role, employeeName, id, email, officePhone) {
        super(role, employeeName, id, email)
        this.officePhone = officePhone;
    }

    async officeNumber() {
        while (!this.officePhone) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: "What is Manager’s office number?",
                    name: 'officePhone',
                },]);
            answ.officePhone ? this.officePhone = answ.officePhone : console.log('\x1b[31m', `You did not entered Manager's Phone#!!!`, '\x1b[31m')
        }
        console.log("")
    }
}

module.exports = Manager;

