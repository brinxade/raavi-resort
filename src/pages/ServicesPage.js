import config from "config";
import { useEffect } from "react";
import serviceData from "data/services.js";

function ServicesPage() {

    const services = serviceData;

    useEffect(() => {
        document.title = `${config.titlePrefix} Services`;
    }, []);

    return (
        <div className="page page-booking">
            <section id="services" className="ss-3 base-padding">
                <h1>Services</h1>
                <p>
                    Raavi Resort is a place for all moments. Your Special Day will be both Luxurious and Charming with an event hosted at Festyn Royale Resorts. Our dedicated staff will guide you through the planning of your ceremony and reception for this memorable event. It is our belief that each event should be a wonderful expression of your personality and we will work with you to create a day that is unique and truly special.
                </p>

                <div className="services-showcase">
                    {services.map((svc, idx) => <div key={`k_${idx}`} className="service-item">
                        <div className="image-content">
                            <div className="image">
                                <img src={svc.img} alt="Service depiction"/>
                            </div>
                            <div className="content">
                                <h4>{svc.service}</h4>
                                <p>
                                    {svc.desc}
                                </p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;