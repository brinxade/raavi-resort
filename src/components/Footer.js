import imgEnvelope from "images/envelope.svg";
import logo from "images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer id="site-footer">
            <div className="upper">
                <div id="subscribe-newsletter" className="flex-apart soft-shadow fg-1">
                    <div className="flex-column">
                        <h3 className="nm">Miss Nothing.</h3>
                        <p className="mb-3 text-faded">
                            Stay tuned for promotional offers, tournament announcements and more!
                        </p>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <div className="thumbnail-wrapper">
                        <img src={imgEnvelope}/>
                    </div>
                </div>
            </div>

            <div className="lower">
                <div className="inner ss-3">
                    <Link to="/" className="logo">
                        <img src={logo}/>
                    </Link>

                    <nav>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Privacy Policy</a>
                    </nav>

                    <nav className="social-tray ml-auto">
                        <a href="#" className="icon-wrapper"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" className="icon-wrapper"><i class="fa-brands fa-facebook"></i></a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;