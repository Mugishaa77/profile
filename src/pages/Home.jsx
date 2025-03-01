import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="portfolio-header">
        <div>
          <h1>Sally Wanga</h1>
          <p>Web Developer and Frontend Engineer</p>
        </div>
        <div className="social-links">
          <div className="social-bg"></div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio Links Section */}
      <div className="portfolio-links">
        <a href="/projects" target="_blank" rel="noopener noreferrer" className="primary-btn">View My Work</a>
        <a href="https://swugisha.medium.com/" target="_blank" rel="noopener noreferrer" className="secondary-btn">Read my Tech Blog</a>
        <a href="https://www.linkedin.com/in/swugisha/" target="_blank" rel="noopener noreferrer" className="primary-btn">View my LinkedIn</a>
        <a href="https://github.com/Mugishaa77" target="_blank" rel="noopener noreferrer" className="secondary-btn">Visit my Github</a>
        <a href="/contact"  target="_blank" rel="noopener noreferrer" className="primary-btn">Get in Touch</a>
      </div>
    </div>
  );
}
