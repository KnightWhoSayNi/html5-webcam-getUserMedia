window.addEventListener("load", function() {
	var camera = document.getElementById("camera");
	//var camera = document.querySelector("camera");
	var play = document.getElementById("play");
	var pause = document.getElementById("pause");
	var constraints = {audio:false, video:true};
	var moz_constraints = {video:true};
	var use_webkit = false;
	var use_moz = false;
	
	var snap = document.getElementById("snap");
	var canvas = document.getElementById("can");
	var ctx = canvas.getContext('2d');
		
	function successCallback(stream) {
		
		if (use_moz) { 
		//FireFox
			camera.mozSrcObject = stream;
			//camera.src = URL.createObjectURL(stream);
			camera.play();	
		}
		else if (use_webkit) { 
		//Chrome
			window.local = stream;
			camera.src = window.webkitURL.createObjectURL(stream);
		} 
		else {
		//W3C Standard; Opera
			camera.src = stream;
		}
		camera.play();				
		disableButtons(true, false);
	}
	
	function errorCallback(error) {
		console.log("An error occured! " + error);
	}
	
	function disableButtons(disPlay, disPause) {
		play.disabled = disPlay;
		pause.disabled = disPause;
	}
	
	disableButtons(true, true);
	
	//window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	//navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	
	if (navigator.getUserMedia) {
		navigator.getUserMedia(constraints, successCallback, errorCallback);
	} 
	else if (navigator.mozGetUserMedia) {
		use_moz = true;
		navigator.mozGetUserMedia(moz_constraints, successCallback, errorCallback);
	} 
	else if (navigator.webkitGetUserMedia) {
		use_webkit = true;
		navigator.webkitGetUserMedia(constraints, successCallback, errorCallback);
	} 
	else {
		alert("Your browser doesn't support getUserMedia()");	
	}
	
	
	
	play.addEventListener("click", function() {
		disableButtons(true, false);
		camera.play();
	}, false);
	pause.addEventListener("click", function() {
		disableButtons(false, true);
		camera.pause();
	}, false);
	snap.addEventListener("click", function() {
		ctx.drawImage(camera, 0, 0, 640, 480);
	}, false);
	
}, false);
	