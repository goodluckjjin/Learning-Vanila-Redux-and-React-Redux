import {createStore} from 'redux';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  console.log("action", action);
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()  }];
      case DELETE_TODO:
        return state.filter(toDo => toDo.id !==action.id)
        default: 
        return state;
  }
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML =""; // 이미 생성된 li 다시 생성 방지

  toDos.forEach(toDo => {
    const li  = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText ="DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}; 

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};


form.addEventListener("submit", onSubmit);

// dispatch : reducer를 불러서 action 행사 = store와 커뮤니케이션
// action : reducer와 커뮤니케이션
// getState : state값 조회
// subscribe : action으로 인한 변화 감지
