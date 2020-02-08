const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos",
  TODO_CNT = "toDoCount";

let saveList = [],
  checkBox = new Image();

function saveToDos() {
  // 스트링으로 변환 후 저장
  localStorage.setItem(TODO_LS, JSON.stringify(saveList));
}

function deleteToDo(event) {
  const btn = event.target;
  let li = btn.parentNode;
  if (btn.localName === "img") li = li.parentNode;
  setTimeout(function() {
    // 체크박스의 애니메이션 구현을 위해 시간지연 시킴
    toDoList.removeChild(li);
    const cleanTodo = saveList.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    saveList = cleanTodo;
    saveToDos();
  }, 300);
}

function writeToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("div");
  const span = document.createElement("div");
  const newId = saveList.length + 1;

  delBtn.innerHTML =
    "<img src='images/todo/checkBox-0.png' width=30px height=30px/>";
  // delBtn 클릭 -> toDo 항목 삭제
  delBtn.addEventListener("mousedown", function() {
    delBtn.innerHTML =
      "<img src='images/todo/checkBox-1.png' width=30px height=30px/>";
  });
  delBtn.addEventListener("mouseup", deleteToDo);
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
  if (saveList.length < 3) {
    if (currentValue != "") {
      writeToDo(currentValue);
    }
  } else alert("three list!");
  toDoInput.value = "";
}

function loadTodoList() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      writeToDo(toDo.text);
    });
  }
}

function init() {
  loadTodoList();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
