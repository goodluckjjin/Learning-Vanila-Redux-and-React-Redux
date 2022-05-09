import React, {useState} from 'react';
import {connect} from 'react-redux';
// import {actionCreators} from '../store';
import {add} from '../store';
import ToDo from '../components/ToDo';
import styled from 'styled-components';

// Home은 dispatch, action creators를 직접 처리할 필요가 없음
// mapStateToProps와 mapDispatchToProps 두개의 함수로 나누어 이용하면 됨


const HomeWrapper = styled.div`
    padding: 0 8px;
`;

const Title = styled.h1`
    color: #e84393;
`;

const Form = styled.form`
    display: flex;
    margin: 8px 0;

`;

const Input = styled.input`
    margin-right: 4px;
    padding: 8px;
    background-color: #fff;
    border: 2px solid #e84393;
    border-radius: 8px;
`;

const AddButton = styled.button`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: #e84393;
  font-size: 32px;
  color: #fff;
`;

const Ul = styled.ul`
    padding: 0;
`;

function Home ({toDos, addToDo}) {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        if(!text) {
            alert("내용을 입력해주세요");
        } else {
            addToDo(text);
            setText("");
        }

    }

    return (
        <HomeWrapper>
            <Title>To Do List</Title>
            <Form onSubmit={onSubmit}>
                <Input type="text" value={text} onChange={onChange}/>
                <AddButton>+</AddButton>
            </Form>
            <Ul>
               {toDos.map((toDo, index) => <ToDo {...toDo} key={toDo.id} index={index+1}/>)}
            </Ul>
        </HomeWrapper>
    )
}

// redux state로부터 home(component)에 prop으로써 전달
function mapStateToProps(state) {
    console.log("mapStateToProps is worked", state)

    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps is worked")
    return {
        // addToDo : (text) => dispatch(actionCreators.addToDo(text))
        addToDo : (text) => dispatch(add(text))
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);