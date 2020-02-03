const jsClock = document.querySelector(".js-clock"),
  jsTime = jsClock.querySelector("h1");

function getTime() {
  const today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();
  jsTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  // getTime()을 추가해주지 않는다면 새로고침 시, 시간 딜레이가 발생한다
  getTime();
  setInterval(getTime, 1000);
}

init();
