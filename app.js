

// var video = document.getElementById('video');
// var playPauseButton = document.getElementById('playPause');
// var progressBar = document.getElementById('progress-bar');

// playPauseButton.addEventListener('click', function() {
//   togglePlayPause();
// });

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     togglePlayPause();
//   }
// });

// video.addEventListener('timeupdate', function() {
//   var progress = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = progress + '%';
// });

// video.addEventListener('ended', function() {
//   playPauseButton.textContent = 'Play';
//   progressBar.style.width = '0';
// });

// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseButton.textContent = 'Pause';
//     enterFullscreen();
//   } else {
//     video.pause();
//     playPauseButton.textContent = 'Play';
//   }
// }

// function enterFullscreen() {
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.mozRequestFullScreen) {
//     video.mozRequestFullScreen();
//   } else if (video.webkitRequestFullscreen) {
//     video.webkitRequestFullscreen();
//   } else if (video.msRequestFullscreen) {
//     video.msRequestFullscreen();
//   }
// }
























// OLD

// var video = document.getElementById('video');
//   var playPauseButton = document.getElementById('playPause');
//   var progressBar = document.getElementById('progress-bar');

//   playPauseButton.addEventListener('click', function() {
//     if (video.paused || video.ended) {
//       video.play();
//       playPauseButton.textContent = 'Pause';
//     } else {
//       video.pause();
//       playPauseButton.textContent = 'Play';
//     }
//   });

//   video.addEventListener('timeupdate', function() {
//     var progress = (video.currentTime / video.duration) * 100;
//     progressBar.style.width = progress + '%';
//   });

//   video.addEventListener('ended', function() {
//     playPauseButton.textContent = 'Play';
//     progressBar.style.width = '0';
//   });




var url = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
    //   window.onload = function() {
         
         
var player = new AAMPMediaPlayer();
player.load(url);  
var video = document.getElementById('video');
var playPauseButton = document.getElementById('playPause');
var progressBar = document.getElementById('progress-bar');

playPauseButton.addEventListener('click', function() {
  togglePlayPause();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {togglePlayPause();}

});

video.addEventListener('timeupdate', function() {
  var progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = progress + '%';
});

video.addEventListener('ended', function() {
  playPauseButton.textContent = 'Play';
  progressBar.style.width = '0';
});

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseButton.textContent = 'Pause';
  } else {
    video.pause();
    playPauseButton.textContent = 'Play';
  }
}

