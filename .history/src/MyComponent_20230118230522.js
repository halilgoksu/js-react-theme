import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { currentTheme, switchTheme } = useContext(ThemeContext);
  console.log(currentTheme);

  return (
    <div>
      <button className="border-2 rounded-sm " onClick={switchTheme}>Lights</button>
     
    </div>
  );
}
export default MyComponent;
