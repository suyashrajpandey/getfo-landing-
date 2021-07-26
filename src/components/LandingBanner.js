import "../App.css";

const LandingBanner = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="split">
          <div className="split-left">
            <div className="text-center">
              <div className="banner-header">
                CONNECTING ONLINE ENTREPRENEURS
              </div>
              <p className="banner-text">
                Get your questions answered by an expert
              </p>
              <a href="#ExploreExperts" className="btn btn-primary">
                Explore Experts
              </a>
            </div>
          </div>
          <div>
            <img
              src="./Graphics/travel-_-man-guy-person-laptop-computer-luggage-baggage-airport@2x.png"
              alt="man at airport working on laptop graphic"
            />
          </div>
        </div>
      </div>
      <div className="bg-img"></div>
    </section>
  );
};

export default LandingBanner;
