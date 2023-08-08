

var video = document.getElementById('video');
var playPauseButton = document.getElementById('playPause');
var progressBar = document.getElementById('progress-bar');

playPauseButton.addEventListener('click', function() {
  togglePlayPause();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    togglePlayPause();
  }
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