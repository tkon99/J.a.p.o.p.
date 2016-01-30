$(document).ready(function(){
	$("#startButton").click(function(){
		launchIntoFullscreen(document.documentElement);
	});
	var items = [
		"https://unsplash.com/photos/ooJi3CJQRa8/download",
		"https://unsplash.com/photos/PdnseHuDFZU/download",
		"https://unsplash.com/photos/2p1HOcpi14U/download",
		"https://unsplash.com/photos/UklXbPE-Hos/download",
		"https://unsplash.com/photos/U5Ga5VAzdVs/download",
		"https://unsplash.com/photos/sgMKvgikHT8/download"
	];
	var item = items[Math.floor(Math.random()*items.length)];
	$("#bg").attr("src",item);
});

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/*
Cool pictures to use as background later:
=========================================
https://unsplash.com/photos/ooJi3CJQRa8
https://unsplash.com/photos/PdnseHuDFZU
https://unsplash.com/photos/2p1HOcpi14U
https://unsplash.com/photos/UklXbPE-Hos
https://unsplash.com/photos/U5Ga5VAzdVs
https://unsplash.com/photos/sgMKvgikHT8
*/