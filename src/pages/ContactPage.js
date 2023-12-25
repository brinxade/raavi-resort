import { BlockList } from "components/BlockList";
import config from "config";
import contactItems from "data/contactItems";
import { useEffect } from "react";

function ContactPage() {

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
                        <i class="fa-regular fa-comment-question"></i>
                    </div>
                    
                    <p className="text-faded mb-5">
                        While we try our best to get back within a few hours, <br/>it might take upto 3 business days to get back to you in some cases.
                    </p>

                    <div className="form-wrapper">
                        <form id="booking-form" className="contact-form mt-3">
                            <div className="inner">
                                <div className="fieldgroup grid-span2">
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

                                <div className="fieldgroup grid-span2">
                                    <div className="fieldgroup">
                                        <label>
                                            <span>Message</span>
                                            <textarea></textarea>
                                        </label>
                                    </div>
                                </div>

                                <button className="button button-secondary button-submit">Send Message</button>
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