        let isAudioPlaying = false;

        document.body.addEventListener('click', function() {
            var audio = document.getElementById('audio');
            if (!isAudioPlaying) {
                audio.play();
                isAudioPlaying = true;
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
