var form = document.querySelector("form");
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var inputFields = document.querySelectorAll("input");
var container = document.querySelector(".container");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    //Show Classes
    if (username.value == "" && password.value == "") {
        username.className = "error";
        password.className = "error";
    }
    else if (username.value == "") {
        username.className = "error";
        password.className = "success";
    }
    else if (password.value == "") {
        password.className = "error";
        username.className = "success";
    }
    else {
        container.classList.add("scale-away");
        var loginTimeout = setTimeout(scaleAway, 900);
        function scaleAway() {
            location.href = "site.html";
        };
    };


    //Remove Classes on input field focus
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener("focus", function () {
            this.className = "";
        });
    };

});


//Light-Dark

var darkMode = localStorage.getItem('darkMode');

//Remember settings
if (window.matchMedia("(prefers-color-scheme: dark)").matches || darkMode === "enabled") {
    enableDarkMode();
};

//Change on click
document.querySelector(".button").addEventListener("click", function () {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
 
});

function enableDarkMode () {
    localStorage.setItem('darkMode', 'enabled')
    document.body.classList.add("dark");
    document.querySelector("form").classList.add("dark");
    document.querySelector(".button").classList.add("dark");
    document.querySelector(".ball").classList.add("dark");
}

function disableDarkMode () {
    localStorage.setItem('darkMode', null)
    document.body.classList.remove("dark");
    document.querySelector("form").classList.remove("dark");
    document.querySelector(".button").classList.remove("dark");
    document.querySelector(".ball").classList.remove("dark");
}