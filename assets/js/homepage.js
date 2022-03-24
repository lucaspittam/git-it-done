var getUserRepos = (user) => {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a reuest to the url
    fetch(apiUrl).then(function(respinse) {
        Response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();