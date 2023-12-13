
// getting the input
let inputBox = document.getElementById("typeMessage");

let sendmsg = document.querySelector("#send");

var seeViewChat = document.querySelector(".chatDisplay");
let showCurrentTime = document.querySelector(".getTimeCurrent");
console.log(showCurrentTime)
var update = new Date();
// usersLastLogin.innerHTML = "hello"
var date = new Date();
var current_date = date.getDate() + "/ " + (date.getMonth()+1) + " / " + date.getFullYear();
var curent_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = update.toDateString();
showCurrentTime.textContent = date_time;
// sendmsg.addEventListener("click", function () {
//     alert(inputBox.value)
// })

// inputBox.addEventListener("click", function (params) {
//     if (inputBox.value != 0) {
//     console.log(sendmsg);
//     sendmsg.style.visibility = "visible"
// }else{
//     alert("empty message cannot show button")
// }
// })
function showBtn() {
    if (inputBox.value != 0) {
        sendmsg.style.visibility = "visible"
    }
}
sendmsg.addEventListener("click", function (params) {
    if (inputBox.value == 0) {
        alert("empty box cannot send")
    }else{
        seeViewChat.innerHTML += `
         <div class="messagecontent">
            <p class="va">
            ${inputBox.value}
                <small id="spanLocalTime">${showCurrentTime.textContent = date_time}</small>

            </p>
        </div>
        
        `
        inputBox.value = " "
    }
})



 
