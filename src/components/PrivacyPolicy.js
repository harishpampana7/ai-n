import React from "react";
import "./PrivacyPolicy.css"; 
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar/>
    <div className="privacy-policy-container">
      <section className="privacy-section">
        <h2>Privacy Policy</h2>
        <p>
          At KorpReady Enterprises Pvt Ltd, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our services, including live
          courses, 1:1 doubt clearing sessions, mock interviews, downloadable
          resources, portfolio building, blogs, and module-level assessments.
        </p>

        <h3>Information We Collect</h3>
        <h4>Personal Information</h4>
        <p>
          We collect personal information you provide when registering for our
          services. This may include your name, email address, phone number, and
          payment information.
        </p>

        <h4>Usage Data</h4>
        <p>
          We may collect information on how you access and use our services,
          such as your IP address, browser type, pages visited, and the time and
          date of your visit.
        </p>

        <h4>Cookies</h4>
        <p>
          We use cookies and similar tracking technologies to monitor activity
          and store certain information. You can configure your browser to
          refuse cookies or notify you when cookies are sent.
        </p>

        <h3>How We Use Your Information</h3>
        <p>We may use the information collected to:</p>
        <ul>
          <li>Provide, maintain, and improve our services.</li>
          <li>Process transactions and send you related information.</li>
          <li>Communicate with you about your account, updates, and promotional offers.</li>
          <li>Respond to your inquiries and requests.</li>
          <li>Monitor and analyze usage trends to enhance user experience.</li>
        </ul>

        <h3>Disclosure of Your Information</h3>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in operating our services.</li>
          <li>Legal authorities, as required by law or to protect our rights.</li>
        </ul>

        <h3>Data Security</h3>
        <p>
          We implement reasonable measures to protect your personal information
          from unauthorized access, use, or disclosure. However, no internet
          transmission or electronic storage method is completely secure.
        </p>

        <h3>Your Rights</h3>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul>
          <li>The right to access and receive a copy of your data.</li>
          <li>The right to correct inaccurate personal data.</li>
          <li>The right to request deletion of your data.</li>
        </ul>

        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of changes by posting the new version on our website.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have questions about this Privacy Policy, please contact us at
          [Your Contact Information].
        </p>
      </section>

      <section className="terms-section">
        <h2>Terms of Use</h2>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our services, you confirm that you are at least 18 years old
          or have parental/guardian consent.
        </p>

        <h3>2. Services Provided</h3>
        <p>Our services include, but are not limited to:</p>
        <ul>
          <li>Live courses</li>
          <li>1:1 doubt clearing sessions</li>
          <li>Mock interviews</li>
          <li>Downloadable resources</li>
          <li>Portfolio building</li>
          <li>Blogs and articles</li>
          <li>Module-level assessments</li>
        </ul>

        <h3>3. User Responsibilities</h3>
        <p>
          You agree to use our services only for lawful purposes. You must not:
        </p>
        <ul>
          <li>Transmit harmful or malicious code.</li>
          <li>Attempt unauthorized access to our systems or networks.</li>
          <li>Harass, threaten, or harm other users.</li>
        </ul>

        <h3>4. Intellectual Property</h3>
        <p>
          All content and materials provided through our services, including
          text, graphics, and software, are owned by KorpReady Enterprises Pvt
          Ltd or our licensors. You may not reproduce, distribute, or create
          derivative works without prior written consent.
        </p>

        <h3>5. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your access to our
          services at any time, without prior notice, for any violation of these
          Terms.
        </p>

        <h3>6. Disclaimer of Warranties</h3>
        <p>
          Our services are provided "as-is." We make no warranties or guarantees
          about the accuracy or reliability of our content.
        </p>

        <h3>7. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, KorpReady Enterprises Pvt Ltd
          is not liable for any indirect, incidental, or consequential damages
          arising from your use of our services.
        </p>

        <h3>8. Changes to Terms</h3>
        <p>
          We may modify these Terms of Use at any time. Continued use of our
          services after changes are posted will be deemed acceptance of the
          revised Terms.
        </p>

        <h3>9. Governing Law</h3>
        <p>
          These Terms are governed by the laws of [Your Jurisdiction], without
          regard to conflict of law principles.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have questions about these Terms of Use, please contact us at
          [Your Contact Information].
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
