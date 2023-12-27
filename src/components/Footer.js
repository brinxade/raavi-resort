import logo from "images/logo.png";
import { Link } from "react-router-dom";
import { NewsletterSub } from "./NewsletterSub";

function Footer() {
    return (
        <footer id="site-footer">
            <div className="upper">
                <NewsletterSub/>
            </div>

            <div className="lower">
                <div className="inner ss-3">
                    <div className="business-info">
                        <Link to="/" className="logo mb-5">
                            <img src={logo} alt="Raavi Resort Logo"/>
                        </Link>
                        <address>
                            <p className="mb-3">Dinanagar Bypass, Haripur, Punjab 143531, India</p>
                            <p> +91 89274 70006</p>
                            <p><a href="mailto: info@raaviresort.in">info@raaviresort.in</a></p>
                        </address>
                    </div>
                </div>

                <div className="site-identity flex-apart ss-3 base-padding">
                    <nav>
                        <Link to="/policy/cookies">Cookie Policy</Link>
                        <Link to="/policy/privacy">Privacy Policy</Link>
                    </nav>

                    <nav className="social-tray ml-auto">
                        <Link to="https://www.instagram.com/raavi_raffles_resort/" className="icon-wrapper"><i className="fa-brands fa-instagram"></i></Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;