import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = (): JSX.Element => {
  return (
    <footer className="sm:flex fixed hidden bottom-14 right-14">
      <a href="#home">
        <FontAwesomeIcon icon={faCircleUp} size="2xl" />
      </a>
    </footer>
  );
};

export default Footer;
