import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { currentTheme, switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <button className="" onClick={switchTheme}>Switch Theme</button>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
export default MyComponent;
