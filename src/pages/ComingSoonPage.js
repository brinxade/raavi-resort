import logo from "images/logo-accent.png";

function ComingSoonPage() {
    return (
        <div className="page page-coming-soon base-padding">
            <img src={logo}/>
            <div>
                <h1>Stay Tuned</h1>
                <p>
                    Sit tight while we bring online experiences to you for easily managing resort bookings, <br/>
                    whenever and from wherever you want!
                </p>
            </div>
        </div>
    )
}

export default ComingSoonPage;