
// getting the input
let inputBox = document.getElementById("typeMessage");

let sendmsg = document.querySelector("#send");

var seeViewChat = document.querySelector(".chatDisplay")
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
                </p>
            </div>
        
        `
        inputBox.value = " "
    }
})

 
