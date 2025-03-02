import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="intro-container">
        <p className="intro-text">
          Feel free to reach out for collaboration, inquiries, or just to say hello!
          I’m always open to exciting projects and networking opportunities.
        </p>
      </div>
      
      <section className="contact-details">
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <a
                href="mailto:sallywanga2016@gmail.com"
                title= "Email"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
              > <p>Email: Sallywanga2016@gmail.com</p></a>
         
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <a
          href="tel:0707720597"
          target="_blank"
          title="Call"
          rel="noopener noreferrer"
          className="phone-number"
      > 
          <p>Phone: <br/>+254 707 720 597</p>
          </a>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          <a>
            <p>Location:<br/> Nairobi, Kenya</p>
            </a>
        </div>
      </section>
      
      <section className="contact-form">
        <h2 className="h">Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;