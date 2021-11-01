const inquirer = require("inquirer");
const Employee = require("./employee")

class Manager extends Employee {
    constructor(employeeName, id, email, officePhone, role) {
        super(employeeName, id, email)
        this.officePhone = officePhone;
        this.role = role;
    }

    getRoleMan(employeeRole) {
        if (employeeRole === "Manager") {
            console.log("\x1b[33m", `Enter ${employeeRole}'s information.`, "\x1b[33m")
            this.role = employeeRole;
        } else {
            this.role = ""
        }
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

// || employeeRole === "Engineer" || employeeRole === "Intern")