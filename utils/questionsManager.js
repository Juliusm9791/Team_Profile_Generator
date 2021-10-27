module.exports = [
    {
        type: 'input',
        message: "What is team manager’s name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is manager’s employee ID?",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is manager’s email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is manager’s office number?",
        name: 'officeNumber',
    },
    {
        type: 'rawlist',
        message: "Choose one of options to add or finish building team.",
        name: 'occupation',
        choices: ["Engineer", "Intern", "Finish building my team"],
    },
];