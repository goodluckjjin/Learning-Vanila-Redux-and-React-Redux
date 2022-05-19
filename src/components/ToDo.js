import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { actionCreators } from '../store';
import { remove, check } from "../store";

import styled from "styled-components";
import Checkbox from "./Checkbox";

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

const Content = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
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
  display: block;
  padding: 12px 0 12px 4px;
  font-size: 24px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 4px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
`;

const CheckboxWrap = styled.div`
  margin: 0 8px;
`;

function ToDo({ text, onBtnClick, id, checked }) {
  console.log("toDo = > ", text, ":", checked);
  return (
    <Item>
      <Content>
        {/* <Number>{index}</Number> */}
        <CheckboxWrap>
          <Checkbox value={checked} onChange={onBtnClick?.onCheckBtnClick} />
        </CheckboxWrap>
        <Link
          to={`/${id}`}
          style={{
            textDecoration: "none",
            color: "black",
            flex: 1,
          }}
        >
          <Text>{text} </Text>
        </Link>
      </Content>
      <Button onClick={onBtnClick?.onRemoveBtnClick}>
        <img src={require(`../img/close.png`)} />
      </Button>
    </Item>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("toDo mapDispatchToProps worked!", dispatch, "222", ownProps);
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDß(ownProps.id))
    // onBtnClick: () => dispatch(remove(ownProps.id)),
    onBtnClick: {
      onRemoveBtnClick: () => dispatch(remove(ownProps.id)),
      onCheckBtnClick: () => dispatch(check(ownProps)),
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
