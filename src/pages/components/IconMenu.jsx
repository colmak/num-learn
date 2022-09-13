import ThemeIcon from "./ThemeIcon";
import { FiUser, FiSliders, FiAward, FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";

const IconMenu = () => {
  return (
    <IconContext.Provider value={{ size: "30" }}>
      <FiAward className="sub-color" />
      <FiSliders className="sub-color" />
      <FiInfo className="sub-color" />
      <FiUser className="sub-color" />
      <ThemeIcon />
    </IconContext.Provider>
  );
};

export default IconMenu;
