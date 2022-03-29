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

var userFormEl = document.querySelector("#user-form")
var nameInputEl = document.querySelector("#username")

var formSubmitHandler = (event) => {
    event.preventDefault();
    // get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
    console.log(event);
  };

  userFormEl.addEventListener("submit", formSubmitHandler);