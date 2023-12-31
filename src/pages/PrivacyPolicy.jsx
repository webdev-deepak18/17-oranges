/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";
import { Link } from "react-router-dom";
import tableOfContents from "../utils/privacyPolicyData";
import { nanoid } from "nanoid";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Privacy Policy</h1>
            </Animate>
          </div>
        </div>
      </section>
      <section className="section content-section cookies-content">
        <div className="section-center content-center">
          <div className="info-block">
            <Animate>
              <small>Last updated: April 01, 2021</small>
            </Animate>
            <Animate>
              <p>
                Thank you for choosing to be part of our community at 17 Oranges
                Limited (<strong>"Company", "we", "us", "our"</strong> ). We are
                committed to protecting your personal information and your right
                to privacy. If you have any questions or concerns about this
                privacy notice, or our practices with regards to your personal
                information, please contact us via our{" "}
                <Link
                  to="https://17oranges.com/privacy-policy/"
                  target="_blank"
                  className="link"
                >
                  contact us form.
                </Link>
              </p>
            </Animate>
            <Animate>
              <p>
                When you visit our website{" "}
                <Link
                  to="https://www.17oranges.com/"
                  target="_blank"
                  className="link"
                >
                  {" "}
                  https://www.17oranges.com
                </Link>
                (the <strong> "Website"</strong>), and more generally, use any
                of our services (the <strong> "Services"</strong>, which include
                the Website), we appreciate that you are trusting us with your
                personal information. We take your privacy very seriously. In
                this privacy notice, we seek to explain to you in the clearest
                way possible what information we collect, how we use it and what
                rights you have in relation to it. We hope you take some time to
                read through it carefully, as it is important. If there are any
                terms in this privacy notice that you do not agree with, please
                discontinue use of our Services immediately.
              </p>
            </Animate>
            <Animate>
              <p>
                This privacy notice applies to all information collected through
                our Services (which, as described above, includes our Website ),
                as well as, any related services, sales, marketing or events.
              </p>
            </Animate>
            <Animate>
              <p>
                <strong>
                  Please read this privacy notice carefully as it will help you
                  understand what we do with the information that we collect.
                </strong>
              </p>
            </Animate>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="info-block">
            <Animate>
              <h2>TABLE OF CONTENTS</h2>
            </Animate>
            <ul>
              {tableOfContents.map((item) => {
                const { text, link } = item;
                return (
                  <Animate key={nanoid()}>
                    <a href={`#${link}`} className="link">
                      <li>{text}</li>
                    </a>
                  </Animate>
                );
              })}
            </ul>
          </div>

          {/* SINGLE POINT*/}
          <div className="info-block point" id="point_1">
            <Animate>
              <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
            </Animate>
            <Animate>
              <p>
                <strong> Personal information you disclose to us</strong>
              </p>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  {" "}
                  We collect personal information that you provide to us.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Website or otherwise when you contact us.
              </p>
            </Animate>
            <Animate>
              <p>
                The personal information that we collect depends on the context
                of your interactions with us and the Website , the choices you
                make and the products and features you use. The personal
                information we collect may include the following:
              </p>
            </Animate>
            <Animate>
              <p>
                <strong>Personal Information Provided by You. </strong> We
                collect names; email addresses; phone numbers; and other similar
                information.
              </p>
            </Animate>
            <Animate>
              <p>
                All personal information that you provide to us must be true,
                complete and accurate, and you must notify us of any changes to
                such personal information.
              </p>
            </Animate>
            <Animate>
              <p>Information automatically collected</p>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  Some information — such as your Internet Protocol (IP) address
                  and/or browser and device characteristics — is collected
                  automatically when you visit our Website.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We automatically collect certain information when you visit, use
                or navigate the Website . This information does not reveal your
                specific identity (like your name or contact information) but
                may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Website and
                other technical information. This information is primarily
                needed to maintain the security and operation of our Website ,
                and for our internal analytics and reporting purposes.
              </p>
            </Animate>
            <Animate>
              <p>
                Like many businesses, we also collect information through
                cookies and similar technologies.
              </p>
            </Animate>
            <Animate>
              <p>The information we collect includes:</p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  <em>Log and Usage Data. </em> Log and usage data is
                  service-related, diagnostic, usage and performance information
                  our servers automatically collect when you access or use our
                  Website and which we record in log files. Depending on how you
                  interact with us, this log data may include your IP address,
                  device information, browser type and settings and information
                  about your activity in the Website (such as the date/time
                  stamps associated with your usage, pages and files viewed,
                  searches and other actions you take such as which features you
                  use), device event information (such as system activity, error
                  reports (sometimes called 'crash dumps') and hardware
                  settings).
                </li>
              </Animate>
              <Animate>
                <li>
                  <em>Device Data. </em> We collect device data such as
                  information about your computer, phone, tablet or other device
                  you use to access the Website . Depending on the device used,
                  this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, browser type, hardware model
                  Internet service provider and/or mobile carrier, operating
                  system and system configuration information.
                </li>
              </Animate>
              <Animate>
                <li>
                  <em>Location Data. </em> We collect location data such as
                  information about your device's location, which can be either
                  precise or imprecise. How much information we collect depends
                  on the type and settings of the device you use to access the
                  Website . For example, we may use GPS and other technologies
                  to collect geolocation data that tells us your current
                  location (based on your IP address). You can opt out of
                  allowing us to collect this information either by refusing
                  access to the information or by disabling your Location
                  setting on your device. Note however, if you choose to opt
                  out, you may not be able to use certain aspects of the
                  Services.
                </li>
              </Animate>
            </ul>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_2">
            <Animate>
              <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We process your information for purposes based on legitimate
                  business interests, the fulfillment of our contract with you,
                  compliance with our legal obligations, and/or your consent.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We use personal information collected via our Website for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below.
              </p>
            </Animate>
            <Animate>
              <p>We use the information we collect or receive:</p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  <strong>For other business purposes.</strong> We may use your
                  information for other business purposes, such as data
                  analysis, identifying usage trends, determining the
                  effectiveness of our promotional campaigns and to evaluate and
                  improve our Website , products, marketing and your experience.
                  We may use and store this information in aggregated and
                  anonymized form so that it is not associated with individual
                  end users and does not include personal information. We will
                  not use identifiable personal information without your
                  consent.
                </li>
              </Animate>
            </ul>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_3">
            <Animate>
              <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We only share information with your consent, to comply with
                  laws, to provide you with services, to protect your rights, or
                  to fulfill business obligations.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We may process or share your data that we hold based on the
                following legal basis:
              </p>
            </Animate>

            <ul>
              <Animate>
                <li>
                  <strong> Consent: </strong> We may process your data if you
                  have given us specific consent to use your personal
                  information for a specific purpose.
                </li>
              </Animate>
              <Animate>
                <li>
                  <strong> Legitimate Interests: </strong> We may process your
                  data when it is reasonably necessary to achieve our legitimate
                  business interests.
                </li>
              </Animate>
              <Animate>
                <li>
                  <strong> Performance of a Contract: </strong> Where we have
                  entered into a contract with you, we may process your personal
                  information to fulfill the terms of our contract.
                </li>
              </Animate>
              <Animate>
                <li>
                  <strong> Legal Obligations: </strong> We may disclose your
                  information where we are legally required to do so in order to
                  comply with applicable law, governmental requests, a judicial
                  proceeding, court order, or legal process, such as in response
                  to a court order or a subpoena (including in response to
                  public authorities to meet national security or law
                  enforcement requirements).
                </li>
              </Animate>
              <Animate>
                <li>
                  <strong>Vital Interests: </strong> We may disclose your
                  information where we believe it is necessary to investigate,
                  prevent, or take action regarding potential violations of our
                  policies, suspected fraud, situations involving potential
                  threats to the safety of any person and illegal activities, or
                  as evidence in litigation in which we are involved.
                </li>
              </Animate>
            </ul>
            <Animate>
              <p>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>
              </Animate>
            </ul>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_4">
            <Animate>
              <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We may use cookies and other tracking technologies to collect
                  and store your information.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_5">
            <Animate>
              <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this privacy notice unless otherwise
                  required by law.
                </em>
              </p>
            </Animate>
            <Animate>
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than2 years.
              </p>
            </Animate>
            <Animate>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}
          {/* SINGLE POINT */}
          <div className="info-block point" id="point_6">
            <Animate>
              <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We aim to protect your personal information through a system
                  of organizational and technical security measures.
                </em>
              </p>
            </Animate>

            <Animate>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our safeguards
                and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security, and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our Websiteis at your own risk. You should only access the
                Website within a secure environment.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_7">
            <Animate>
              <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  We do not knowingly collect data from or market to children
                  under 18 years of age.
                </em>
              </p>
            </Animate>

            <Animate>
              <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using theWebsite, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of
                theWebsite. If we learn that personal information from users
                less than 18 years of age has been collected, we will deactivate
                the account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at{" "}
                <Link
                  to="mailto:privacy@17oranges.com"
                  target="_blank"
                  className="link"
                >
                  privacy@17oranges.com.
                </Link>
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_8">
            <Animate>
              <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  In some regions, such as the European Economic Area (EEA) and
                  United Kingdom (UK), you have rights that allow you greater
                  access to and control over your personal information.You may
                  review, change, or terminate your account at any time.
                </em>
              </p>
            </Animate>

            <Animate>
              <p>
                In some regions (like the EEA and UK), you have certain rights
                under applicable data protection laws. These may include the
                right (i) to request access and obtain a copy of your personal
                information, (ii) to request rectification or erasure; (iii) to
                restrict the processing of your personal information; and (iv)
                if applicable, to data portability. In certain circumstances,
                you may also have the right to object to the processing of your
                personal information. To make such a request, please use
                thecontact detailsprovided below. We will consider and act upon
                any request in accordance with applicable data protection laws.
              </p>
            </Animate>
            <Animate>
              <p>
                If we are relying on your consent to process your personal
                information, you have the right to withdraw your consent at any
                time. Please note however that this will not affect the
                lawfulness of the processing before its withdrawal, nor will it
                affect the processing of your personal information conducted in
                reliance on lawful processing grounds other than consent.
              </p>
            </Animate>
            <Animate>
              <p>
                If you are a resident in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:{" "}
                <Link
                  to="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  className="link"
                >
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                </Link>
              </p>
            </Animate>
            <Animate>
              <p>
                If you are a resident in Switzerland, the contact details for
                the data protection authorities are available here:{" "}
                <Link
                  to="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  className="link"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html.{" "}
                </Link>
              </p>
            </Animate>
            <Animate>
              <p>
                Cookies and similar technologies:Most Web browsers are set to
                accept cookies by default. If you prefer, you can usually choose
                to set your browser to remove cookies and to reject cookies. If
                you choose to remove cookies or reject cookies, this could
                affect certain features or services of ourWebsite. To opt-out of
                interest-based advertising by advertisers on our Website visit{" "}
                <Link
                  to="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  className="link"
                >
                  {" "}
                  http://www.aboutads.info/choices/.
                </Link>
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_9">
            <Animate>
              <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            </Animate>

            <Animate>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_10">
            <Animate>
              <h2>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  Yes, if you are a resident of California, you are granted
                  specific rights regarding access to your personal information.
                </em>
              </p>
            </Animate>

            <Animate>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </p>
            </Animate>
            <Animate>
              <p>
                If you are under 18 years of age, reside in California, and have
                a registered account with the Website, you have the right to
                request removal of unwanted data that you publicly post on
                theWebsite. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on theWebsite, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g. backups, etc.).
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_11">
            <Animate>
              <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            </Animate>
            <Animate>
              <p>
                <span>In Short:</span>{" "}
                <em>
                  Yes, we will update this notice as necessary to stay compliant
                  with relevant laws.
                </em>
              </p>
            </Animate>

            <Animate>
              <p>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_12">
            <Animate>
              <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            </Animate>

            <Animate>
              <p>
                If you have questions or comments about this notice, you may
                email us at{" "}
                <Link
                  to="mailto:privacy@17oranges.com"
                  target="_blank"
                  className="link"
                >
                  privacy@17oranges.com
                </Link>
                or by post to:
              </p>
            </Animate>
            <Animate>
              <p>
                17 Oranges Limited <br /> 95 Seaside Road <br /> Eastbourne{" "}
                <br />
                BN21 3PL <br />
                United Kingdom
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          {/* SINGLE POINT */}
          <div className="info-block point" id="point_13">
            <Animate>
              <h2>
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h2>
            </Animate>

            <Animate>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it in some
                circumstances. To request to review, update, or delete your
                personal information, please submit a request form by clicking
                here.
              </p>
            </Animate>
          </div>
          {/* END SINGLE POINT */}

          <div className="info-block">
            <Animate>
              <p>
                This privacy policy was created using Termly’s Privacy Policy
                Generator.
              </p>
            </Animate>
          </div>
        </div>
      </section>
      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default PrivacyPolicy;
