import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success("Message sent successfully!"); // ✅ Success toast
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("Failed to send message."); // ❌ Error toast
      }
    } catch (error) {
      toast.error("Error sending message."); // ❌ Network error toast
    }
  };
  

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Type Something 😊"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

       {/* Toast Container */}
    <ToastContainer position="top-right" autoClose={3000} />
      {/* {responseMessage && <p>{responseMessage}</p>} */}
    </section>

   
    </div>
  );
};

export default Contact;