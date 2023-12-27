import config from "appConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import imgStars from "images/stars.png";
import imgEventFamily from "images/resort/event-family.jpg";
import imgEventBusiness from "images/resort/event-business.jpg";
import imgReview from "images/review.png";

function HomePage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Home`;
    }, []);

    return (
        <div className="page page-home">
            <div className="hero-section">

                <div className="image-content ss-3 base-padding">
                    <div className="content">
                        <h3 className="subtitle">Moments. Bliss. Happiness.</h3>
                        <h1 className="title">Raavi Resort</h1>

                        <p>
                            Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                        </p>

                        <br/>

                        <Link to="/booking" className="button button-primary mt-2">Celebrate Happiness at Raavi</Link>
                    </div>
                </div>

                <div className="section-separator">
                </div>
            </div>

            <div id="events-showcase" className="section ss-3 base-padding">
                <h2 className="text-xl mb-5">A Place For You, and Your People</h2>

                <div className="image-content-container">
                    <div className="image-content">
                        <div className="image-wrapper">
                            <img src={imgEventFamily} alt="A family event"/>
                        </div>
                        <div className="content">
                            <h3 className="title">Family Events</h3>

                            <p>
                                Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                            </p>
                        </div>
                    </div>

                    <div className="image-content">
                        <div className="image-wrapper">
                            <img src={imgEventBusiness} alt="A business event"/>
                        </div>
                        <div className="content">
                            <h3 className="title">Business Events</h3>

                            <p>
                                Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials-showcase" className="section ss-3 base-padding">
                <div className="testimonial-container">
                    <div className="title-wrapper">
                        <img className="image" src={imgReview} alt="Icon depicting people leaving reviews"/>
                        <h3 className="text-m">
                            Here&apos;s what people say about us!
                        </h3>
                        <p>
                            Success begins & ends with satisfied clients.
                        </p>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-header">
                            <div className="author-pfp"></div>
                            <div className="author">
                                <div className="author-rating"><img src={imgStars} alt="Stars that represent rating for Raavi Resort in a testimonial"/></div>
                                <div className="author-name">Dhruv Janjua</div>
                                <div className="author-job">Concert</div>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <p>
                            Very good place for variety of events in our town. Spacious than other resorts. Pricing is fair and access is easy as it is on National Highway. I visted here for Matser Saleem&apos;s show. It was quite enjoyable.
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-header">
                            <div className="author-pfp"></div>
                            <div className="author">
                                <div className="author-rating"><img src={imgStars} alt="Stars that represent rating for Raavi Resort in a testimonial"/></div>
                                <div className="author-name">Vinod Kumar</div>
                                <div className="author-job">Family Function</div>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <p>
                            Basically still a maturing business, Raavi is heading in the right direction. Used as marriage palace because the lawn is spacious and catering was on point. Easily accessible on Dinanagar bypass.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;