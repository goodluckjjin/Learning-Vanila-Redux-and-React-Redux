import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import {remove} from '../store';


function ToDo({text, onBtnClick, id}) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>  
      <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("toDo mapDispatchToProps worked!");
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDß(ownProps.id))
    onBtnClick: () => dispatch(remove(ownProps.id))
    
  }
}

export default connect(null, mapDispatchToProps)(ToDo);