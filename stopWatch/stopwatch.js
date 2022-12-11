const startButton = document.querySelector(`#start`);
const stopButton = document.querySelector(`#stop`);
const resetButton = document.querySelector(`#reset`);

const min = document.querySelector(`.min`);
const sec = document.querySelector(`.sec`);

let intervalId;
let timerTime = 00;
let numberOfMin = 0;

stopButton.style.display = "none";

function startTimer() {
	intervalId = setInterval(incrementTimer, 1000);

	startButton.style.display = "none";
	stopButton.style.display = "inline-block";
}

function stopTimer() {
	clearInterval(intervalId);

	stopButton.style.display = "none";
	startButton.style.display = "inline-block";
}

function restartTimer() {
	stopTimer();
	sec.innerText = `00`;
	min.innerText = `00`;
	timerTime = 00;
	numberOfMin = 00;
}

function incrementTimer() {
	timerTime++;

	if (timerTime === 60) {
		numberOfMin += Math.floor(timerTime / 60);
		timerTime = 00;
	}

	sec.innerText = zeroPadding(timerTime);
	min.innerText = zeroPadding(numberOfMin);
	console.log(`increment timer`, timerTime);
}

function zeroPadding(number) {
	return number < 10 ? `0${number}` : `${number}`;
}

startButton.addEventListener(`click`, startTimer);
stopButton.addEventListener(`click`, stopTimer);
resetButton.addEventListener(`click`, restartTimer);