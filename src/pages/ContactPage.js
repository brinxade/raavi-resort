import { BlockList } from "components/BlockList";
import { LoaderButton } from "components/LoaderButton";
import config from "appConfig";
import contactItems from "data/contactItems";
import { useEffect, useState } from "react";

function ContactPage() {


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const clearForm = () => {
        setUserName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    const handleForm = async(e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = {
            name: userName,
            email: email,
            phone: phone, 
            message: message
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
            clearForm();
            console.log(json);
        }
        catch(e) {
            console.log("Error when submitting form");
        }
    };

    useEffect(() => {
        document.title = `${config.titlePrefix} Contact`;
    }, []);

    return (
        <div className="page page-contact">
            <section className="ss-3 base-padding">
                <div className="section-right">
                    <div className="flex title-wrapper">
                        <div>
                            <h3 className="subtitle text-faded">Got Any Queries?</h3>
                            <h1 className="title">Contact Us</h1>
                        </div>
                        <i className="fa-regular fa-comment-question"></i>
                    </div>
                    
                    <p className="text-faded mb-5">
                        While we try our best to get back within a few hours, <br/>it might take upto 3 business days to get back to you in some cases.
                    </p>

                    <div className="form-wrapper">
                        <form id="booking-form" className="contact-form mt-3" onSubmit={handleForm}>
                            <div className="inner">
                                <div className="fieldgroup grid-span2">
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

                                <div className="fieldgroup grid-span2">
                                    <div className="fieldgroup">
                                        <label>
                                            <span>Message</span>
                                            <textarea  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </label>
                                    </div>
                                </div>

                                <div className="grid-span2">
                                    <LoaderButton text="Send Message" loading={isLoading} status={formStatus}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="section-left">
                    <BlockList items={contactItems}/>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;