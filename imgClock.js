const canvas = document.getElementById("js-imgClock");
// console.log(Math.sin(90 * i)) -> 1을 출력
let i = Math.PI / 180,
  move = 0,
  x = 250,
  y = 300,
  cnt = 0;

// localStorage 활용하기
function clock() {
  const now = new Date();
  const ctx = canvas.getContext("2d");
  // 매초마다 이전 기록들을 지워준다
  ctx.translate(250, 150);
  // 이 사이에서 x,y를 조작해보자 1초에 3도씩 이동해야 하므로 3*i씩 더해준다
  x = 10 * Math.cos(move);
  y = 10 * Math.sin(move);
  console.log(x);
  console.log(y);
  //   console.log(cnt);
  //   console.log("cos");
  //   console.log(Math.cos(move));

  //   console.log("sin");
  //   console.log(Math.sin(move));
  //   cnt++;

  move += 10 * i;
  //
  ctx.beginPath();
  // x,y좌표에 반지름의 길이가 5인 원을 그려주겠다
  ctx.arc(x, y, 5, 0, Math.PI * 2, true);
  ctx.fill();
}

function init() {
  clock();
  // 우선 1초씩 움직이는지 확인하고, 1시간씩 이동하는 것으로 바꾸기
  setInterval(clock, 1000);
}

init();

/*
  const now = new Date();
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // 시계판 - 시
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // 시계판 - 분
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // 시간 표시 - 시
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 분
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 초
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();*/
