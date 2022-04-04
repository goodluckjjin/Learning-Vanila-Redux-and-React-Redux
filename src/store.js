import {createStore} from 'redux';
import {createAction, createReducer} from '@reduxjs/toolkit';

// const ADD = "ADD";
// const DELETE = "DELETE";


// const addToDo = (text) => {
//   return {
//     type:ADD,
//     text
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DELETE, 
//     id: parseInt(id)
//   }
// }

//redux-toolkit을 이용한 action 생성 
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// 실행시 state를 새로 생성
/* const reducer = (state=[], action) => {
 switch(action.type) {
   case addToDo.type:
     console.log(action)
    //  return [{text: action.text, id: Date.now()}, ...state];
    return [{text: action.payload, id: Date.now()}, ...state];
     case deleteToDo.type:
      //  return state.filter(toDo => toDo.id !== action.id);
       return state.filter(toDo => toDo.id !== action.payload);
       default:
         return state;
 }
} */

const reducer = createReducer([], {
  [addToDo] : (state,action) => { // state를 mutate함
    state.push({text: action.payload, id: Date.now()})
  },
  [deleteToDo] : (state,action) => // state를 return함
    state.filter(toDo => toDo.id !== action.payload)
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store;