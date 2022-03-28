const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = todo => {
  const li = document.createElement("li");
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit". onSubmit);

// dispatch : reducer를 불러서 action 행사 = store와 커뮤니케이션
// action : reducer와 커뮤니케이션
// getState : state값 조회
// subscribe : action으로 인한 변화 감지
