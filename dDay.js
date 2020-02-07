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

function clickDday() {
  // console.log("clickDday");
  const wishDay = inputDay.value;
  inputDay.value = "";
  if (wishDay !== "") {
    localStorage.setItem(USER_DAY, wishDay);
    showDday(wishDay);
  } else alert("input data!!!");
}

function changeInfo() {
  // console.log("changeInfo");
  localStorage.removeItem(USER_DAY_INFO);
  goalInfo.classList.remove(SHOWING);
  askInfo();
}

function submitInfo() {
  // console.log("submitInfo");
  event.preventDefault();
  const info = infoInput.value;
  infoInput.value = "";
  localStorage.setItem(USER_DAY_INFO, info);
  infoDay.classList.remove(SHOWING);
  showInfo(info);
}

function showInfo(data) {
  // console.log("showInfo");
  goalInfo.classList.add(SHOWING);
  goalInfo.classList.add(SHOWING_HOVER);
  goalInfo.innerText = data;
  goalInfo.addEventListener("click", changeInfo);
}

function askInfo() {
  // console.log("askInfo");
  infoDay.classList.add(SHOWING);
  infoDay.addEventListener("submit", submitInfo);
}

function returnInitial() {
  // console.log("returnInitial");
  day.classList.add(SHOWING);
  infoDay.classList.remove(SHOWING);
  goalInfo.classList.remove(SHOWING);
  goalInfo.classList.remove(SHOWING_HOVER);
  goalDay.classList.remove(SHOWING);
  goalDay.classList.remove(SHOWING_HOVER);
  localStorage.removeItem(USER_DAY_INFO);
  localStorage.removeItem(USER_DAY);
  askGoalDay();
}

function showDday(date, info_) {
  // console.log("showDday");
  if (info_ === undefined || info_ === null) askInfo();
  else showInfo(info_);

  const value = new Date(date),
    today = new Date(),
    result = (value - today) / 1000 / 60 / 60 / 24,
    greatDay = Math.ceil(result);

  day.classList.remove(SHOWING);
  goalDay.classList.add(SHOWING);
  goalDay.classList.add(SHOWING_HOVER);
  if (greatDay === 0) goalDay.innerText = "It will be the perfect day!";
  else goalDay.innerText = `D-${greatDay}`;

  goalDay.addEventListener("click", returnInitial);
}

function askGoalDay() {
  // console.log("askGoalDay");
  day.classList.add(SHOWING);
  btn.addEventListener("click", clickDday);
}

function loadDday() {
  // console.log("loadDday");
  const localSaveDay = localStorage.getItem(USER_DAY);
  const localSaveInfo = localStorage.getItem(USER_DAY_INFO);
  if (localSaveDay !== null) showDday(localSaveDay, localSaveInfo);
  else askGoalDay();
}

function init() {
  // console.log("init");
  loadDday();
}

init();
