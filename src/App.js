import React from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import GlobalStyle from './GlobalStyle'
import Weather from './Weather'
import Todo from './Todo'

const App = ()=>{
  return (
    <>
      <GlobalStyle />
      <Weather />
      <Clock />
      <Greeting />
      <Todo />
    </>
  );
}

export default App;
