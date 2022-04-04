import {createStore} from 'redux';
import {configureStore, createAction, createReducer, createSlice} from '@reduxjs/toolkit';

// 1. action 정의 및 생성
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

// 2. redux-toolkit을 이용한 action 생성 
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// 1. 실행시 state를 새로 생성
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

// 2. 실행시 state를 새로 생성(리턴)하거나 mutate
/* const reducer = createReducer([], {
  [addToDo] : (state,action) => { // state를 mutate함
    state.push({text: action.payload, id: Date.now()})
  },
  [deleteToDo] : (state,action) => // state를 return함
    state.filter(toDo => toDo.id !== action.payload)
});  */

const toDos = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state,action) => {
      state.push({text: action.payload, id: Date.now()})
    },
    remove: (state,action) =>
    state.filter(toDo => toDo.id !== action.payload)
  }
})


// const store = createStore(reducer);
// const store = configureStore({reducer});

/* 코드줄 줄이기 전
const store = configureStore({reducer: toDos.reducer}); */

console.log("toDos", toDos);

// export const actionCreators = {
//   addToDoć
//   deleteToDo
// }

export const {add, remove} = toDos.actions;

/* 코드줄 줄이기 전
export default store; */

/* 코드줄 줄이기 후 */
export default configureStore({reducer: toDos.reducer});