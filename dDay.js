const day = document.querySelector(".js-Dday"),
  inputDay = day.querySelector("input"),
  btn = day.querySelector("button"),
  showDate = day.querySelector("div");

const USER_DAY = "Dday";

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

function returnInitial() {}

function showDday(date) {
  const value = new Date(date),
    today = new Date(),
    result = (value - today) / 1000 / 60 / 60 / 24,
    greatDay = Math.ceil(result);

  if (greatDay === 0) showDate.innerText = "It will be the perfect day!";
  else showDate.innerText = `D-${greatDay}`;
}

function loadDday() {
  const localSave = localStorage.getItem(USER_DAY);
  if (localSave !== null) showDday(localSave);
}

function init() {
  loadDday();
  btn.addEventListener("click", clickDday);
}

init();
