<script>
        var videoPlayer = document.querySelector ('.videoPlayer');
        var playButton = document.querySelector ('.playButton');
        var stopButton = document.querySelector ('.stopButton');
        var muteButton = document.querySelector ('.muteButton');
        var volumeButton = document.querySelector ('.volumeButton');
        var progressedTime = document.querySelector ('#progressTime');
        var elapsedTime = document.querySelector ('#passedTime');
        var progress = document.querySelector('.progressBar');
        var fullScreen = document.querySelector('.fullScreen');


            playControl = function () {

                if (videoPlayer.paused) {
                    videoPlayer.play();
                    playButton.textContent = 'pause';

                } else {
                    videoPlayer.pause();
                    playButton.textContent = 'play';
                }
            };

            stopControl = function () {
                videoPlayer.currentTime = 0;
                videoPlayer.pause ();
                playButton.textContent = 'play';

            };

            volumeMute = function() {
                if (videoPlayer.volume > 0) {
                    videoPlayer.volume = 0;

                } else {
                    videoPlayer.volume = 1;
                }
            };

            fullscreen = function(event) {
                var el = document.documentElement;
                if (el.requestFullscreen) {
                    videoPlayer.requestFullscreen();
                    videoPlayer =  event.preventDefault()
                }
                else if (el.webkitRequestFullscreen) {
                    videoPlayer.webkitRequestFullscreen();
                    videoPlayer =  event.preventDefault()
                }
                else if (el.mozRequestFullscreen) {
                    videoPlayer.mozRequestFullscreen();
                }
                else if (el.msRequestFullscreen) {
                    videoPlayer.msRequestFullscreen();
                }
            };





            update = function () {
                console.log('update', videoPlayer.currentTime);
                progress.addEventListener('input', function(){
                console.log('progress', progress.value);
                videoPlayer.currentTime = progress.value;
            });}



            timeProgress = function (){
                var duration = videoPlayer.duration;
                var time     = videoPlayer.currentTime;
                var restingTime = duration - time;
                progressedTime.textContent = formatTime (time);
                elapsedTime.textContent = formatTime (restingTime);
            };


            formatTime = function (time) {
    //            var time = videoPlayer.currentTime;

                var hours = Math.floor(time / 3600);
                var mins  = Math.floor((time % 3600) / 60);
                var secs  = Math.floor(time % 60);

                if (secs < 10) {
                    secs = "0" + secs;
                }

                if (hours) {
                    if (mins < 10) {
                        mins = "0" + mins;
                    }

                    return hours + ":" + mins + ":" + secs; // hh:mm:ss
                } else {
                    return mins + ":" + secs; // mm:ss
                }
            };



        playButton.addEventListener('click',function(){
                playControl();
            });

        window.addEventListener('keypress',function(event){
            if (event.which === 32){
                playControl();
            }
        });

        stopButton.addEventListener('click',function(){
            stopControl();
        });

        muteButton.addEventListener('click',function(){
            volumeMute();
        });

        progress.value=0;

        volumeButton.addEventListener('input',function(){
            videoPlayer.volume = volumeButton.value /100;
        });

        fullScreen.addEventListener('click',function(){
            fullscreen();
        });






    </script>
