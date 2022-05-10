# Vanilla Redux

Learning Vanilla-Redux and React-Redux

순수 JS로만 Redux 사용해보고 React로 Redux를 이용하여 나만의 투두리스를 만들어 보았다

# 1강 Vanilla Redux - 카운터

1. Store

- createStore 상태저장소, reducer를 인자로 받는다

2. Reducer

- action을 통해 state를 수정할 수 있는 유일한 함수, state(초기값)와 action을 인자로 받는다
- action의 type을 체크하여 switch문으로 실행한다

3. Actions

- reducer와 소통하는 방법
- store의 dispatch를 통하여 reducer에 action을 보낼 수 있음
- dispatch는 object를 인자로 받는다 (예: {type: "aa"})

4. Subscription

- subscribe(): store의 변화를 알 수 있음
- getState(): 현재 state 값 조회

# 2강 Vanilla Redux - 투두리스트

- dispatch, action creators를 직접 처리해야 함
- state를 바꿀 수 있는 유일한 방법은 action 보내기
- action을 통해 새로운 objectf를 리턴 (수정 X)

# 3강 React Redux - 투두리스트

- dispatch, action creators를 직접 처리할 필요가 없이,
  mapStateToProps와 mapDispatchToProps 두개의 함수로 나누어 이용하면 됨
- store.js 파일에 redux store, reducer 코드 작성 후 Provider로 App 감싸기

1. connect

- connect는 argument로 state와 dispatch를 가지는 함수
  - connect()는 return한 것을 component의 prop에 추가해야 함

2. mapStateToProps

- 두 종류의 argument와 함께 호출되는 함수
  1. 첫번째 argument는 Redux store에서 온 state임
  2. 두번째 argument는 component의 props임

3. mapDispatchToProps 대신 useDispatch

- 강의에서는 mapDispatchToProps를 사용하지만 공식문서에서는 useDispatch를 사용하고 있어 useDispatch로 구현

4. ownProps 대신 useParams

- react-router-dom v6 이상부터 ownProps로 history, location, match 등의 props를 component에서 받을 수 없음

# 4강 React Redux with Redux-toolkit - 투두리스트

- 상용코드를 간결화시킴

1. createAction

- action을 한번에 정의하고 생성

2. createReducer

- state를 mutate하거나 return함
  - redux toolkit은 immer.js와 함께 뒤에서 작동하기 떄문

3. configureStore
4. creatSlice

- name, initialState, action 등 캡슐화시킴
