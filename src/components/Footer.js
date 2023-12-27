import imgEnvelope from "images/envelope.svg";
import logo from "images/logo.png";
import { Link } from "react-router-dom";
import imgSend from "images/icon-send.svg";

function Footer() {
    return (
        <footer id="site-footer">
            <div className="upper">
                <div id="subscribe-newsletter" className="flex-apart fg-1">
                    <div className="flex-column">
                        <h3>Miss Nothing.</h3>
                        <p className="mb-3">
                            Stay tuned with Raavi by subscribing to our email list - bringing you news about seasonal discounts, venue updates and more!
                        </p>
                        <div className="input-wrapper">
                            <input type="email" placeholder="Your Email"/>
                            <button><i className="fa-solid fa-paper-plane-top"></i></button>
                        </div>
                    </div>
                    <div className="thumbnail-wrapper">
                        <img src={imgEnvelope} alt=""/>
                    </div>
                </div>
            </div>

            <div className="lower">
                <div className="inner ss-3">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Raavi Resort Logo"/>
                    </Link>

                    <nav>
                        <Link to="/policy/cookies">Cookie Policy</Link>
                        <Link to="/policy/privacy">Privacy Policy</Link>
                    </nav>

                    <nav className="social-tray ml-auto">
                        <a href="https://www.instagram.com/raavi_raffles_resort/" className="icon-wrapper"><i className="fa-brands fa-instagram"></i></a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;