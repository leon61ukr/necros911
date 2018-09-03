// modal
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

(function() {
const noWay = "color: lime;" + "font-size: 60px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px rgb(0, 0, 0);" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);"; setTimeout(console.log.bind(console, "%cCreated by LeoN61", noWay), 0);
})();