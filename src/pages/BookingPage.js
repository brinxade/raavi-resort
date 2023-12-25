import config from "config";
import imgHero from "images/balloon-girl.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BookingPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Booking`;
    }, []);

    return (
        <div className="page page-booking">
            <section className="ss-3 base-padding">
                <h3 className="subtitle text-faded">Book Raavi Resort</h3>
                <h1 className="title">Booking Details</h1>
            
                <p className="text-faded">
                    Use this form to book the resort. We will get back to you in two business days via email or call.
                </p>

                <p className="text-faded">
                    Please use <Link to="/contact" className="link">the contact form</Link> for any other general inquiries.
                </p>

                <hr className="mt-5"/>

                <div className="image-content">

                    <div className="content">
                        <form id="booking-form" className="mt-3">
                            <div className="inner">
                                <div className="fieldgroup">
                                    <label>
                                        <span>Your Name</span>
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>Email</span>
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>Phone</span>
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>What date do you want to book for?</span>
                                        <input type="date"/>
                                    </label>
                                </div>

                                <div className="fieldgroup grid-span2">
                                    <label>
                                        <span>What event are you booking for?</span>
                                        <select>
                                            <option>Select Event</option>
                                            <option>Party</option>
                                            <option>Marriage</option>
                                            <option>Other Function</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="fieldgroup grid-span2">
                                    <div className="fieldgroup">
                                        <label>
                                            <span>Additional Comments</span>
                                            <textarea></textarea>
                                        </label>
                                    </div>
                                </div>

                                <button className="button button-secondary button-submit">Request Booking</button>
                            </div>
                        </form>
                    </div>

                    <div className="image-wrapper">
                        <img src={imgHero} alt="A lady with baloons, in a party"/>
                    </div>
                </div>
            
            </section>
        </div>
    );
}

export default BookingPage;