import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';


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
       
      </header>
    </div>
  );
}

export default App;
