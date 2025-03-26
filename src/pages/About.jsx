import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container bg-white text-dark">
      {/* Hero Section with Working Online Image */}
      <div className="hero text-center py-5" data-aos="fade-down">
      <img
          src="https://th.bing.com/th/id/OIP.fYdYJPm3VNhY3mVDrXZbcQAAAA?w=390&h=257&rs=1&pid=ImgDetMain"
          alt="About Citizen Services"
          className="img-fluid mb-4"
          style={{
            width: "100%", 
            maxHeight: "400px", 
            objectFit: "cover", 
            borderRadius: "10px",
          }}
        />

        
      </div>

      {/* Our Mission & Vision */}
      <div className="container mt-5">
        <h2 className="text-center" data-aos="fade-right">Our Mission & Vision</h2>
        <p data-aos="fade-left">
          Our mission is to bridge the gap between the government and citizens by providing accurate and easy-to-access
          information about various schemes, scholarships, and hackathons. We aim to empower individuals with opportunities
          that can shape their future.
        </p>
        <p data-aos="fade-left">
          Our vision is to create a seamless and transparent digital ecosystem where every citizen can access crucial
          government and educational resources without hassle. We strive to keep citizens informed and prepared for every
          opportunity that comes their way.
        </p>
      </div>

      {/* How We Help? */}
      <div className="container mt-5 p-4 bg-light rounded shadow-lg" data-aos="fade-up">
        <h2 className="text-center">How We Help?</h2>
        <ul>
          <li>Provide latest updates on government schemes and scholarships.</li>
          <li>Ensure accurate and verified information is delivered.</li>
          <li>Help students find financial aid through scholarships.</li>
          <li>Encourage participation in hackathons and coding challenges.</li>
          <li>Offer a centralized platform for career and educational growth.</li>
          <li>Help job seekers find relevant government hiring opportunities.</li>
          <li>Provide expert insights on utilizing government benefits effectively.</li>
        </ul>
      </div>

      {/* Meet the Team */}
      <div className="container mt-5">
        <h2 className="text-center" data-aos="fade-right">Meet the Team</h2>
        <div className="row">
          <div className="col-md-4 text-center" data-aos="zoom-in">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Abhinav Pandey" className="rounded-circle" width="150" height="150" />
            <h5>Abhinav Pandey</h5>
            <p>Frontend Developer</p>
          </div>
          <div className="col-md-4 text-center" data-aos="zoom-in">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="John Doe" className="rounded-circle" width="150" height="150" />
            <h5>John Doe</h5>
            <p>Backend Developer</p>
          </div>
          <div className="col-md-4 text-center" data-aos="zoom-in">
            <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Jane Smith" className="rounded-circle" width="150" height="150" />
            <h5>Jane Smith</h5>
            <p>Project Manager</p>
          </div>
        </div>
      </div>

      {/* Testimonials & Success Stories */}
      <div className="container mt-5 p-4 bg-light rounded shadow-lg" data-aos="fade-up">
        <h2 className="text-center">What People Say</h2>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <blockquote className="blockquote">
              <p>"Citizen Services helped me find the perfect scholarship to support my education!"</p>
              <footer className="blockquote-footer text-dark">Student A</footer>
            </blockquote>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <blockquote className="blockquote">
              <p>"The platform provided real-time updates on government schemes, helping me avail benefits I was eligible for."</p>
              <footer className="blockquote-footer text-dark">User B</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Future Plans */}
      <div className="container mt-5">
        <h2 className="text-center" data-aos="fade-up">Future Plans</h2>
        <p data-aos="fade-left">
          Citizen Services is constantly evolving. In the near future, we plan to introduce AI-driven recommendation systems
          to provide personalized government schemes and scholarship suggestions based on user profiles.
        </p>
        <p data-aos="fade-left">
          We are also working on expanding our platform to include training programs, online workshops, and mentorship
          opportunities to help individuals gain new skills and improve their career prospects.
        </p>
      </div>
    </div>
  );
}

export default About;
