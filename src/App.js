import "./App.css";
import NavHeader from "./components/NavHeader.js";
import LandingBanner from "./components/LandingBanner";
import ExpertIndustry from "./components/ExpertIndustry";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavHeader></NavHeader>
      <LandingBanner></LandingBanner>

      <section className="bg-white">
        <h1 className="text-center">As Easy As</h1>
        <div>
          <div className="split">
            <div>
              <div className="split-item">
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
              <div className="split-item">
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
              <div className="split-item">
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
        </div>
      </section>

      <ExpertIndustry></ExpertIndustry>
      {/* <section>
        <h1 className="text-center">Become an Expert Today</h1>
      </section>

      <section>
        <h1 className="text-center">Featured Experts</h1>
      </section> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
