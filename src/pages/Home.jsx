import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="home-container">
    {/* Header Section */}
    <div className="portfolio-header">
      <div>
        <h1>Sally Wanga</h1>
        <p>Web Developer and Front-End Engineer</p>
      </div>
      <div className="social-links">
        <div className="social-bg"></div>
        <div className="social-icons" >
          <a href="https://github.com/Mugishaa77" style={{color: "#8039A4"}} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub  />
          </a>
          <a href="https://www.linkedin.com/in/swugisha/"  style={{ color: "#0A66C2"}} target="_blank" rel="noopener noreferrer" className="linkedin" title="LinkedIn">
            <FaLinkedin/>
          </a>
          <a href="https://swugisha.medium.com/"  style={{color: "black" }} target="_blank" rel="noopener noreferrer" className="twitter" title="Medium Blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
              <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  
    {/* Portfolio Links Section */}
    <div className="portfolio-links">
      <a href="/projects" target="_blank" rel="noopener noreferrer" className="primary-btn" title="View My Projects">View My Work</a>
      <a href="https://swugisha.medium.com/" target="_blank" rel="noopener noreferrer" className="secondary-btn" title="Read My Blog">Read my Tech Blog</a>
      <a href="https://www.linkedin.com/in/swugisha/" target="_blank" rel="noopener noreferrer" className="primary-btn" title="View My LinkedIn">View my LinkedIn</a>
      <a href="https://github.com/Mugishaa77" target="_blank" rel="noopener noreferrer" className="secondary-btn" title="Visit My GitHub">Visit my GitHub</a>
      <a href="/contact" target="_blank" rel="noopener noreferrer" className="primary-btn" title="Contact Me">Get in Touch</a>
    </div>

    <div>
    <Footer />
    </div>
  </div>
  );
}  
