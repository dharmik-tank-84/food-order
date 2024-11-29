import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem alias ducimus placeat porro in at, ullam nisi hic iste
              praesentium repellendus eos repudiandae, fugiat magnam, dolores
              tempora autem necessitatibus accusamus.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 90816 96490</li>
              <li>dharmiktank84@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
