const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", ()=>{
    chatWidget.classList.add("chat-widget_active");
})
const botMessages = ["Салют","Подождите немного,оператор скоро ответит","Привет"];
const input = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
function time() {
    const time = document.querySelector(".message__time");
    const date = new Date();
    time.innerHTML = date.getHours() + date.getMinutes();
    return time;
}
function botSet() {
  messages.innerHTML+= botMessages[Math.floor(Math.random() * botMessages.length)];
    return messages + time;
}
function clientSet(e) {
  const message = document.querySelector(".message");
if (e.code == 'Enter' && e.key.textContent !=="") {
  message.classList.add("message_client");
  message.innerHTML = e.key.textContent;
  messages.innerHTML +=message.innerHTML + time ;
input.innerHTML.reset();
}
}
input.addEventListener("keyup",botSet);
input.addEventListener("keyup",clientSet);