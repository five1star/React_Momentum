import React,{useState} from 'react';

const Greeting = ()=>{
    const [name,setName]=useState('');
    let temp;

    const handleOnchange=(e)=>{
        temp = e.target.value;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setName(temp)
    }

return <div>
{name==='' ? <form className="nameAsking" onSubmit={handleSubmit}>
<h2>What is your Name</h2> 
<input className ="askingInput" type="text" placeholder="Stranger?" onChange={handleOnchange} />
</form>  : <h2>Hello {<span className='name'>{name}</span>}</h2> }
</div>
}

export default Greeting;