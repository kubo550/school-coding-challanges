const _clockDiv = document.querySelector("#clock");
const _deadline =
  "Wed Dec 09 2020 15:00:00 GMT+0100 (czas środkowoeuropejski standardowy)";

const _getTimeRemaining = endtime => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  _clockDiv.innerHTML = `Time Left ${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

setInterval(() => _getTimeRemaining(_deadline), 1000);
