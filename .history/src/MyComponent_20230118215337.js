import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MyComponent() {
  const {currentTheme, switchTheme} = useContext(ThemeContext);

  return (
    <div>
        <button onClick={switchTheme}>Switch Theme</button>
        <div style={{ backgroundColor: currentTheme.primaryColor,color: }}>
            <h2>sdafasdfasdfasdf</h2>
        </div>
    </div>
  );
}
export default MyComponent;
