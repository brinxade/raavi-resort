import { Link, NavLink } from "react-router-dom";
import imgHeaderExt from "images/waves-themed-animated.svg";
import logo from "images/logo.png";

function Header(props) {
    return (
        <header id="site-header" className={`${props.hasHeroContainer && "header-transparent"} ${props.hasWaterEffect && "water-effect"}`}>
            <div className="inner ss-3">
                <div className="nav-left">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                <Link to="/" className="logo">
                    <img src={logo}/>
                </Link>

                <div className="nav-right">
                    <nav>
                        <Link to="/booking" className="button button-primary">Book Now</Link>
                    </nav>
                </div>
            </div>

            {props.hasWaterEffect && <div className="header-ext">
                <img src={imgHeaderExt}/>
            </div>}
        </header>
    );
}

export default Header;