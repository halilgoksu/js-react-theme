
import React from 'react'

import React from 'react'

export default function themes() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
const switchTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
}
  return (
    <div>
      
    </div>
  )
}

