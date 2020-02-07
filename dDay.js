const day = document.querySelector(".js-Dday"),
  inputDay = day.querySelector("input"),
  btn = day.querySelector("button"),
  //
  infoDay = document.querySelector("#dayInfo"),
  infoInput = infoDay.querySelector("input"),
  goalInfo = document.querySelector("#showInfo"),
  goalDay = document.querySelector("#showCnt");

const USER_DAY = "Dday",
  USER_DAY_INFO = "DdayInfo",
  SHOWING = "showing",
  SHOWING_HOVER = "SH_hover";

function saveDday(date) {
  localStorage.setItem(USER_DAY, date);
  showDday(date);
}

function clickDday() {
  const wishDay = inputDay.value;
  if (wishDay !== "") {
    saveDday(wishDay);
  } else alert("input data!!!");
}

function changeInfo() {
  infoDay.classList.add(SHOWING);
  goalInfo.classList.remove(SHOWING);
}

function submitInfo() {
  event.preventDefault();
  const info = infoInput.value;
  infoInput.value = "";
  localStorage.setItem(USER_DAY_INFO, info);
  infoDay.classList.remove(SHOWING);
  goalInfo.innerText = info;
  goalInfo.classList.add(SHOWING);
  goalInfo.addEventListener("click", changeInfo);
}

function showInfo(data) {
  infoDay.classList.remove(SHOWING);
  goalInfo.classList.add(SHOWING);
  goalInfo.innerText = data;
}

function showDday(date, info_) {
  const value = new Date(date),
    today = new Date(),
    result = (value - today) / 1000 / 60 / 60 / 24,
    greatDay = Math.ceil(result);

  showInfo(info_);
  day.classList.remove(SHOWING);
  goalDay.classList.add(SHOWING);
  day.classList.add();
  if (greatDay === 0) goalDay.innerText = "It will be the perfect day!";
  else goalDay.innerText = `D-${greatDay}`;

  infoDay.classList.add(SHOWING);
  infoDay.addEventListener("submit", submitInfo);
}

function askGoalDay() {
  day.classList.add(SHOWING);
  btn.addEventListener("click", clickDday);
}

function loadDday() {
  const localSaveDay = localStorage.getItem(USER_DAY);
  const localSaveInfo = localStorage.getItem(USER_DAY_INFO);
  if (localSaveDay !== null) showDday(localSaveDay, localSaveInfo);
  else askGoalDay();
}

function init() {
  loadDday();
}

init();
