const Footer = () => {
  return (
    <div className="footer">
      <div className="split">
        <div className="split-left">
          <text className="text-center">
            We'll make sure to only send useful and interesting info, no crappy
            content or marketing fluff. Just the good stuff, <b>promise!</b>
          </text>
        </div>
        <div className="text-center">
          <button
            href="https://beta.getfo.io/signup"
            className="btn btn-primary"
          >
            Sign up to be a Beta User
          </button>
        </div>
      </div>

      <div className="bg-primary ">
        <div className="foot">
          <p>
            <a href="">
              <img src="./Graphics/facebook.png" alt="facbook logo" />
            </a>

            <a href="https://www.instagram.com/getfo.io/">
              <img src="./Graphics/instagram.png" alt="instagram logo" />
            </a>
            <a href="https://www.linkedin.com/company/getfo/about/">
              <img src="./Graphics/linkedin.png" alt="" />
            </a>
          </p>
          <p>Copyright © 2021 GetFo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
