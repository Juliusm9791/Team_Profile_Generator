
function generateFile(answers) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Page Title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    </head>
    <body>
    
    <h1>${answers.name}</h1>
    <p>${answers.ID}</p>
    <p> ${answers.email}</p>
    <p>${answers.officeNumber}</p>
    </body>
    </html>`
}

module.exports = generateFile;
