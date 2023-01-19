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
    <div className={themes.dark.secondaryColor}>
       <ThemeContext.Provider value={{currentTheme, switchTheme}}>
        <MyComponent />
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
