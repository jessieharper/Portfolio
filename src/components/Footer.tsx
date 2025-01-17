import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (): JSX.Element => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="fixed bottom-5 right-5 flex items-end gap-8">
      <a href="#home">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
      <a href="#home">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <p className="text-sm font-depixel">Jessica Harper {year}</p>
    </footer>
  );
};

export default Footer;
