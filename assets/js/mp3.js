 function stopAudio() {
            var audio = document.getElementById('audio');
            audio.pause();
            audio.currentTime = 0; // Reset audio to start
        }
