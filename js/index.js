// Function to show the menus on the click 
let navBarToogleIcon = document.getElementById("menuToggleNav");
const menus = document.querySelector(".menuInfoMore");

const menUp = document.body
navBarToogleIcon.addEventListener("click", function showMenus() {
    if (menus.style.display = "none") {
        menus.style.display = "block"
    }
})

function closemenus() {
    if (menus.style.display = "block") {
                menus.style.display = "none"

    }
}

// To check the current chat date

var userRecentChat = document.getElementById("CheckTime");

var update = new Date();
// usersLastLogin.innerHTML = "hello"
var date = new Date();
var current_date = date.getDate() + "/ " + (date.getMonth()+1) + " / " + date.getFullYear();
var curent_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = update.toDateString();
userRecentChat.textContent = date_time;
