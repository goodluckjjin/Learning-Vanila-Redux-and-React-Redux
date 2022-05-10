import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

// react-router-dom 버전 6 미만일 경우만 가능
// useParams와 mapStateToProps의 state(로부터 얻은 Id) 대신
// mapStateToProps의 ownProps를 이용할 수도 있음
// react-router-dom 버전 6 이상은 ownProps에서 history, location, match와 같은 props를 받을 수 없음

function Detail({toDos}) {
  const {id} = useParams();
  const toDo = toDos.find(toDo => toDo.id === parseInt(id));
  const date = new Date(toDo?.id);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getUTCMinutes();
  console.log(month);
  console.log("date 는 ", toDo?.id);
  console.log("date 는 ", date);
  return (
    <div style={{margin: 8}}>
      <h1>{toDo?.text}</h1>
      <h5>생성된 날짜 : {year}년 {month}월 {day}일 {hour}시 {minute<10? "0"+minute: minute}분</h5>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {toDos: state};
}

export default connect(mapStateToProps)(Detail);