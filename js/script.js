var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-window-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-show");
})

form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !letter.value) {
    event.preventDefault();
    console.log("Необходимо заполнить все поля");
  }
})
