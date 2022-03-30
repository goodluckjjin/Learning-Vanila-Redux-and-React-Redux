import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import ToDo from '../components/ToDo';

// Home은 dispatch, action creators를 직접 처리할 필요가 없음
// mapStateToProps와 mapDispatchToProps 두개의 함수로 나누어 이용하면 됨

function Home ({toDos, addToDo}) {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        console.log("onSubmit working")
        e.preventDefault();
        addToDo(text);
        setText("");
        console.log("onSubmit has worked")

    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
               {toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
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
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);