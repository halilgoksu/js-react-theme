import React from "react";
import { useState } from "react";


export const ThemeContext = React.createContext();
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
  