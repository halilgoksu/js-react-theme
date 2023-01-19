import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { currentTheme } = useContext(ThemeContext);
  console.log(currentTheme);

  const switchTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    setCurrentTheme({...currentTheme, fontSize: '20px'});
}

  return (
    <div>
      <button className="border-2 rounded-sm " onClick={switchTheme}>Lights</button>
      <div>
        <h1 className="text-3xl font-bold underline">Off /On</h1>

      </div>
    </div>
  );
}
export default MyComponent;
