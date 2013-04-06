html5-webcam-getUserMedia
=========================

Snap photo from webcam by using HTML5 and JavaScript

Tested on:

- Chrome 26.0.1410.43 m
- Opera 12.14
- Opera Mobile
- Mozilla Firefox 19.0.2 - works only with changed settings: 
	<b><i>-> about:config -> media.peerconnection.enabled (TRUE)</i></b>

Two elements:

- video - to handle webcam
	<code><video id="camera" autoplay poster="images/poster.gif"></video></code>
- canvas - to snap photo
	<blockquote><canvas id="can" width="640" height="480"></canvas></blockquote>
		

Sources:

- http://dev.w3.org/2011/webrtc/editor/getusermedia.html
- 