import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import MyComponent from './MyComponent';


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
    <div style={{
      backgroundColor: currentTheme.primaryColor,
      color: currentTheme.secondaryColor,
       }} 
      className="h-screen w-full flex justify-center items-center text-center">
    <ThemeContext.Provider value={{currentTheme, switchTheme}}>
        <MyComponent />
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
