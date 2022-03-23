import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//reducer : data 변경
const countModifier = (count = 0, action) => {
  console.log("1", action);
  if(action.type ==="ADD") {
    return count +1;
  } else if(action.type === "MINUS") {
    return count-1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);


//action 보내기 위해서는 countStore.dispatch 이용
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"MINUS"});


const onChange = () => {
  console.log("there was a change on the store");
  console.log(countStore.getState());
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = ()=> {
  countStore.dispatch({type:"ADD"});
}

const handleMinus = ()=> {
  countStore.dispatch({type:"MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log("countStore", countStore);
// dispatch : action 행사 = store와 커뮤니케이션
// getState : state값 조회
// subscribe : action으로 인한 변화 감지
