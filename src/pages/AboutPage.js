import config from "config";
import { useEffect } from "react";

function AboutPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Booking`;
    }, []);

    return (
        <div className="page page-booking">
           <section className="ss-3 base-padding">
                <h1>About Raavi Resort</h1>

                <p>
                    Raavi Resort is a hotel-in-development and an active resort for parties and family functions. Since its inception,
                    Raavi has proudly hosted custom-tailored events that have created lasting positive memories in people's lives and businesses, growing local economy. 
                </p>
                <br/>

                <h4>History behind the name</h4>
                <p>
                    The word "Raavi" in Raavi Resort refers to the Raavi river in Punjab. "Punjab" in English means "Punj" - five, "Ab" - river. Punjab
                    is a land of five rivers. Raavi Resort is located in the Raavi region, which had been serving the community immense growth and happiness
                    by keeping the Punjabi soil radiant and nourished for agriculture - for which Punjab is famous.
                </p>
                <br/>
                <p>

                </p>
           </section>
        </div>
    );
}

export default AboutPage;