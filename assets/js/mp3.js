        const audio = document.getElementById('audio');
        let isPlaying = false;

        document.addEventListener('mousemove', () => {
            if (!isPlaying) {
                audio.play();
                isPlaying = true;
            }
        });
