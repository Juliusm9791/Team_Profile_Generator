const inquirer = require("inquirer");

class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    async getName(employeeRole) {
        while (!this.employeeName) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: `what is ${employeeRole}'s name?`,
                    name: 'name',
                },]);
            answ.name ? this.employeeName = answ.name.toUpperCase() : console.log('\x1b[31m', `You did not entered ${employeeRole}'s name!!!`, '\x1b[31m');
        }
    }

    async getId(employeeRole) {
        while (!this.id) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: `What is ${employeeRole}'s employee ID?`,
                    name: 'Id',
                },]);
            answ.Id ? this.id = answ.Id : console.log('\x1b[31m', `You did not entered ${employeeRole}'s ID!!!`, '\x1b[31m')
        }
    }

    async getEmail(employeeRole) {
        const testEmail = /\S+@\S+\.\S+/;
        while (!this.email) {
            const answ = await inquirer
                .prompt([{
                    type: 'input',
                    message: `What is ${employeeRole}'s email address?`,
                    name: 'email',
                },]);
            !answ.email ? console.log('\x1b[31m', `You did not entered ${employeeRole}'s e-mail!!!`, '\x1b[31m') :
                !testEmail.test(answ.email) ? console.log('\x1b[31m', `Wrong e-mail format!!!`, '\x1b[31m') : this.email = answ.email;
        }
    }
}

module.exports = Employee;


