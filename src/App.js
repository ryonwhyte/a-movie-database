import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//Styles
import {GlobalStyle} from './GlobalStyle';

function App() {

  const test = () => {
    <p>This function is my test function</p>
  }

  return (
    <div className="App">
      <Header />
      <Home />
      <div>{test()}</div>
      <button id="test">Test</button>
      <GlobalStyle />
    </div>
  );
}

export default App;
