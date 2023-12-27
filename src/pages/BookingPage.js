import { LoaderButton } from "components/LoaderButton";
import config from "appConfig";
import imgHero from "images/balloon-girl.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookingPage() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [event, setEvent] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const clearForm = () => {
        setUserName("");
        setEmail("");
        setPhone("");
        setDate("");
        setEvent("");
        setMessage("");
    };

    const handleForm = async(e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = {
            name: userName,
            email: email,
            phone: phone, 
            message: message,
            event: event,
            date: date
        };

        try {
            const req = await fetch(config.apiUrl + "contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type':'application/json'
                }
            });
    
            const json = await req.json();
            setIsLoading(false);
            setFormStatus("Message sent.");
            console.log(json);
            clearForm();
        }
        catch(e) {
            console.log("Error when submitting form");
        }
    };

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
                        <form id="booking-form" className="mt-3" onSubmit={handleForm}>
                            <div className="inner">
                                <div className="fieldgroup">
                                    <label>
                                        <span>Your Name</span>
                                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>Email</span>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>Phone</span>
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="fieldgroup">
                                    <label>
                                        <span>What date do you want to book for?</span>
                                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                    </label>
                                </div>

                                <div className="fieldgroup grid-span2">
                                    <label>
                                        <span>What event are you booking for?</span>
                                        <select value={event} onChange={(e) => setEvent(e.target.value)}>
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
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div className="grid-span2">
                                    <LoaderButton text="Request Booking" loading={isLoading} status={formStatus}/>
                                </div>
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