import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import {remove} from '../store';

import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  width: 100%;
  border: 2px solid #fd79a8;
  border-radius: 16px;
  overflow: hidden;
`;

const Content = styled.p`
  display: flex;
  align-items: center;
`;

const Number = styled.span`
  display: block;
  border: 2px solid #fd79a8;
  color: #fd79a8;
  margin: 0 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
`;

const Text = styled.span`
  font-size: 24px;
 
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
`;

function ToDo({text, onBtnClick, id, index}) {
  console.log()
  return (
    <Item>
      <Link to={`/${id}`}
      style={{
        textDecoration: 'none',
        color: 'black',
        width: "100%",
      }}
      ><Content><Number>{index}</Number><Text>{text} </Text></Content>
      </Link> 
      <Button onClick={onBtnClick}>
        <img src={require(`../img/close.png`)}/>
      </Button>
    </Item>
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