const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = document.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos",
  TODO_CNT = "toDoCount";

let saveList = [];

function saveToDos() {
  // 스트링으로 변환시켜 저장해준다
  localStorage.setItem(TODO_LS, JSON.stringify(saveList));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}

function writeToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "그림 추가 예정";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = `${text}`;
  // li요소 생성 후에 추가해주는 과정
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  saveList.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (toDo.length < 5) {
    if (currentValue != "") {
      writeToDo(currentValue);
    }
  } else alert("five list!");
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    // 문자열을 객체로 변환하여 가져온다 -> parseToDos는 배열을 저장
    // 배열에 있는 객체(obj)에 obj.text를 writeToDo 함수로 넘겨준다
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      writeToDo(toDo.text);
    });
  }
}

function init() {
  loadTodoList();
  toDoForm.addEventListener("sumit", handleSubmit);
}

init();
