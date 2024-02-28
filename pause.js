
'use strict';

var audioElement = document.querySelector('audio');

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  audioElement.pause();
}
start();
