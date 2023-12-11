import config from "config";
import imgHero from "images/party.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import imgPlaceholder from "images/placeholder-image.png";
import imgStars from "images/stars.png";

function HomePage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Home`;
    }, []);

    return (
        <div className="page page-home">
            <div className="hero-section">

                <div className="image-content ss-3">
                    <div className="content">
                        <h3 className="subtitle">Moments. Bliss. Happiness.</h3>
                        <h1 className="title">Raavi Resort</h1>

                        <p>
                            Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                        </p>

                        <br/>

                        <Link to="/" className="button button-primary mt-2">Celebrate happiness at Raavi</Link>
                    </div>
                </div>

                <div className="section-separator">
                </div>
            </div>

            <div id="events-showcase" className="section ss-3 base-padding">
                <h2 className="text-xl mb-5">A Place For You, and Your People</h2>

                <div className="image-content-container">
                    <div className="image-content ss-3">
                        <div className="image-wrapper">
                            <img src={imgPlaceholder}/>
                        </div>
                        <div className="content">
                            <h3 className="title">Family Events</h3>

                            <p>
                                Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                            </p>

                            <br/>

                            <Link to="/" className="button button-primary mt-2">Celebrate happiness at Raavi</Link>
                        </div>
                    </div>

                    <div className="image-content ss-3">
                        <div className="image-wrapper">
                            <img src={imgPlaceholder}/>
                        </div>
                        <div className="content">
                            <h3 className="title">Business Events</h3>

                            <p>
                                Welcome to Raavi Resort, where every moment blossoms into bliss and happiness. Our Indian-style venue is ideal for parties, weddings, and traditional family events. Experience the joy of seamless celebrations in our scenic indoor and outdoor spaces. Let us turn your events into unforgettable memories. 
                            </p>

                            <br/>

                            <Link to="/" className="button button-primary mt-2">Celebrate happiness at Raavi</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials-showcase" className="section ss-3 base-padding">
                <div className="testimonial-container">
                    <div className="title-wrapper">
                        <h3 className="text-m">
                            Here&apos;s what people say about us!
                        </h3>
                        <p>
                            Success Begins & Ends with Satisfied Clients
                        </p>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-header">
                            <div className="author-pfp"></div>
                            <div className="author">
                                <div className="author-rating"><img src={imgStars}/></div>
                                <div className="author-name">John Doe</div>
                                <div className="author-job">Team Agent</div>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <p>
                            Epsilon has always bent over backwards to meet the needs of my business requirements, no matter how different or complex they may be. They are definitely a preferred vendor for my needs.
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-header">
                            <div className="author-pfp"></div>
                            <div className="author">
                                <div className="author-rating"><img src={imgStars}/></div>
                                <div className="author-name">John Doe</div>
                                <div className="author-job">Team Agent</div>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <p>
                            Epsilon has always bent over backwards to meet the needs of my business requirements, no matter how different or complex they may be. They are definitely a preferred vendor for my needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;