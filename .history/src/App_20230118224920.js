import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import MyComponent from './MyComponent';
import { themes } from './themes';


function App() {

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
