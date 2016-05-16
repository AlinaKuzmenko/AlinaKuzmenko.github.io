var timer = (function() {
    var time;
    var runTimer;
    var running = false;
    var splitNumber = 0;

    var init = function() {
        time = 0;
    }

    var startPause = function() {
        if (running == false) {
            running = true;
            runTimerFunction();

            var startButton = document.querySelector('.button-start');
            startButton.classList.remove('button-start');
            startButton.classList.add('button-pause');
            startButton.innerHTML = 'pause';
        } else {
            running = false;
            clearInterval(runTimer);

            var pauseButton = document.querySelector('.button-pause');
            pauseButton.classList.remove('button-pause');
            pauseButton.classList.add('button-start');
            pauseButton.innerHTML = 'start';
        }
    }

    var runTimerFunction = function(){
        if (running == true) {
            runTimer = setInterval(function() {
                time++;
                var milliseconds = Math.floor(time % 10);
                var seconds = Math.floor(time / 10 % 60);
                var minutes = Math.floor(time / 10 / 60);
                var hours = Math.floor(time / 10 / 60 / 60);

                if (milliseconds < 10) {
                    milliseconds = '0' + milliseconds;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (hours < 10) {
                    hours = '0' + hours;
                }

                document.querySelector('.output').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
            }, 100)
        }
    }

    var getCurrentTime = function() {
        return time;
    }

    var split = function() {
        if (running == true) {
            splitNumber++;

            var currentTime = timer.getCurrentTime();
            var currentMilliseconds = Math.floor(currentTime % 10);
            var currentSeconds = Math.floor(currentTime / 10 % 60);
            var currentMinutes = Math.floor(currentTime / 10 / 60);
            var currentHours = Math.floor(currentTime / 10 / 60 / 60);

            splitResult = document.createElement('p');
            splitResult.classList.add('split-result');
            document.querySelector('.split-results').appendChild(splitResult);

            if (currentMilliseconds < 10) {
                currentMilliseconds = '0' + currentMilliseconds;
            }

            if (currentSeconds < 10) {
                currentSeconds = '0' + currentSeconds;
            }

            if (currentMinutes < 10) {
                currentMinutes = '0' + currentMinutes;
            }

            if (currentHours < 10) {
                currentHours = '0' + currentHours;
            }

            splitResult.innerHTML = splitNumber + '. ' + currentHours + ':' + currentMinutes + ':' + currentSeconds + ':' + currentMilliseconds;
        }
    }

    var reset = function() {
        if (running == true) {
            var pauseButton = document.querySelector('.button-pause');
            pauseButton.classList.remove('button-pause');
            pauseButton.classList.add('button-start');
            pauseButton.innerHTML = 'start';
        }

        running = false;
        clearInterval(runTimer);
        init();
        document.querySelector('.output').innerHTML = '00:00:00:00';
    }

    var clearResults = function() {
        splitNumber = 0;
        emptySplitResults = document.createElement('div');
        emptySplitResults.classList.add('split-results');
        document.querySelector('.results').replaceChild( emptySplitResults, document.querySelector('.split-results') );
    }

    return {
        init: init,
        getCurrentTime: getCurrentTime,
        startPause: startPause,
        split: split,
        reset: reset,
        clearResults: clearResults
    }
})();

timer.init();
document.querySelector('.button-start').addEventListener('click', timer.startPause);
document.querySelector('.button-split').addEventListener('click', timer.split);
document.querySelector('.button-reset').addEventListener('click', timer.reset);
document.querySelector('.button-clear-results').addEventListener('click', timer.clearResults);
