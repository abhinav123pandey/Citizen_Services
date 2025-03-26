import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Schemes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="schemes-container bg-white text-dark">
      {/* Hero Section with Image */}
      <div className="hero text-center py-5 bg-black text-white" data-aos="fade-down">
        <h1 className="display-4">Government Schemes for Students</h1>
        <p className="lead">Find scholarships, educational loans, and internship opportunities.</p>
      </div>

      {/* Image Slider for Schemes */}
      <div className="container mt-4">
        <Carousel data-aos="fade-up" interval={2500}>
          {[
            { src: "https://th.bing.com/th/id/OIP.i7XXyvQAvOPAUdVLW5i_QwHaE8?rs=1&pid=ImgDetMain", title: "Scholarship" },
            { src: "https://static.vecteezy.com/system/resources/previews/001/925/926/large_2x/student-loan-concept-free-vector.jpg", title: "Education Loan" },
            { src: "https://th.bing.com/th/id/OIP.dvxM4KdraSZKU_0Wpe5I_AHaEK?rs=1&pid=ImgDetMain", title: "Internships" }
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 rounded" src={item.src} alt={item.title} style={{ height: "350px", objectFit: "cover" }} />
              <Carousel.Caption>
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Sidebar and Schemes List */}
      <div className="container mt-5 d-flex">
        {/* Sidebar */}
        <div className="sidebar bg-light p-3 shadow rounded me-4" style={{ width: "25%" }} data-aos="fade-right">
          <h4>Filter by Category</h4>
          <ul className="list-unstyled">
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Education Loans</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Government Exams</a></li>
          </ul>
        </div>

        {/* Schemes List */}
        <div className="schemes-list flex-grow-1">
          <h2 data-aos="fade-right">Available Schemes</h2>
          <div className="row">
            {[
              { title: "PM Scholarship", img: "https://ht.home-tution.com/webroot/files/PM%20Scholarship%202024%20copy.jpg" },
              { title: "Startup India for Students", img: "https://th.bing.com/th/id/OIP.k2KQLZyGzvOglrQxLaEwFAHaE7?rs=1&pid=ImgDetMain" },
              { title: "Ayushman Bharat for Young Adults", img: "https://th.bing.com/th/id/OIP.sdML8Qb0p8jgdV5PWeaPcwHaD6?rs=1&pid=ImgDetMain" },
              { title: "Digital India Youth Program", img: "https://th.bing.com/th/id/OIP.DdhvFYHgboBTwf9ZNvr8AAHaEK?rs=1&pid=ImgDetMain" }
            ].map((scheme, index) => (
              <div className="col-md-6 mt-3" key={index} data-aos="zoom-in">
                <div className="card p-3 shadow-lg scheme-card">
                  <img src={scheme.img} alt={scheme.title} className="img-fluid rounded" style={{ height: "200px", objectFit: "cover" }} />
                  <h4 className="mt-3">{scheme.title}</h4>
                  <p>Details about {scheme.title} will go here.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="container mt-5">
        <h2 className="text-center" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="accordion mt-3" id="faqAccordion">
          {[
            { question: "Who can apply for government schemes?", answer: "Eligibility varies by scheme. Check the official website for details." },
            { question: "Are these schemes free?", answer: "Some schemes are free, while others require nominal registration fees." },
            { question: "How long does it take to get approved?", answer: "Approval time depends on the scheme and your eligibility." },
            { question: "Can I apply for multiple schemes?", answer: "Yes, you can apply for as many schemes as you qualify for." }
          ].map((faq, index) => (
            <div className="accordion-item" key={index} data-aos="fade-up">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Styling for Hover Effects */}
      <style>
        {`
          .scheme-card {
            transition: transform 0.3s ease-in-out;
          }
          .scheme-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Schemes;
