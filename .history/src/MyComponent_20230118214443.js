import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MyComponent() {
  const {currentTheme, switchTheme} = useContext(ThemeContext);

  return (
    <div>
        <button onClick={switchTheme}>Switch Theme</button>
        <div style={{ backgroundColor: currentTheme.primaryColor }}>
          <h1>My Component</h1>
        </div>
    </div>
  );
}
export default MyComponent;
