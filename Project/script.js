const videoPlayer = document.getElementById('video-player');
const videoSelect = document.getElementById('video-select');

videoSelect.addEventListener('change', (event) => {
    const selectedVideo = event.target.value;
    videoPlayer.src = selectedVideo;
    videoPlayer.play();
});

const audioPlayer = document.getElementById('audio-player');
const playAudioButton = document.getElementById('play-audio');
const pauseAudioButton = document.getElementById('pause-audio');
const stopAudioButton = document.getElementById('stop-audio');

playAudioButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseAudioButton.addEventListener('click', () => {
    audioPlayer.pause();
});

stopAudioButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

function changeVideo() {
    var videoSelect = document.getElementById("video-select");
    var videoPlayer = document.getElementById("video-player");
    videoPlayer.src = videoSelect.value;
}