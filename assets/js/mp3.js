let isAudioPlayed = false;

document.body.addEventListener('click', function() {
   if (!isAudioPlayed) {
    var audio = document.getElementById('audio');
    audio.play();
    isAudioPlayed = true;
}
});
