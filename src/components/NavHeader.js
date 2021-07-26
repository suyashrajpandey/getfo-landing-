import "../App.css";

const NavHeader = () => {
  return (
    <header>
      <img
        src="./Graphics/only-letters-white.png"
        alt="GetFo logo"
        className="logo"
      />
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <div>
          <ul>
            <li>
              <a href="#About">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="https://beta.getfo.io/experts">
                <span>Find Experts</span>
              </a>
            </li>
            <li>
              <a href="https://beta.getfo.io/become-an-expert">
                <span>Become an expert</span>
              </a>
            </li>
            <li>
              <a href="https://beta.getfo.io/login">
                <span>Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="https://beta.getfo.io/signup"
                className="btn btn-primary"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default NavHeader;
