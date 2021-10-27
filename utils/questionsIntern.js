module.exports = [
    {
        type: 'input',
        message: "What is intern’s name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is intern ID?",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is intern’s email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is intern’s school?",
        name: 'school',
    },
    {
        type: 'rawlist',
        message: "Choose one of options to add or finish building team.",
        name: 'occupation',
        choices: ["Engineer", "Intern", "Finish building my team"],
    },
];