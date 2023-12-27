import imgEnvelope from "images/envelope.svg";
import imgSend from "images/icon-send.svg";
import { useState } from "react";

function NewsletterSub() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [timer, setTimer] = useState(0);
    const [subscribed, setSubscribed] = useState(false);

    const handleSub = () => {
        console.log("Handle sub");
        if(email) {
            setIsLoading(true);
            if(timer == 0) {
                setTimeout(() => {
                    setIsLoading(false);
                    setEmail("");
                    setSubscribed(true);
                }, 1000);
            }
        }
    };

    return (
        <div id="subscribe-newsletter" className="flex-apart fg-1">
            <div className="flex-column">
                <h3>Miss Nothing.</h3>
                <p className="mb-3">
                    Stay tuned with Raavi by subscribing to our email list - bringing you news about seasonal discounts, venue updates and more!
                </p>

                {subscribed && <p className="button-status flex"><i class="fa-solid fa-check"></i> Subscribed</p>}

                {!subscribed && <div className="input-wrapper">
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={handleSub} className={`${isLoading && "button-loading"}`}>
                        {!isLoading && <i className="fa-solid fa-paper-plane-top"></i>}
                    </button>
                </div>}
            </div>
            <div className="thumbnail-wrapper">
                <img src={imgEnvelope} alt=""/>
            </div>
        </div>
    );

}

export { NewsletterSub };