var logged = false;
var username = "Not Logged In";

function checkPrivileges(url) {
    if (logged)
        location.replace(url);
    else
        location.replace("profilo.html");
}

function getUsername() {
    document.getElementById("usernamefield").innerHTML = username;
}

function login() {
    const username = document.getElementById("enterusernamefield").value;
    const password = document.getElementById("enterpasswordfield").value;

    fetch('../../app/controllers/authentication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/jason' },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            username = data.username;
            document.getElementById("usernamefield").innerHTML = username;
        })

        .catch(function (error) {
            elem = document.getElementById("popuperror");
            elem.style.display = 'block';
            elem.getElementsByClassName("errorfield").innerHTML = error;
            console.log(error);
        });
}