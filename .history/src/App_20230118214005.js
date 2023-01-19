import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const themes = {
    light: {
      primaryColor: 'white',
      secondaryColor: 'black',
      fontFamily: 'Arial'
    },
    dark: {
      primaryColor: 'black',
      secondaryColor: 'white',
      fontFamily: 'Arial'
    }
  };
  
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const switchTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
