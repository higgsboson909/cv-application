import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="has-text-centered">
          <p className="has-text-white-ter">
            
            &copy; 2025 CV Builder. All rights reserved.{' '}
<a
              href="https://github.com/higgsboson909/"
              target="_blank"
              rel="noopener noreferrer"
className="has-text-white-ter"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
