import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaMoon className="sub-color" />
      ) : (
        <FaSun className="sub-color" />
      )}
    </span>
  );
};

export default ThemeIcon;
