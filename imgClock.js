const canvas = document.getElementById("js-imgClock"),
  ctx = canvas.getContext("2d"),
  USER_TIME = "clock";

let addi = (Math.PI / 180) * 8.2,
  image = new Image();

function changeImg(num) {
  let path = "./images/weather_doodle/";
  if (num <= 5) return path + "1.png";
  else if (num <= 7) return path + "2.png";
  else if (num <= 9) return path + "3.png";
  else if (num <= 17) return path + "4.png";
  else if (num <= 19) return path + "5.png";
  else if (num <= 23) return path + "6.png";
}

function clock(hours) {
  clear();
  let angle = calAngle(hours);
  //   반원 모양 수정 시 필요한 코드
  //   ctx.beginPath();
  //   ctx.arc(angle.dx, angle.dy, 5, 0, Math.PI * 2, true);
  //   ctx.fill();
  image.src = changeImg(hours);
  if (hours >= 10 && hours <= 15)
    ctx.drawImage(image, angle.dx - 70, angle.dy - 40, 180, 180);
  else ctx.drawImage(image, angle.dx - 70, angle.dy - 70, 180, 180);
}

function calAngle(num) {
  let x = 95,
    y = 330,
    i = Math.PI / 2;

  for (let tmp = 0; tmp < num; tmp++) {
    x -= 36 * Math.cos(i);
    y -= 36 * Math.sin(i);
    i += addi;
  }
  return { dx: x, dy: y };
}

function clear() {
  ctx.clearRect(0, 0, 700, 450);
}

function loadClock() {
  const nowTime = new Date().getHours(); // 0~23
  const saveTime = localStorage.getItem(USER_TIME);
  if (saveTime === null || saveTime !== nowTime) {
    localStorage.setItem(USER_TIME, nowTime);
    clock(nowTime);
  }
}

function init() {
  setInterval(loadClock, 1000);
}

init();
