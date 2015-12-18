(function() {
var link = document.querySelector(".menu-section-open__link");
var popup = document.querySelector(".menu-section")
var close = document.querySelector(".menu-section__close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup == document.querySelector(".menu-section-show")) {
    popup.classList.remove("menu-section-show");
  } else {
  popup.classList.add("menu-section-show");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("menu-section-show");
});
})();
