const canvas = document.getElementById("js-imgClock"),
  ctx = canvas.getContext("2d"),
  USER_TIME = "clock";

let addi = (Math.PI / 180) * 8.3,
  cnt = 0;

let image = new Image();

function changeImg(num) {
  let path = "./images/weather_doodle/";
  if (num <= 5) return path + "1.png";
  else if (num <= 7) return path + "2.png";
  else if (num <= 9) return path + "3.png";
  else if (num <= 17) return path + "4.png";
  else if (num <= 19) return path + "5.png;";
  else if (num <= 23) return path + "6.png";
}

function clock(hours) {
  // 출력과정 1. 점 위치 확인 2. 그림 위치 확인
  if (hours >= 24 && hours <= 47) hours -= 24;
  else if (hours >= 48) hours -= 48;

  //   1. 점 위치 확인!!!!! -> 캔버스 사이즈 넓히기

  //   clear();
  //   let angle = calAngle(hours);
  //   image.src = changeImg(hours);
  //   ctx.drawImage(image, angle.dx - 70, angle.dy - 70, 180, 180);
}

function calAngle(num) {
  //   clear();
  let x = 70,
    y = 350,
    i = Math.PI / 2;

  for (let tmp = 0; tmp < num; tmp++) {
    x -= 37 * Math.cos(i);
    y -= 37 * Math.sin(i);
    i += addi;
  }
  return { dx: x, dy: y };
}

function clear() {
  ctx.clearRect(0, 0, 650, 400);
}

function loadClock() {
  const nowTime = new Date().getHours(); // 0~23로 출력
  //   console.log(nowTime);
  const saveTime = localStorage.getItem(USER_TIME);
  if (saveTime === null || saveTime !== nowTime) {
    localStorage.setItem(USER_TIME, nowTime);
    clock(nowTime);
  }
}

function init() {
  // 그림 출력을 위한 테스트
  const test = new Date().getSeconds();
  setInterval(clock(test), 1000);

  //   setInterval(loadClock, 1000);
}

init();
