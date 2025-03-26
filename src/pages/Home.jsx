import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="First slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="display-3 fw-bold">Welcome to Citizen Services</h1>
            <p>Your gateway to government schemes, scholarships, and hackathons.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
            alt="Second slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="display-3 fw-bold">Explore Government Schemes</h1>
            <p>Discover various welfare programs and benefits.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4144100/pexels-photo-4144100.jpeg"
            alt="Third slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="display-3 fw-bold">Find Scholarships</h1>
            <p>Financial aid opportunities to support your education.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
            alt="Fourth slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="display-3 fw-bold">Participate in Hackathons</h1>
            <p>Compete in coding challenges and innovation competitions.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
            alt="Fifth slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="display-3 fw-bold">Stay Updated</h1>
            <p>Never miss an important opportunity with real-time updates.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Services Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4" data-aos="fade-right">Our Services</h2>
        <div className="row">
          <div className="col-md-4" data-aos="flip-left">
            <div className="card text-center p-3 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                className="card-img-top"
                alt="Government Schemes"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Government Schemes</h5>
                <p className="card-text">Explore various welfare programs launched by the government.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-left">
            <div className="card text-center p-3 shadow-lg">
              <img
                src="https://images.pexels.com/photos/4144100/pexels-photo-4144100.jpeg"
                className="card-img-top"
                alt="Scholarships"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Scholarships</h5>
                <p className="card-text">Find financial aid opportunities to support your education.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-left">
            <div className="card text-center p-3 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
                className="card-img-top"
                alt="Hackathons"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Hackathons</h5>
                <p className="card-text">Compete in coding challenges and innovation competitions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Citizen Services (With Image) */}
      <div className="container mt-5 p-4 bg-light rounded shadow-lg d-flex align-items-center" data-aos="fade-up">
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
              alt="Why Choose Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-7">
            <h2 className="text-center mb-3">Why Choose Citizen Services?</h2>
            <p>
              Citizen Services is your one-stop destination for verified information on government schemes, scholarships, and hackathons.
              We simplify complex data and bring all essential opportunities to one platform.
            </p>
            <p>
              Our platform ensures that you stay updated with the latest scholarships, government initiatives, and coding competitions,
              so you never miss an important opportunity.
            </p>
            <p>
              With a user-friendly interface and regularly updated data, we empower individuals to take informed decisions for a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;