const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
    audio.play();
    isPlaying = true;
     }
     });
