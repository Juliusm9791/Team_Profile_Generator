function generateFile(team) {
    let allCards = card(team);

    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <title>My Team</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
    
    
      <div class="container">
        <div class="container-fluid py-5" style="background-color: yellow; margin-bottom: 15px;">
          <h1 class="display-5 fw-bold" style="text-align: center;">My Team</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" style="justify-content: center;">

              ${allCards}
              
        </div>
        
    </body>
    
    </html>`
}

function card(team) {
    let cardForEmployee = ""
    let tag = "";
    for (let i = 0; i < team.length; i++) {
        team[i].officePhone ? tag = "Office Phone: " : "";
        team[i].gitHub ? tag = "GiHub: " : "";
        team[i].school ? tag = "School: " : "";

        cardForEmployee += `      <div class="col mb-3">
        <div class="card">
          <div class="card-img-top" style="background-color: blue; color: white;">
            <h2 style="margin: 10px;">${team[i].employeeName}</h2>
            <h4 style="margin: 10px;">${team[i].role} <i class="bi bi-tools"></i></h4>
          </div>
          <div class="card-body" style="margin: 5px 0px; padding: 10px 0px;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${team[i].id}</li>
              <li class="list-group-item">E-mail: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
              <li class="list-group-item">${tag}${team[i].officePhone || team[i].gitHub || team[i].school}</li>
            </ul>
          </div>
        </div>
      </div>`

}
return cardForEmployee
}

module.exports = generateFile;
