import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {actionCreators} from '../store';

// Home은 dispatch, action creators를 직접 처리할 필요가 없음
// mapStateToProps와 mapDispatchToProps 두개의 함수로 나누어 이용하면 됨



function Home ({toDos, addToDo}) {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    const dispatch = useDispatch()
    console.log("디스패치 ", dispatch);

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

// redux state로부터 home(component)에 prop으로써 전달
function mapStateToProps(state) {
    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);