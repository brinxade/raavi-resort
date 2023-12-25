import config from "config";
import { useEffect } from "react";

function PrivacyPolicyPage() {

    useEffect(() => {
        document.title = `${config.titlePrefix} Privacy Policy`;
    }, []);

    return (
        <div className="page page-booking site-policy">
           <section className="ss-3 base-padding">
                <h1 className="custom-marker mb-5">
                    <span>Privacy Policy</span>
                </h1>

                <section className="mb-5">
                    <h5>1. Introduction</h5>
                    <p>This Privacy Policy explains how Raavi ("we," "us," or "our") collects, uses, and protects your personal information. By using our website, you consent to the practices described in this policy.</p>
                </section>

                <section className="mb-5">
                    <h5>2. Information We Collect</h5>
                    <p>We may collect the following types of information:</p>

                    <div className="left-indent">
                        <h6>2.1 Personal Information</h6>
                        <p>This may include your name, email address, and other information you provide voluntarily when contacting us or using our services.</p>

                        <h6>2.2 Log Data</h6>
                        <p>We automatically collect information that your browser sends whenever you visit our website. This may include your IP address, browser type, the pages you visit, and other statistics.</p>
                    </div>
                    
                </section>

                <section className="mb-5">
                    <h5>3. How We Use Your Information</h5>
                    <p>We use your information for the following purposes:</p>

                    <div className="left-indent">
                        <h6>3.1 Providing and Improving Our Services</h6>
                        <p>We use your information to deliver and improve our services, respond to your inquiries, and enhance your user experience.</p>

                        <h6>3.2 Communication</h6>
                        <p>We may use your contact information to communicate with you about our services, updates, and promotions.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h5>4. Information Sharing</h5>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.</p>
                </section>

                <section className="mb-5">
                    <h5>5. Security</h5>
                    <p>We implement security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </section>

                <section className="mb-5">
                    <h5>6. Changes to this Privacy Policy</h5>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
                </section>

                <section className="mb-5">
                    <h5>7. Contact Us</h5>
                    <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto: info@raaviresort.in"><strong>info@raaviresort.in</strong></a>.</p>
                </section>

                <p className="mb-5">Thank you for choosing Raavi! By using our website, you agree to the terms of this Privacy Policy.</p>

                <p>
                    <strong>Last Updated: </strong>1st January, 2022
                </p>
           </section>
        </div>
    );
}

export default PrivacyPolicyPage;