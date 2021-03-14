import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import Contact from "../../Sections/Contact/Contact";
import Legal from "../../Sections/Legal/Legal";
import Header from "../../Components/Header/Header";
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";
import TextSection from "../../Components/TextSection/TextSection";
import Adress from "../../Components/Adress/adress";
import "../../pages/Privacy/Privacy.css";

interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class PrivacyWeb extends Component<AppProps, AppState> {

    componentDidMount(){
        this.updateHeight();
        this.updateWidth();
        window.addEventListener("resize", ()=>{this.props.general?.setWidth(window.innerWidth)});
    }

    updateHeight = () => {
        this.props.general?.setHeight(window.innerHeight);
    }

    updateWidth = () => {
        this.props.general?.setWidth(window.innerWidth);
    }

    render() {


        return (
            <div style={{paddingBottom:"2rem"}} className={"textSection TextInSec"}>
                <SecondaryHeading style={{paddingTop:"2rem"}} text={"Data Privacy Policy for this Website"}/>
                <br/>
                <span className={"bold"}>Name and address of the responsible person</span>

                <br/>
                <p>We, MBYT UG (haftungsbeschränkt), are to be designated as the responsible party within the meaning of the General Data Protection Regulation (DSGVO) and the Federal Data Protection Act (BDSG) as well as other data protection regulations for our website and the associated data processing. Comprehensive information about our company can be found in the imprint.</p>

                <p>MBYT UG (haftungsbeschränkt)</p>
                <p>Jahnstraße 70</p>
                <p>56179 Vallendar</p>
                <p>Germany</p>
                <a className={"link-text"} href="mailto:info@mbyt.de">info@mbyt.de</a><br/>
                <br/>
                <p>We have appointed a data protection officer. This can be reached via the following contact details:</p>
                <br/>
                <p>MBYT UG (haftungsbeschränkt)</p>
                <p>- Privacy -</p>
                <p>Jahnstraße 70</p>
                <p>56179 Vallendar</p>
                <p>Germany</p>
                <a className={"link-text"} href="mailto:privacy@mbyt.de">privacy@mbyt.de</a><br/>
                <br/>
                <br/>
                <span className={"bold subheading"}>Provision of the website and log files</span>
                <br/>
                <br/>
                <span className={"bold"}>Description and scope of data processing</span>

                <br/>
                <p>Each time our website is called up, our system, i.e. the web server, automatically collects information from the system of the calling computer or end device of the user.
                    The following data is collected by us:</p>
                <ul>
                    <li><p>Information about the type of the browser and the used version</p></li>
                    <li><p>The operating system of the user's end device</p></li>
                    <li><p>The Internet service provider of the user</p></li>
                    <li><p>The IP-address of the user</p></li>
                    <li><p>Date and time of the access</p></li>
                    <li><p>The previous website from which the user accesses our website</p></li>
                </ul>

                <br/>
                <span className={"bold"}>Legal basis for data processing</span>
                <br/>
                <p>The legal basis for the temporary storage of this data and the log files is Art. 6 para. 1 lit. f) DSGVO, because we have a legitimate interest as the responsible website operator.</p>
                <br/>
                <span className={"bold"}>Purpose of data processing</span>
                <br/>
                <p>The temporary storage of the IP address of the user by our web server is necessary to enable the provision of the website to the user's computer, it is technically impossible otherwise. For this purpose, the IP address of the user must necessarily remain stored for the duration of the session.

                    The storage of the above data in the log files is done to ensure the functionality of our website. Only in this way can we really guarantee the security of our information technology systems (e.g. to detect attacks). Furthermore, we constantly optimize the website to make it more appealing. An evaluation of this data for marketing purposes does not take place in this context.

                    </p>
                <br/>
                <span className={"bold"}>Duration of data storage</span>
                <p>The above data will be deleted as soon as they are no longer necessary to achieve the purpose of their collection. In the case of the collection of data for the provision of the website is usually achieved when the respective session is ended.

                    In the case of storage of data in log files, this is the case after seven days at the latest. Storage beyond this period is possible - but we will then delete the user's IP address or make it unrecognizable in such a way that it is no longer possible to assign the calling user and the data it contains no longer has any personal reference.</p>
                <br/>
                <br/>
                <span className={"bold subheading"}>Cookies</span>
                <br/>
                <br/>
                <span className={"bold"}>Description and scope of data processing</span>
                <p>When you visit our website, information is stored on your browser in the form of a cookie (small text files). This stores information about your use of the website (identification ID, date of visit, etc.). With the use of cookies, we make it easier for you to use our website through various service functions (such as recognition of previous visits) and can thus better tailor the Internet offering to your needs. You can prevent the storage of cookies and delete existing cookies by making the appropriate settings in your browser. You can find further information in the help menus of the browser you are using. However, if you set your browser not to accept cookies, this may impair the service functions of the Internet offer. We therefore recommend that you leave the cookie function switched on.

                    In addition, we use cookies from third-party providers for retargeting and remarketing technologies to optimize our website and for interest-based marketing purposes. The stored surfing behavior is analyzed using an algorithm so that targeted interest-based product recommendations can then be displayed in the form of advertising banners or advertisements on third-party websites. The pseudonymized usage profiles are not merged with personal data about the bearer of the pseudonym without the separate express consent of the person concerned.

                    Further guidance on the use of cookies can be found here, among others: <a className={"link-text"} href="https://www.youronlinechoices.com/de/praferenzmanagement/">youronlinechoices</a>, <a className={"link-text"}
                        href="https://www.networkadvertising.org/">Network Advertising Initiative</a> and/or <a className={"link-text"}
                        href="https://optout.aboutads.info/?lang=EN&c=2#!%2F">Digital Advertising Alliance</a>.</p>
                <br/>
                <span className={"bold"}>Legal basis and purpose of data processing</span>
                <p>The legal basis for data processing is Art. 6 para. 1 lit. f) DSGVO (legitimate interest of us as the responsible party). You can see the purpose in the description; we have a legitimate interest in an optimized presentation of our website. We would like to implement a technically error-free provision of the website.</p>
                <br/>
                <span className={"bold"}>Mail address and contact</span>
                <br/>
                <span className={"bold"}>Description and scope of data processing</span>
                <br/>
                <p>We can be contacted via our contact form and the e-mail address provided on this website. In this case, the personal data of the user (i.e. the sender of the e-mail) transmitted with the inquiry will be stored.

                </p>
                <br/>
                <span className={"bold"}>Legal basis for data processing</span>
                <p>The legal basis for the data processing is Art. 6 para. 1 lit. f) DSGVO (legitimate interest of us as the responsible party).

                    If the request is aimed at the conclusion of a contract, the additional legal basis for the processing is Art. 6 (1) (b) DSGVO (performance of a contract). This means in particular the possibility of depositing the email address for newsletter purposes.</p>
                <br/>
                <span className={"bold"}>Purpose of data processing</span>
                <p>The processing of this personal data serves us solely to process the contact.</p>
                <br/>
                <span className={"bold"}>Duration of data storage</span>
                <p>The above data will be deleted as soon as they are no longer required to achieve the purpose for which they were collected. For the personal data sent by e-mail and/or the contact form, this is the case when the respective conversation with the user has ended. We assume that the conversation has ended when it can be inferred from the circumstances that the matter in question has been conclusively clarified. We limit the processing of personal data to a minimum that is necessary for the initiation or processing of the business relationship with the user or for the performance of the service requested by the user.</p>
                <br/>
                <br/>
                <span className={"bold subheading"}>Tracking and Re-Marketing</span>
                <p>We use analysis and advertising tools on our website and inform you about this in the following sections in a detailed and transparent manner about the individual tools.</p>
                <span className={"bold"}>Description and scope of data processing</span>
                <p>We use the tracking tool Google Analytics on our website. The provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland. In Google Analytics, interactions of the user of our website are primarily recorded and systematically evaluated with the help of cookies. If individual pages of our website are called up, the following data is stored:</p>
                <ul>
                    <li>
                        <p>Three bytes of the IP address of the calling system (anonymized IP address).</p>
                    </li>
                    <li>
                        <p>The accessed website</p>
                    </li>
                    <li>
                        <p>The website from which the user accessed the page (referrer)</p>
                    </li>
                    <li>
                        <p>The subpages that are called from the called page</p>
                    </li>
                    <li>
                        <p>The time spent on the website</p>
                    </li>
                    <li>
                        <p>Die Häufigkeit des Aufrufs der Webseite</p>
                    </li>
                </ul>
                <p>
                    The last octet of the IP address (example: 110.034.201.***) is masked and thus the IP address is not stored completely ("_anonymizeIP"). In this way, an assignment of the shortened IP address to the calling computer is no longer possible.
                </p>
                <br/>
                <span className={"bold"}>Legal basis for data processing</span>
                <p>
                    The data processing is based on a balancing of interests according to Art. 6 para. 1 lit. f) DSGVO. We have a legitimate interest in the optimization of our website and the content provided as well as an optimization of advertising measures.
                </p>
                <br/>
                <span className={"bold"}>Purpose of data processing</span>
                <p>
                    The processing of the user's personal data with the help of Google Analytics enables us to analyze the surfing behavior of our users. By evaluating the data obtained, we are able to compile information about the use of the individual components of our website. We thereby increase the user-friendliness but also the quality of our content.
                </p>
                <br/>
                <span className={"bold"}>Duration of storage</span>
                <p>The data stored by tracking is deleted as soon as it is no longer required for our recording purposes. This is currently the case for us after twelve months.</p>
                <br/>
                <span className={"bold"}>Additional information regarding data processing</span>
                <p>Mithilfe eines Browser-Addons kann der Nutzer verhindern, dass Google Analytics dessen Daten auf unserer Website verwendet. Hierbei deaktiviert das Addon die Google Analytics-JavaScripts (ga.js, analytics.js, dc.js). Soweit Sie Google Analytics deaktivieren wollen, können Sie das Addon hier herunterladen: <a className={"link-text"}
                    href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a>

                    Dort finden Sie auch nähere Informationen. Wir haben eine Auftragsverarbeitungsvereinbarung mit Google geschlossen.</p>
                <br/>
                <span className={"bold"}>Right of the data subject</span>
                <p>
                    If personal data of a user is processed, the user is a "data subject" within the meaning of the GDPR. The data subject has the following rights:
                </p>
                <ul>
                    <li>
                        <p>Right to information</p>
                    </li>
                    <li>
                        <p>Right to rectification</p>
                    </li>
                    <li>
                        <p>Right to restriction of processing</p>
                    </li>
                    <li>
                        <p>Right to erasure</p>
                    </li>
                    <li>
                        <p>Right to instruction</p>
                    </li>
                    <li>
                        <p>Right to data portability</p>
                    </li>
                    <li>
                        <p>Right to object</p>
                    </li>
                    <li>
                        <p>Right to revoke the declaration of consent under data protection law</p>
                    </li>
                    <li>
                        <p>Right to complain to a data protection supervisory authority</p>
                    </li>
                </ul>
                <br/>
                <span className={"bold"}>Your right to object according to Art. 21 DSGVO</span>
                <p>You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is collected on the basis of Article 6 (1) (f) or (e) DSGVO. This also applies to profiling based on this provision, Article 4 No. 4 DSGVO.<br/>

                    As soon as you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves to assert, exercise or defend legal claims. <br/>

                    The objection can be made form-free and should preferably be addressed to: MBYT UG (haftungsbeschränkt), Jahnstraße 70, D-56179 Vallendar, <a className={"link-text"}
                        href="maito:privacy@mbyt.de">privacy@mbyt.de</a>.</p>

                <br/>
                <span className={"bold"}>Note on revocation of consent</span>
                <p>
                    A data subject has the right to revoke his or her declaration of consent under data protection law at any time by contacting us. This does not affect the lawfulness of any processing carried out on the basis of consent up to the time of revocation.
                </p>
                <br/>
                <span className={"bold"}>Note of complaint to a supervisory authority</span>
                <p>Without prejudice to any other administrative or judicial remedy, a data subject shall have the right to lodge a complaint with a supervisory authority - in particular in the Member State of the user's residence, the user's place of work or the place of the alleged infringement - if the user considers that the processing of his personal data by us infringes the GDPR.</p>
                <br/>
                <p>This privacy policy is updated frequently: Current version from 14.03.2021</p>

            </div>
        )
    }

}

export default PrivacyWeb;
