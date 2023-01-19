
import React ,{useState}from 'react'

function themes() = {
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
    <div>
      
    </div>
  )
}

export default themes
