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
  
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {toDos: state};
}

export default connect(mapStateToProps)(Detail);