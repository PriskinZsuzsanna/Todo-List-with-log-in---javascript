var add = document.getElementById("add");
var todoText = document.getElementById("todoText");
var list = document.getElementById("list");


add.addEventListener("click", addTodo); 
todoText.addEventListener("keyup", function (event) {
    if(event.keyCode == "13") { 
        addTodo();
    }
})


function addTodo () {
    if(todoText.value != "") {
        
        var li = document.createElement("li");
        var iTrash = document.createElement("i")
        var iDone = document.createElement("i")
        var iContainer = document.createElement("div")
        iContainer.className = "i-container"
        li.innerText = todoText.value;
        li.className = "todo";
        iDone.innerText = "";
        iDone.className = "fa-solid fa-check";
        iContainer.appendChild(iDone)
        iTrash.innerText = "";
        iTrash.className = "fa-solid fa-trash";
        iContainer.appendChild(iTrash)
        li.appendChild(iContainer)
        list.appendChild(li);
        todoText.value = "";

        /*li.addEventListener("click", function () {
            this.classList.toggle("line");
        })
        li.addEventListener("dblclick", function (e) {
            this.style.opacity = 0;
            this.addEventListener("transitionend", function () {
                list.removeChild(e.target);
            })
        })*/
      
        iDone.addEventListener("click", function () {
            li.classList.toggle("line");
           
        })
        iTrash.addEventListener("click", function (e) {
            li.style.opacity = 0;
            li.addEventListener("transitionend", function () {
                list.removeChild(li);
            })
        })
    } 
};

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
    document.querySelector(".container").classList.add("dark");
    document.querySelector(".button").classList.add("dark");
    document.querySelector(".ball").classList.add("dark");
}

function disableDarkMode () {
    localStorage.setItem('darkMode', null)
    document.body.classList.remove("dark");
    document.querySelector(".container").classList.remove("dark");
    document.querySelector(".button").classList.remove("dark");
    document.querySelector(".ball").classList.remove("dark");
}