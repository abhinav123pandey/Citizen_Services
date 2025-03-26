import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container bg-light text-dark">
      {/* Hero Section */}
      <div
        className="hero-section text-center py-5"
        data-aos="fade-down"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://th.bing.com/th/id/OIP.T1Ba-XEkHecAg7R1qZDH4gHaDF?w=1440&h=600&rs=1&pid=ImgDetMain) center/cover no-repeat",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1 className="display-4 fw-bold">Get in Touch</h1>
        <p className="lead">We'd love to hear from you! Reach out anytime.</p>
      </div>

      {/* Contact Buttons */}
      <div className="container mt-4 text-center" data-aos="fade-right">
        <a href="tel:+919129271794" className="btn btn-danger mx-2 px-4 py-2">
          <FaPhoneAlt /> Call Us
        </a>
        <a href="https://wa.me/919129271794" className="btn btn-success mx-2 px-4 py-2">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="mailto:abhi@gmail.com" className="btn btn-primary mx-2 px-4 py-2">
          <FaEnvelope /> Email
        </a>
      </div>

      {/* Contact Information */}
      <div className="container mt-5 p-4 bg-white shadow rounded" data-aos="fade-left">
        <h2 className="text-center">Our Contact Details</h2>
        <p className="text-center">Feel free to connect with us for any inquiries.</p>
        <div className="d-flex justify-content-center">
          <ul className="list-unstyled text-center">
            <li><FaPhoneAlt /> +91 9129271794</li>
            <li><FaEnvelope /> abhi@gmail.com</li>
            <li><FaMapMarkerAlt /> 123, Citizen Avenue, New Delhi</li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mt-5 p-4 bg-light rounded shadow-lg" data-aos="fade-up">
        <h2 className="text-center">Send Us a Message</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="container mt-5">
        <h2 className="text-center" data-aos="fade-right">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {[{ question: "How can I apply for government schemes?", answer: "Visit our website and browse available schemes." },
            { question: "How to participate in hackathons?", answer: "Register on our platform to get hackathon updates." },
            { question: "How to get scholarship information?", answer: "We provide regular updates on scholarships." }].map((faq, index) => (
            <div className="accordion-item" data-aos="fade-up" key={index}>
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Contact Panel */}
      <div
        className="position-fixed end-0 top-50 translate-middle-y bg-dark text-white p-3 rounded-start shadow"
        style={{ zIndex: "1000" }}
        data-aos="fade-left"
      >
        <h5>Quick Contact</h5>
        <p><FaPhoneAlt /> <a href="tel:+919129271794" className="text-white">+91 9129271794</a></p>
        <p><FaWhatsapp /> <a href="https://wa.me/919129271794" className="text-white">WhatsApp</a></p>
        <p><FaEnvelope /> <a href="mailto:abhi@gmail.com" className="text-white">Email</a></p>
      </div>
    </div>
  );
}

export default Contact;