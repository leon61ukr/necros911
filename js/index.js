$('#exampleModalCenter').modal('show');

(function() {
const noWay = "color: lime;" + "font-size: 60px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px rgb(0, 0, 0);" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);"; setTimeout(console.log.bind(console, "%cCreated by LeoN61", noWay), 0);
})();

var audioNew = document.querySelector('.js-audio-new'); // <- might use jQuery for older browsers here
if (audioNew.play) {
  audioNew.play();
}
else {
  audioNew.innerHTML = '<embed src="' + audioNew.attributes.src.value + '" autostart=true loop=true volume=100 hidden=true></embed>';
}