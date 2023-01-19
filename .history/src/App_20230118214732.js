import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import MyComponent from './MyComponent';
import { themes } from './themes';


function App() {

  
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const switchTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  }
  
  return (
    <div className="App">
       <ThemeContext.Provider value={{currentTheme, switchTheme}}>
      <div>
        <h1>My App</h1>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
