const audio = document.querySelector("#audio");

function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
}
