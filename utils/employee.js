const inquirer = require("inquirer");

class Employee {
    constructor(role, employeeName, id, email) {
        this.role = role;
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    async getName(employeeRole) {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: `what is ${employeeRole}'s name?`,
                name: 'name',
            },]);
        this.employeeName = answ.name.toUpperCase();
    }

    async getId(employeeRole) {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: `What is ${employeeRole}'s employee ID?`, 
                name: 'Id',
            },]);
        this.id = answ.Id;
    }

    async getEmail(employeeRole) {
        const answ = await inquirer
            .prompt([{
                type: 'input',
                message: `What is ${employeeRole}'s email address?`, 
                name: 'email',
            },]);
        this.email = answ.email;
    }
}

module.exports = Employee;


