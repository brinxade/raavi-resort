import config from "config";
import { useEffect } from "react";

function CookiePolicyPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Cookie Policy`;
    }, []);

    return (
        <div className="page page-booking site-policy">
           <section className="ss-3 base-padding">
                <h1 className="custom-marker mb-5">
                    <span>Cookie Policy</span>
                </h1>

                <section className="mb-5">
                    <h5>1. Introduction</h5>
                    <p>Welcome to Raavi! This Cookie Policy explains how Raavi ("we," "us," or "our") uses cookies on our website to enhance your experience. By using our website, you consent to the use of cookies as described in this policy.</p>
                </section>

                <section className="mb-5">
                    <h5>2. What are Cookies?</h5>
                    <p>Cookies are small text files that are placed on your device when you visit a website. They are commonly used to make websites work more efficiently and to provide information to website owners.</p>
                </section>

                <section className="mb-5">
                    <h5>3. How We Use Cookies</h5>
                    <p>We use cookies for the following purposes:</p>

                    <div className="left-indent">
                        <h6>3.1 Tracking User Across Webpages</h6>
                        <p>We use cookies to track your activities on our website, including the pages you visit and the links you click. This helps us understand how you interact with our site and improve your user experience.</p>

                        <h6>3.2 Providing Data to Third Parties for Advertising Relevance</h6>
                        <p>We may share cookie data with third-party partners for the purpose of delivering personalized and relevant advertising. This allows us and our partners to present you with advertisements tailored to your interests based on your online activities.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h5>4. Types of Cookies We Use</h5>

                    <div className="left-indent">
                        <h6>4.1 Essential Cookies</h6>
                        <p>These cookies are necessary for the proper functioning of our website. They enable you to navigate our site and use its features.</p>

                        <h6>4.2 Analytical/Performance Cookies</h6>
                        <p>These cookies help us analyze how visitors use our website, allowing us to improve its functionality and user experience.</p>

                        <h6>4.3 Advertising/Targeting Cookies</h6>
                        <p>These cookies are used to deliver advertisements that are more relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h5>5. Your Cookie Choices</h5>
                    <p>By using our website, you consent to the placement of cookies on your device. However, you can manage your cookie preferences by adjusting your browser settings. Please note that blocking certain types of cookies may impact your experience on our site.</p>
                </section>

                <section className="mb-5">
                    <h5>6. Changes to this Cookie Policy</h5>
                    <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.</p>
                </section>

                <section className="mb-5">
                    <h5>7. Contact Us</h5>
                    <p>If you have any questions or concerns about our Cookie Policy, please contact us at <a href="mailto: info@raaviresort.in"><strong>info@raaviresort.in</strong></a>.</p>
                </section>
                
                <p>
                    <strong>Last Updated: </strong>17th November, 2022
                </p>
           </section>
        </div>
    );
}

export default CookiePolicyPage;