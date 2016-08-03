var output;
var input;

document.addEventListener("DOMContentLoaded", function(){

	//Handle typing
	input = document.getElementById("textBox");
	input.onkeypress = inputPress;
	input.onkeydown = inputKeyDown;
	input.onpaste = input.oncut = function(e) {return false};
	input.onblur = function(){input.focus()};

	output = document.getElementById("output");

	//Register fullscreen handler with it's behaviour
	document.getElementById("startButton").addEventListener("click", function(){
		launchIntoFullscreen(document.documentElement);
		document.getElementById("textBox").focus(); //Used to focus on the hidden input box
	});

	//We want the user to have one of the pre-defined backgrounds every time they launch the app
	var items = [
		"https://unsplash.com/photos/ooJi3CJQRa8/download",
		"https://unsplash.com/photos/PdnseHuDFZU/download",
		"https://unsplash.com/photos/2p1HOcpi14U/download",
		"https://unsplash.com/photos/UklXbPE-Hos/download",
		"https://unsplash.com/photos/U5Ga5VAzdVs/download",
		"https://unsplash.com/photos/sgMKvgikHT8/download"
	];
	var item = items[Math.floor(Math.random()*items.length)];
	document.getElementById("bg").src = item;
});

//Allows for launching into fullscreen in virutally any browser
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

function inputKeyDown (e) {
	var keyCode = e.which;

	// Disable delete
    if (keyCode === 46) {
    	strikelast();
    	return e.preventDefault();
    };
      
    //Disable arrows
    if (isArrowKey(keyCode)) {
    	return e.preventDefault();
    };

    // Return key
    if (keyCode === 13) {
    	append("<br>");
    	input.value= "";
    };

    // Space key
    if (keyCode === 32) {
    	append("&nbsp;");
    	input.value = "";
    }

    // Tab key
    if (keyCode === 9) {
    	append("&nbsp;&nbsp;&nbsp;&nbsp;");
    	input.value = "";
    };
}

function inputPress (e) {

    var timeout = setTimeout(function(){
    	if(input.value !== "" && input.value !== null){
    		append(input.value);
	    	input.value = "";
	    	input.focus();
	    	clearTimeout(timeout);
    	}
    },0);
};

var body = "";
function append (str) {
	body = body + str.trim();
	output.innerHTML = manipulate(body)+'<span id="cursor">|</span>';
}
//Post processing text
function manipulate(raw){
	raw = raw.split('<br>');
	for(i in raw){
		if(raw[i][0] == "#" && raw[i].length > 1){
			raw[i] = "<h1>"+raw[i].substring(1)+"</h1>";
		}
	}
	raw = raw.join("<br>");
	return raw;
}
function strikelast(){
	console.log("quite striking isn't it.");
	body = body.replace(/\&nbsp\;+$/,''); //Remove spaces a the end of the body
	body = body.split("<br>");

	var line = body[body.length-1];
	line = line.split("&nbsp;");
	line[line.length-1] = "<s>"+line[line.length-1]+"</s>&nbsp;";
	line = line.join("&nbsp;");

	body[body.length-1] =  line;

	body = body.join("<br>");
	output.innerHTML = manipulate(body)+'<span id="cursor">|</span>';
}

function isArrowKey(keyCode) {
	return (keyCode <= 40 && keyCode >= 37);
};

/*
 * Cool pictures to use as background later:
 * =========================================
 * https://unsplash.com/photos/ooJi3CJQRa8
 * https://unsplash.com/photos/PdnseHuDFZU
 * https://unsplash.com/photos/2p1HOcpi14U
 * https://unsplash.com/photos/UklXbPE-Hos
 * https://unsplash.com/photos/U5Ga5VAzdVs
 * https://unsplash.com/photos/sgMKvgikHT8
 */
