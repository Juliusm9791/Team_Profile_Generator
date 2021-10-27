module.exports = [
    {
        type: 'input',
        message: "What is engineer’s name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is engineer’s employee ID?",
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is engineer’s email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is engineer’s GitHub username?",
        name: 'gitHub',
    },
    {
        type: 'rawlist',
        message: "Choose one of options to add or finish building team.",
        name: 'occupation',
        choices: ["Engineer", "Intern", "Finish building my team"],
    },
];