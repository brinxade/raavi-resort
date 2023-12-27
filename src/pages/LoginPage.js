import HoverStateIcon from "components/HoverStateIcon";
import config from "appConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LoginPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Login`;
    }, []);

    return (
        <div className="page auth-wrapper">
            <div className="side-content">

            </div>

            <main className="main-content soft-shadow">
                <Link to="/" className="close"><HoverStateIcon iconClass="fa-light fa-circle-xmark" hoverClass="fa-solid fa-circle-xmark"/></Link>

                <form className="auth-form">
                    <h2 className="form-title">Login</h2>

                    <div className="fieldgroup">
                        <label>
                            <span>Email</span>
                            <input type="email"/>
                        </label>
                    </div>

                    <div className="fieldgroup">
                        <label>
                            <span>Password</span>
                            <input type="password"/>
                        </label>
                    </div>

                    <button className="button form-submit button-primary">Log In</button>
                </form>
            </main>
        </div>
    );
}

export default LoginPage;