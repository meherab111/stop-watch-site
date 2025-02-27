let counting = document.getElementById("counting");

let startBtn = document.getElementById("startBtn");

let pauseBtn = document.getElementById("pauseBtn");

let lapBtn = document.getElementById("lapBtn");

let resetBtn = document.getElementById("resetBtn");

let clearBtn = document.getElementById("clearBtn");

let watchData = document.querySelector(".div-data");

let count = 0;

let lapCount = 0;

let pTag;

let intervalId;

// Counting Functionality

const countingFunc = () => {
  intervalId = setInterval(() => {
    counting.textContent = count++;
  }, 1000);
};

// Pause Functionality

const pauseFunc = () => {
  pTag = document.createElement("p");

  pTag.innerText = `Paused Time : ${count - 1} sec`;

  watchData.append(pTag);

  clearInterval(intervalId);
};

// Reset Functionality

const resetFunc = () => {
  count = 0;
  counting.textContent = count;
  clearInterval(intervalId);
};

// Time Lap Functionality

const lapFunc = () => {
  if (count !== 0) {
    lapCount++;

    pTag = document.createElement("p");

    pTag.innerText = `Lap - ${lapCount} : ${count - 1} sec`;

    watchData.append(pTag);
  }
};

// Clear All Functionality

const clearFunc = () => {
  lapCount = 0;
  watchData.innerHTML = "";
};
// Start Button Click
startBtn.addEventListener("click", countingFunc);
// Pause Button Click
pauseBtn.addEventListener("click", pauseFunc);
// Reset Button Click
resetBtn.addEventListener("click", resetFunc);
// Lap Button Click
lapBtn.addEventListener("click", lapFunc);
// Clear Button Click
clearBtn.addEventListener("click", clearFunc);
