import {createStore} from 'redux';


const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log("state : ", state);
  console.log("action", action.text);
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()  }];
      case DELETE_TODO:
        return []
        default: 
        return state;
  }
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState));

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({type : ADD_TODO, text: toDo});
};



form.addEventListener("submit", onSubmit);

// dispatch : reducer를 불러서 action 행사 = store와 커뮤니케이션
// action : reducer와 커뮤니케이션
// getState : state값 조회
// subscribe : action으로 인한 변화 감지
