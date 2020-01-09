const day = document.querySelector(".js-Dday"),
  inputDay = day.querySelector("input"),
  btn = day.querySelector("button"),
  showDate = day.querySelector("div");

function calDay() {
  const wishDay = inputDay.value;
  if (wishDay !== "") {
    const value = new Date(wishDay),
      today = new Date(),
      result = (value - today) / 1000 / 60 / 60 / 24;
    // 밀리세컨즈를 day로 변환해줘야 한다

    const greatDay = Math.ceil(result);
    if (greatDay === 0) showDate.innerText = "It will be the perfect day!";
    else showDate.innerText = `D-${greatDay}`;
  } else alert("input data!!!");
}

function loadDday() {
  // localStorage를 확인하여 저장된 데이터를 확인하고 만약에 있을 경우, 현재 날짜를 구하여 알맞게 출력해준다
}

function init() {
  loadDday();
  btn.addEventListener("click", calDay);
}

init();
