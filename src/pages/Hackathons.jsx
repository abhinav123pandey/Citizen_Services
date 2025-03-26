import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Hackathons() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allHackathons = [
    { 
      title: "Google Code Jam", 
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630111050/Google-Code-jam-1-1-1-768x361.jpg", 
      desc: "A global coding competition hosted by Google.", 
      link: "#" 
    },
    { 
      title: "Facebook Hackathon", 
      img: "https://th.bing.com/th/id/OIP.SiVeFrZjOhdaQmcd5NI-CQHaEK?rs=1&pid=ImgDetMain", 
      desc: "Innovate and build amazing projects using Meta's technologies.", 
      link: "#" 
    },
    { 
      title: "Microsoft Imagine Cup", 
      img: "https://news.microsoft.com/uploads/sites/93/2015/07/Microsoft-2014-Worldwide-Imagine-Cup_1-1024x683.jpg", 
      desc: "A premier student technology competition by Microsoft.", 
      link: "#" 
    },
    { 
      title: "HackMIT", 
      img: "https://th.bing.com/th/id/OIP.v7q5o0Q8uzBTtS5nyoKhBgHaD7?rs=1&pid=ImgDetMain", 
      desc: "MIT’s flagship hackathon, one of the largest in the world.", 
      link: "#" 
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHackathons, setFilteredHackathons] = useState(allHackathons);

  useEffect(() => {
    setFilteredHackathons(
      allHackathons.filter(hackathon =>
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="hackathons-container d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light p-4 shadow-sm" style={{ width: "250px", minHeight: "100vh" }}>
        <h4 className="fw-bold">Categories</h4>
        <ul className="list-unstyled mt-3">
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">🖥️ AI/ML Hackathons</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">💻 Web Development</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">🔐 Cybersecurity Challenges</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">📱 App Development</a></li>
        </ul>
      </div>

      <div className="content w-100">
        {/* Hero Section */}
        <div 
          className="hero-section text-center text-white py-5"
          style={{ 
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1560179707-f14e90ef3623) center/cover no-repeat",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
          data-aos="fade-down"
        >
          <h1 className="display-4 fw-bold">Explore Exciting Hackathons</h1>
          <p className="lead">Join top hackathons to showcase your skills & win amazing prizes.</p>
        </div>

        {/* Search Bar */}
        <div className="container mt-4 text-center">
          <input
            type="text"
            className="form-control w-50 mx-auto p-2"
            placeholder="🔍 Search hackathons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-aos="fade-right"
          />
        </div>

        {/* Hackathon Cards */}
        <div className="container mt-5">
          <div className="row">
            {filteredHackathons.length > 0 ? (
              filteredHackathons.map((hackathon, index) => (
                <div className="col-md-6 mt-4" key={index} data-aos="zoom-in">
                  <div className="card p-3 shadow-lg border-0 rounded-4">
                    <img 
                      src={hackathon.img} 
                      alt={hackathon.title} 
                      className="img-fluid rounded-3"
                      style={{ height: "230px", objectFit: "cover" }} 
                    />
                    <div className="card-body text-center">
                      <h4 className="fw-bold">{hackathon.title}</h4>
                      <p className="text-muted">{hackathon.desc}</p>
                      <a href={hackathon.link} className="btn btn-primary px-4 py-2 fw-bold">Apply Now</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-4 text-danger">❌ No hackathons found</p>
            )}
          </div>
        </div>

        {/* Additional Content */}
        <div className="container mt-5">
          <h2 className="fw-bold text-center" data-aos="fade-up">Why Participate in Hackathons?</h2>
          <p className="text-center text-muted" data-aos="fade-up">
            Hackathons provide a platform for innovation, networking, and learning. You can solve real-world problems, collaborate with experts, and win exciting prizes.
          </p>

          <h3 className="fw-bold mt-4" data-aos="fade-up">Benefits</h3>
          <ul className="list-group mt-3" data-aos="fade-up">
            <li className="list-group-item">✅ Learn & apply new technologies</li>
            <li className="list-group-item">✅ Build projects for your portfolio</li>
            <li className="list-group-item">✅ Get mentorship from industry experts</li>
            <li className="list-group-item">✅ Win cash prizes & internship offers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hackathons;