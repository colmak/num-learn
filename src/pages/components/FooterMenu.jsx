import { FiMail, FiTwitter, FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

const FooterMenu = () => {
  return (
    <div className="pt-3 grid gap-3 mt-pt-3 3 items-center grid-cols-5">
      <IconContext.Provider value={{ size: "15" }}>
        <div className="sub-color">
          <FiGithub /> Git
        </div>
        <div className="sub-color">
          <FiTwitter />
          Twitter
        </div>
        <div className="sub-color">
          <FiMail />
          Contact
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default FooterMenu;
