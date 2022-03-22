import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log("1", action);
  if(action.type ==="ADD") {
    return count +1;
  } else if(action.type === "MINUS") {
    return count-1;
  } else {
    return count;
  }
  // return count;
};

const countStore = createStore(countModifier);


//action 보내기 위해서는 countStore.dispatch 이용
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"MINUS"});


console.log(countStore.getState());
