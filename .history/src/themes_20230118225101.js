
import React ,{useState}from 'react'

const themes = () => {
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
    
    

  return (
    <div>
        const [currentTheme, setCurrentTheme] = useState(themes.light);
      const switchTheme = () => {
          setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
      }
    </div>
  )
}

export default themes
