function generateFile(team) {
    let allCards = card(team);

    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>My Team</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    
    <body>
            
        <div class="container">
            <section class="section">
                <h1 class="title">Section</h1>
                <h2 class="subtitle">
                  A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
                </h2>
              </section>
              ${allCards}
              
              </div>
        
    </body>
    
    </html>`
}

function card(team) {
    let cardForEmployee = ""
    for (let i = 0; i < team.length; i++) {

        cardForEmployee += `        <div class="column is-one-fifth ">
    <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">
                ${team[i].employeeName}
                ${team[i].role}
            </h1>
        </header>
        <div class="card-content">
            <div class="content">
                <p>${team[i].id}</p>
                <a>${team[i].email}</a><br>
                <a>${team[i].officePhone || team[i].gitHub || team[i].school}</a>
            </div>
        </div>
    </div>
</div>`

}
return cardForEmployee
}

module.exports = generateFile;
