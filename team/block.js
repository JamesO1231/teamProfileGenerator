const headerBlock = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Team Page</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container">
            <div class="col-md-12">
                <div class="row">
    <!---===============END OF HEAD CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const managerBlock = function (data) {
    return `<div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div class="card-body">
            <div class="list-group">
                <p class="list-group-item">ID: <span>${data.id}</span></p>
                <p class="list-group-item">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                <p class="list-group-item">Office Number: <span>${data.officeNumber}</span></p>
            </div>
    </div>
</div>
<!---===============END OF MANAGER CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const engineerBlock = function (data) {
    return `<div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-hard-hat"></i> Engineer</h2>
    </div>
    <div class="card-body">
            <div class="list-group">
                <p class="list-group-item">ID: <span>${data.id}</span></p>
                <p class="list-group-item">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                <p class="list-group-item">GitHub: <a href='http://www.github.com/${data.github}' target='_blank'>${data.github}</a></p>
            </div>
    </div>
</div>
<!---===============END OF ENGINEER CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const internBlock = function (data) {
    return `<div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-user-graduate"></i> Intern</h2>
    </div>
    <div class="card-body">
            <div class="list-group">
                <p class="list-group-item">ID: <span>${data.id}</span></p>
                <p class="list-group-item">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                <p class="list-group-item">School: <span>${data.school}</span></p>
            </div>
    </div>
</div>
<!---===============END OF INTERN CODE BLOCK====================-->`
};
/*================================================================================================================================*/

module.exports = {
    header: headerBlock,
    manager: managerBlock,
    engineer: engineerBlock,
    intern: internBlock,
}