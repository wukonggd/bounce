let isAudioPlayed = false;

document.body.addEventListener('click', function() {
   if (!isAudioPlayed) {
    var audio = document.getElementById('audio');
    audio.play();
    isAudioPlayed = true;
}
});

document.getElementById('toggleButton').addEventListener('click', function() {
   var audio = document.getElementById('audio');
   if (isAudioPlaying) {
   audio.pause();
     } else {
   audio.play();
      }
   isAudioPlaying = !isAudioPlaying;
});
