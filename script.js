const button = document.getElementById("button");
const countDownEl = document.getElementById("countdown");
const thirtyBtn = document.getElementById("thirtyBtn");
const sixtyBtn = document.getElementById("sixtyBtn");

let thirty, sixty;

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDownEl.innerHTML = `${0}${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    countDownEl.innerHTML = `${"00"}:${"00"}`;
    orange();
  }
}

const init30 = function () {
  time = 0.5 * 60;
};

const init60 = function () {
  time = 1 * 60;
};

setInterval(updateCountdown, 1000);

const orange = function () {
  countDownEl.classList.remove("white");
  countDownEl.classList.add("orange");
};

const white = function () {
  countDownEl.classList.add("white");
  countDownEl.classList.remove("orange");
};

thirtyBtn.addEventListener("click", function () {
  init30();
  white();
  thirty = true;
  sixty = false;
});

sixtyBtn.addEventListener("click", function () {
  init60();
  white();
  sixty = true;
  thirty = false;
});

button.addEventListener("click", function () {
  if (thirty) {
    init30();
    white();
  }
  if (sixty) {
    init60();
    white();
  }
});

// usauas;