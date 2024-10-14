        let isAudioPlaying = false;

        document.body.addEventListener('click', function() {
            var audio = document.getElementById('audio');
            if (!isAudioPlaying) {
                audio.play();
                isAudioPlaying = true;
            }
        });

        document.getElementById('stopButton').addEventListener('click', function() {
            var audio = document.getElementById('audio');
            audio.pause();
            audio.currentTime = 0; // Reset audio to start
            isAudioPlayed = false;
        });

        document.getElementById('controlButton').addEventListener('click', function() {
            var audio = document.getElementById('audio');
            if (!isAudioPlaying) {
                audio.play();
                this.textContent = 'Stop Music';
            } else {
                audio.pause();
                audio.currentTime = 0; // Reset audio to start
                this.textContent = 'Play Music';
            }
            isAudioPlaying = !isAudioPlaying;
        });
