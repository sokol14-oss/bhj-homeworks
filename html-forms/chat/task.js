const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", ()=>{
    chatWidget.classList.add("chat-widget_active");
})
const botMessages = ["Салют","Подождите немного,оператор скоро ответит","Привет"];
const input = document.getElementById("chat-widget__input");
const message = document.querySelector(".chat-widget__messages");
function time() {
    const time = document.querySelector(".message__time");
    const date = new Date();
    time.innerHTML = getHours() + getMinutes();
}
function botSet() {
    return botMessages[Math.floor(Math.random() * botMessages.length)];
}
function clientSet(e) {
if (e.keyCode=== 13 && e.target.textContent !=="") {
    time();
message.innerHTML += e.target.textContent;
message.classList.add("message_client");
message.innerHTML.reset();
}
}
input.addEventListener("keyup",time);

input.addEventListener("keyup",botSet);
input.addEventListener("keyup",clientSet);