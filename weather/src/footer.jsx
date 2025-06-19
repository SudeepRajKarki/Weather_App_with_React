import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2025 Sudeep Raj Karki. All Rights Reserved.</p>
      <a href="https://twitter.com/Stranger_me03" target="_blank" className="text-dark me-3" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} /> 
      </a>
      <a href="https://www.facebook.com/karki.sudip.16/" target="_blank" className="text-dark me-3" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} /> 
      </a>
      <a href="https://www.instagram.com/stranger_me_03/" target="_blank" className="text-dark me-3" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} /> 
      </a>
      <a href="https://github.com/Strangerme03" target="_blank" className="text-dark me-3" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> 
      </a>
      <a href="https://www.linkedin.com/in/sudeep-raj-karki-15ab77238/" target="_blank" className="text-dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> 
      </a>
    </div>
  );
}

export default Footer;
