import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Scholarships() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allScholarships = [
    { 
      title: "National Merit Scholarship", 
      img: "https://th.bing.com/th/id/OIP.D16WwOaE-5Ybz77iJKZquAHaEL?rs=1&pid=ImgDetMain", 
      desc: "Merit-based scholarship for outstanding students in academics.", 
      link: "#" 
    },
    { 
      title: "Fulbright Scholarship", 
      img: "https://th.bing.com/th/id/OIP.efsXxw4bK9Nxgi77qCKH4gHaEc?w=1250&h=750&rs=1&pid=ImgDetMain", 
      desc: "Fully funded scholarship for students aspiring to study abroad.", 
      link: "#" 
    },
    { 
      title: "STEM Excellence Grant", 
      img: "https://www.pickascholarship.com/wp-content/uploads/2024/05/15000-STEM-Excellence-Scholarship-UK-2024-768x768.png", 
      desc: "For students excelling in Science, Technology, Engineering, and Mathematics.", 
      link: "#" 
    },
    { 
      title: "Women in Tech Scholarship", 
      img: "https://blogassets.leverageedu.com/media/uploads/2023/07/07165104/Adobe-Women-in-Tech-Scholarship.jpg", 
      desc: "Encouraging women to pursue careers in technology and innovation.", 
      link: "#" 
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState(allScholarships);

  useEffect(() => {
    setFilteredScholarships(
      allScholarships.filter(scholarship =>
        scholarship.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="scholarships-container d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light p-4 shadow-sm" style={{ width: "250px", minHeight: "100vh" }}>
        <h4 className="fw-bold">Categories</h4>
        <ul className="list-unstyled mt-3">
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">🎓 National Scholarships</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">🌍 International Scholarships</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">⚙️ STEM Scholarships</a></li>
          <li className="mb-2"><a href="#" className="text-decoration-none text-dark">👩‍💻 Women in Tech</a></li>
        </ul>
      </div>

      <div className="content w-100">
        {/* Hero Section */}
        <div 
          className="hero-section text-center text-white py-5"
          style={{ 
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://th.bing.com/th/id/OIP.Da_VHS3Q49bFZu9fa2CdFwHaDP?rs=1&pid=ImgDetMain) center/cover no-repeat",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
          data-aos="fade-down"
        >
          <h1 className="display-4 fw-bold">Top Scholarships for Students</h1>
          <p className="lead">Find and apply for national & international scholarships to fund your education.</p>
        </div>

        {/* Search Bar */}
        <div className="container mt-4 text-center">
          <input
            type="text"
            className="form-control w-50 mx-auto p-2"
            placeholder="🔍 Search scholarships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-aos="fade-right"
          />
        </div>

        {/* Scholarship Cards */}
        <div className="container mt-5">
          <div className="row">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship, index) => (
                <div className="col-md-6 mt-4" key={index} data-aos="zoom-in">
                  <div className="card p-3 shadow-lg scholarship-card border-0 rounded-4">
                    <img 
                      src={scholarship.img} 
                      alt={scholarship.title} 
                      className="img-fluid rounded-3"
                      style={{ height: "230px", objectFit: "cover" }} 
                    />
                    <div className="card-body text-center">
                      <h4 className="fw-bold">{scholarship.title}</h4>
                      <p className="text-muted">{scholarship.desc}</p>
                      <a href={scholarship.link} className="btn btn-primary px-4 py-2 fw-bold">Apply Now</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-4 text-danger">❌ No scholarships found</p>
            )}
          </div>
        </div>

        {/* Additional Content */}
        <div className="container mt-5">
          <h2 className="fw-bold text-center" data-aos="fade-up">Why Scholarships Matter?</h2>
          <p className="text-center text-muted" data-aos="fade-up">
            Scholarships provide financial assistance and open opportunities for students to achieve their academic dreams without financial burden. They encourage excellence, diversity, and equal access to education.
          </p>

          <h3 className="fw-bold mt-4" data-aos="fade-up">Eligibility Criteria</h3>
          <ul className="list-group mt-3" data-aos="fade-up">
            <li className="list-group-item">✅ Based on academic performance and merit</li>
            <li className="list-group-item">✅ Some scholarships require financial need proof</li>
            <li className="list-group-item">✅ Open for national and international students</li>
            <li className="list-group-item">✅ Special scholarships available for women, minorities, and STEM students</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center py-4 bg-dark text-white mt-5">
          <p className="mb-0">&copy; 2025 Scholarship Portal | All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Scholarships;
