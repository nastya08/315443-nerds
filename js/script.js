var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-window-close")

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-show");
})
