import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { currentTheme, switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <button className="border-2 rounded-sm " onClick={switchTheme}>Lights</button>
      <div>
        {switchTheme:  <h1 className="text-3xl font-bold underline">On</h1>}
      
        <h1 className="text-3xl font-bold underline">Off</h1>

      </div>
    </div>
  );
}
export default MyComponent;
