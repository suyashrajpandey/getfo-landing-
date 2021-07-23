import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src="./Graphics/only-letters-white.png" alt="GetFo logo" />
        <nav>
          <div>
            <ul>
              <a href="#About">
                <span>About</span>
              </a>
            </ul>
            <ul>
              <a href="#FindExperts">
                <span>Find Experts</span>
              </a>
            </ul>
            <ul>
              <a href="#BecomeAnExpert">
                <span>Become an expert</span>
              </a>
            </ul>
            <ul>
              <a href="#SignIn">
                <span></span>Sign In
              </a>
            </ul>
            <ul>
              <button>
                <span>Sign Up</span>
              </button>
            </ul>
          </div>
        </nav>
      </header>

      <section>
        <div className="split">
          <div>
            <p>
              <button>
                <span>Explore Experts</span>
              </button>
            </p>
          </div>
          <div>
            <p>
              <img
                src="./Graphics/travel-_-man-guy-person-laptop-computer-luggage-baggage-airport@2x.png"
                alt="man at airport working on laptop graphic"
              />
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1>As Easy As</h1>
        <div className="split">
          <div>
            <div>
              <img
                src="./Graphics/Getfo837r56.png"
                alt="man working on laptop at a table"
              />
              <h3>Search for an Expert</h3>
              <p>
                Select from the list of expert based on their experiences and
                expertise for a one-on-one consultation over the phone.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="./Graphics/Getfo-73739.png"
                alt="virtual meeting graphics"
              />
              <h3>Schedule/Request a Meeting</h3>
              <p>
                Schedule a meeting on a pre-selected time slot picked by an
                expert or request a new time to avoid any conflicts
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="./Graphics/Getfo73737r5.png"
                alt="two women giving a presentation"
              />
              <h3>Get your Answers</h3>
              <p>
                Join the call to connect with an expert and get answers to all
                your questions on the topic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1>Connecting Experts in</h1>
        <section className="slide-section">
          <div className="slider">
            <div className="slide-track">
              <div className="slide"></div>
              <div className="slide">
                <a className='slide-anchor' href="#eCommerce">
                  <img className="slideImage" src="./Graphics/Online-store-1.png" alt="eCommerce" />
                  <h4>eCommerce</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="#realEstate">
                  <img className="slideImage" src="./Graphics/Realstates.png" alt="" />
                  <h4>Real Estate</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="#Marketing">
                  <img className="slideImage" src="./Graphics/Marketing-7e7.png" alt="" />
                  <h4>Marketing</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="">
                  <img className="slideImage" src="./Graphics/Investing-.png" alt="" />
                  <h4>Investing</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="">
                  <img className="slideImage" src="./Graphics/Recruitment-.png" alt="" />
                  <h4>Recruitment</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="">
                  <img className="slideImage" src="./Graphics/Blogging-vlogging-.png" alt="" />
                  <h4>Vlogging/Blogging</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="">
                  <img className="slideImage" src="./Graphics/Influencers.png" alt="" />
                  <h4>Influencers</h4>
                </a>
              </div>
              <div className="slide">
                <a className='slide-anchor' href="">
                  <img className="slideImage" src="./Graphics/Getfo-uueud.png" alt="" />
                  <h4>Market Flipping</h4>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1>Become an Expert Today</h1>
      </section>

      <section>
        <h1>Featured Experts</h1>
      </section>
    </div>
  );
}

export default App;
