import React, {useState,useEffect} from 'react';


const Todo = ()=>{
    const [todos,setTodos]=useState([]);
    const [inputText,setInputText]=useState('');
    const [nextId,setNextId]=useState(1);

    const onChange = e => setInputText(e.target.value);
    const onClick = ()=>{
        const nextNames = todos.concat({id:nextId,text:inputText});
        setNextId(nextId+1);
        setTodos(nextNames);
        setInputText('');
    }

    const onRemove = id =>{
        const nextNames=todos.filter(name=>name.id !==id);
        setTodos(nextNames);
    };

    const namesList = todos.map(name=>(
        <li className ="doingItems" key ={name.id}>{name.text}<button className="btn" onClick={()=>onRemove(name.id)}>DONE!</button></li>
    ));


        return (
        <div className="todoCon">
            <div className="doingWhat">
        <input className ="input" value={inputText} placeholder ="Tell me your Plan" onChange={onChange} ></input>
        <button className="btn" onClick={onClick}> ADD!</button>
        </div>
        <ul>{namesList}</ul>
        </div>
        )
  



}


export default Todo;