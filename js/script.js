
let counting = document.getElementById("counting");

let startBtn = document.getElementById("startBtn");

let pauseBtn = document.getElementById("pauseBtn");

let lapBtn = document.getElementById("lapBtn");

let resetBtn = document.getElementById("resetBtn");

let clearBtn = document.getElementById("clearBtn");

let watchData = document.querySelector(".div_data");

let count = 0;

let lapCount = 0;

let pTag;

let intervalId;


const countingFunc = () => {

  intervalId = setInterval(() => {
    counting.textContent = count++;
  }, 1000);

};

const pauseFunc = () => {


  pTag = document.createElement("p");

  pTag.innerText = `Paused Time : ${count - 1} sec`;

  watchData.append(pTag);

  clearInterval(intervalId);
};


const resetFunc = () => {

  count = 0;
  counting.textContent = count;
  clearInterval(intervalId);


};

const lapFunc = () => {

  if (count !== 0) {

    lapCount++;

    pTag = document.createElement("p");

    pTag.innerText = `Lap - ${lapCount} : ${count - 1} sec`;

    watchData.append(pTag);
  }
};

const clearFunc = () => {

  lapCount = 0;
  watchData.innerHTML = "";

};


startBtn.addEventListener("click", countingFunc);


pauseBtn.addEventListener("click", pauseFunc);


resetBtn.addEventListener("click", resetFunc);


lapBtn.addEventListener("click", lapFunc);


clearBtn.addEventListener("click", clearFunc);

