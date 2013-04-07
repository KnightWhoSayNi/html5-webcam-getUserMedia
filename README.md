html5-webcam-getUserMedia
=========================

Snap photo from webcam by using HTML5 and JavaScript

## Cross-browser handling webcamera with getUserMedia()
```javascript
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
```
## Tested on:

http://caniuse.com/stream - ```getUserMedia()```

<i>(06.04.2013)</i>
- Chrome <b>26.0.1410.43 m</b>
- Opera <b>12.14</b>
- Opera Mobile
- Mozilla Firefox <b>19.0.2</b> - works only with changed settings:
	```-> about:config -> media.peerconnection.enabled (TRUE)```

## Two elements:
- ```<video></video>``` - to handle webcam
- ```<canvas></canvas>``` - to snap photo

## Sources:
- [http://dev.w3.org/2011/webrtc/editor/getusermedia.html](http://dev.w3.org/2011/webrtc/editor/getusermedia.html)
- [http://www.webrtc.org/](http://www.webrtc.org/)


## License:
Copyright (c) 2013 KnightWhoSayNi  
Licensed under the [MIT license](http://opensource.org/licenses/MIT).