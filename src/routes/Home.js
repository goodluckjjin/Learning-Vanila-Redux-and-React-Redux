import React, { useState } from "react";
import { connect } from "react-redux";
// import {actionCreators} from '../store';
import { add } from "../store";
import ToDo from "../components/ToDo";
import styled from "styled-components";

// Home은 dispatch, action creators를 직접 처리할 필요가 없음
// mapStateToProps와 mapDispatchToProps 두개의 함수로 나누어 이용하면 됨

const HomeWrapper = styled.div`
  padding: 0 48px;
`;

const MainTitle = styled.h1`
  color: #e84393;
  text-align: center;
  font-size: bold;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 8px 0 60px;
`;

const Input = styled.input`
  flex: 1;
  height: 52px;
  margin-right: 4px;
  padding: 0 8px;
  background-color: #fff;
  border: 2px solid #e84393;
  border-radius: 8px;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #e84393;
  font-size: 32px;
  color: #fff;
`;

const Title = styled.h2`
  color: #e84393;
`;

const Ul = styled.ul`
  padding: 0;
`;

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("내용을 입력해주세요");
    } else {
      addToDo(text);
      setText("");
    }
  };

  return (
    <HomeWrapper>
      <MainTitle>DON'T FORGET YOUR JOB!</MainTitle>
      <Form onSubmit={onSubmit}>
        <Input type="text" value={text} onChange={onChange} />
        <AddButton>+</AddButton>
      </Form>
      <Title>To Do List</Title>
      <Ul>
        {toDos.map((toDo, index) => (
          <ToDo {...toDo} key={toDo.id} index={index + 1} />
        ))}
      </Ul>
      {/* <Title>Done List</Title>
            <Ul>
               {toDos.map((toDo, index) => <ToDo {...toDo} key={toDo.id} index={index+1}/>)}
            </Ul> */}
    </HomeWrapper>
  );
}

// redux state로부터 home(component)에 prop으로써 전달
function mapStateToProps(state) {
  console.log("(Home) mapStateToProps is worked", state);

  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  console.log("(Home) mapDispatchToProps is worked");
  return {
    // addToDo : (text) => dispatch(actionCreators.addToDo(text))
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
