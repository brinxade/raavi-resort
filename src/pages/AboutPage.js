import config from "appConfig";
import { useEffect } from "react";
import iconTrust from "images/icon-trust.png";
import iconCustomer from "images/icon-customer.png";
import iconTree from "images/icon-tree.png";

function AboutPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Booking`;
    }, []);

    return (
        <div className="page page-about">
           <section className="ss-3 base-padding">
                <div className="themed-container text-center mb-5">
                    <div className="inner">
                        <h3 className="subtitle">Your place to celebrate life and create memories</h3>
                        <h1>Raavi Resort</h1>

                        <p>
                            Raavi Resort is a hotel-in-development and an active resort for parties and family functions. Since its inception,
                            Raavi has proudly hosted custom-tailored events that have created lasting positive memories in people's lives and businesses, growing local economy. 
                        </p>
                    </div>
                </div>

                <div className="section text-center">
                    <h2 className="custom-marker mb-4">
                        <span>Random Fact</span>
                    </h2>
                    <h4 className="text-faded">History behind the name</h4>
                    <p className="ss-2">
                        The word "Raavi" in Raavi Resort refers to the Raavi river in Punjab. "Punjab" in English means "Punj" - five, "Ab" - river. Punjab
                        is a land of five rivers, which since long ago have helped Punjab flourish through. Raavi Resort is located in the region of Raavi river, which had been serving the community immense growth and happiness
                        by keeping the Punjabi soil radiant and nourished for agriculture - for which Punjab is famous.
                    </p>
                </div>
                
                <div className="text-center section">
                    <h2 className="custom-marker mb-4">
                        <span>Our Values</span>
                    </h2>
                    <div className="icon-box-container">
                        <div className="icon-box">
                            <div className="icon"><img src={iconCustomer} alt=""/></div>
                            <strong>You Come First.</strong>
                            <p className="content">
                                Elevating your experience is our priority. From personalized service to swift support, we go the extra mile because your satisfaction is our success.
                            </p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><img src={iconTrust} alt=""/></div>
                            <strong>Trust & Transparency.</strong>
                            <p className="content">
                                Openness is our policy. From sourcing to pricing, we believe in clarity. With us, every step of the journey is revealed, allowing you to make informed choices.
                            </p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><img src={iconTree} alt=""/></div>
                            <strong>We Care About Earth.</strong>
                            <p className="content">
                                Beyond business, we cultivate change. For every transaction, we plant trees, sowing the seeds of a sustainable tomorrow. Join us in growing a greener world.
                            </p>
                        </div>
                    </div>
                </div>

           </section>
        </div>
    );
}

export default AboutPage;