import { Link, NavLink } from "react-router-dom";
import imgHeaderExt from "images/waves-themed-animated.svg";
import logo from "images/logo.png";
import { useState } from "react";

function Header(props) {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const activeCheck = ({ isActive, isPending }) => 
    isPending ? "pending" : isActive ? "active" : "";

    return (
        <header id="site-header" className={`${props.hasHeroContainer && "header-transparent"} ${props.hasWaterEffect && "water-effect"} ${!menuIsOpen && "menu-collapsed"}`}>
            <div className="inner ss-3">
                <button id="header-toggle" className={`${menuIsOpen && "active"}`} onClick={() => setMenuIsOpen(!menuIsOpen)}><i className="fa-solid fa-bars"></i></button>
                <Link to="/" className="logo">
                    <img src={logo} alt="Raavi Resort logo"/>
                </Link>

                <div className="nav-left">
                    <nav>
                        <NavLink className={activeCheck} to="/">Home</NavLink>
                        <NavLink className={activeCheck} to="/services">Services</NavLink>
                        <NavLink className={activeCheck} to="/about">About</NavLink>
                        <NavLink className={activeCheck} to="/contact">Contact</NavLink>
                    </nav>
                </div>
                
                <div className="nav-right">
                    <nav>
                        <Link to="/booking" className="button button-primary">Book Now</Link>
                    </nav>
                </div>
            </div>

            {props.hasWaterEffect && <div className="header-ext">
                <img src={imgHeaderExt} alt="Raavi Resort logo"/>
            </div>}
        </header>
    );
}

export default Header;