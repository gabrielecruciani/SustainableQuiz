import './Footer.css';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='social-container'>
        <a href="https://www.instagram.com/_gabriele.it_/" target="_blank" className="social-image">
          <FaIcons.FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/gabriele-cruciani/" target="_blank" className="social-image">
          <FaIcons.FaLinkedinIn />
        </a>
        <a href="https://twitter.com/gabriele_it_" target="_blank" className="social-image">
          <FaIcons.FaTwitter />
        </a>
        <a href="https://github.com/gabrielecruciani" target="_blank" className="social-image">
          <FaIcons.FaGithub />
        </a>
        <a href="https://talent.start2impact.it/profile/gabriele-cruciani" target="_blank" className="social-image">
          <MdIcons.MdSchool />
        </a>
      </div>
      
      <p className='copyright'>
        Copyright &copy; {new Date().getFullYear()} Gabriele Cruciani. All rights reserved.
      </p>
    </div>
  );
}

export default Footer