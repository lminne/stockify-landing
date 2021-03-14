import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import "../../pages/Privacy/Privacy.css";
import Contact from "../../Sections/Contact/Contact";
import Legal from "../../Sections/Legal/Legal";
import Header from "../../Components/Header/Header";
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";
import TextSection from "../../Components/TextSection/TextSection";
import Adress from "../../Components/Adress/adress";

interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class PrivacyApp extends Component<AppProps, AppState> {

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
                    <SecondaryHeading style={{paddingTop:"2rem"}} text={"Data Privacy Policy for the mobile application"}/>
                    <br/>
                    <span className={"bold"}>Name and address of the responsible person</span>
                    <br/>
                    <p>We, MBYT UG (haftungsbeschränkt), are to be designated as the responsible party within the meaning of the General Data Protection Regulation (DSGVO) and the Federal Data Protection Act (BDSG) as well as other data protection regulations for our website and the associated data processing. Comprehensive information about our company can be found in the imprint.</p>
                    <br/>
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
                    <span className={"bold subheading"}>Provision of the mobile app and use of the mobile app</span>
                    <br/>
                    <br/>
                    <span className={"bold"}>Description and scope of data processing</span>
                    <br/>
                    <p>When downloading the mobile app, the required information is transferred to the App Store, i.e. in particular user name, e-mail address and customer number of your account, time of download, payment information and the individual device identification number. We have no influence on this data collection and are not responsible for it. We process the data only insofar as it is necessary for downloading the mobile app to your mobile device. When using the mobile app, we collect the personal data described below to enable convenient use of the functions. If you wish to use our mobile app, we collect the following data that is technically necessary for us to offer you the functions of our mobile app and to ensure stability and security.</p>
                    <ul>
                            <li><p>IP-Address</p></li>
                            <li><p>Date and time of request</p></li>
                            <li><p>Time zone difference from Greenwich Mean Time (GMT)</p></li>
                            <li><p>Content of the request (concrete page)</p></li>
                            <li><p>Access status/HTTP status code</p></li>
                            <li><p>Data volume transferred in each case</p></li>
                            <li><p>Website from which the request comes</p></li>
                            <li><p>Operating system and its interface</p></li>
                            <li><p>Language and version of browser software</p></li>
                    </ul>
                    <br/>
                    <p>During installation, our mobile app generates a device key that uniquely identifies your mobile device in order to pair it with the user account. In this way, we ensure that your account is not used by strangers against your will. For advertising purposes, we use the so-called "Advertising Identifier" (IDFA). This is a unique, but non-personalized and non-permanent identification number for a specific end device provided by iOS. The data collected via the IDFA is not linked to any other device-related information. We use the IDFA to provide you with personalized advertising and to evaluate your usage.</p>
                    <br/>
                    <span className={"bold"}>Legal basis for data processing</span>
                    <br/>
                    <p>The legal basis for the temporary storage of this data and the log files is Art. 6 (1) f) DSGVO, because we have a legitimate interest as the responsible app provider. Additional legal basis in the context of providing our service is Art. 6 para. 1 lit. b) DSGVO.</p>
                    <br/>
                    <span className={"bold"}>Purpose of data processing</span>
                    <br/>
                    <p>
                            The storage of the above data in the log files is done to ensure the functionality of our mobile app. This is the only way we can really guarantee the security of our information technology systems (e.g. to detect attacks). Furthermore, we are constantly optimizing the website to make it more appealing. We need the other data in order to be able to provide the app and the associated services.
                    </p>
                    <br/>
                    <span className={"bold"}>Duration of data storage</span>
                    <p>The above data will be deleted as soon as they are no longer necessary to achieve the purpose of their collection. In the case of the collection of data for the provision of the website is usually achieved when the respective session is ended. <br/>

                            In the case of storage of data in log files, this is the case after seven days at the latest. Storage beyond this period is possible - but we will then delete the user's IP address or make it unrecognizable in such a way that it is no longer possible to assign the calling user and the data it contains no longer has any personal reference.</p>
                    <br/>
                    <br/>
                    <span className={"bold subheading"}>Cookies</span>
                    <br/>
                    <br/>
                    <span className={"bold"}>Description and scope of data processing</span>
                    <p>When you visit our website, information is stored on your browser in the form of a cookie (small text files). This stores information about your use of the website (identification ID, date of visit, etc.). With the use of cookies, we make it easier for you to use our website through various service functions (such as recognition of previous visits) and can thus better tailor the Internet offering to your needs. You can prevent the storage of cookies and delete existing cookies by making the appropriate settings in your browser. You can find further information in the help menus of the browser you are using. However, if you set your browser not to accept cookies, this may impair the service functions of the Internet offer. We therefore recommend that you leave the cookie function switched on. <br/>


                            In addition, we use cookies from third-party providers for retargeting and remarketing technologies to optimize our website and for interest-based marketing purposes. The stored surfing behavior is analyzed using an algorithm so that targeted interest-based product recommendations can then be displayed in the form of advertising banners or advertisements on third-party websites. The pseudonymized usage profiles are not merged with personal data about the bearer of the pseudonym without the separate express consent of the person concerned.</p>
                    <br/>
                    <span className={"bold"}>Legal basis and purpose of data processing</span>
                    <p>The legal basis for data processing is Art. 6 para. 1 lit. f) DSGVO (legitimate interest of us as the responsible party). You can see the purpose in the description; we have a legitimate interest in an optimized presentation of our website. We would like to implement a technically error-free provision of the website.</p>
                    <br/>
                    <br/>
                    <span className={"bold subheading"}>Mail delivery via SendGrid</span>
                    <br/>
                    <br/>
                    <span className={"bold"}>Description and scope of data processing</span>
                    <br/>
                    <p>We use the internet service SendGrid of the company SendGrid, Inc., 1401 Walnut, Boulder, CO 80302, United States to send e-mails to the user and/or customer. <br/>

                            The sending of e-mails is organized and analyzed by the service provider. In this way, it can be determined whether an e-mail has been opened or not. For this purpose, SendGrid uses so-called "webbeacons". These connect to the SendGrid server in the USA. The following data is collected in the process:

                    </p>
                    <ul>
                            <li>
                                    <p>IP-Address</p>
                            </li>
                            <li>
                                    <p>Date of last profile update</p>
                            </li>
                            <li>
                                    <p>Geolocation and timezone</p>
                            </li>
                            <li>
                                    <p>Languageinformation of browser</p>
                            </li>
                    </ul>
                    <br/>
                    <span className={"bold"}>Legal basis for data processing</span>
                    <p>The legal basis for the processing is Art. 6 para. 1 lit. f) DSGVO (legitimate interest of us as the controller). Additional legal basis is Art. 6 para. 1 lit. b) DSGVO (fulfillment of a contract).</p>
                    <br/>
                    <span className={"bold"}>Purpose of data processing</span>
                    <p>The data processing is carried out for the purpose of communication with the user. It can be ensured that e-mails, for example, also arrive and are not returned. This is necessary, for example, to ensure that transactional e-mails, e.g. registrations, are also delivered. Likewise, we can fulfill our contract in this way, as we ensure that important e-mails actually reach the customer or user.</p>
                    <br/>
                    <span className={"bold"}>Additional information to data processing</span>
                    <p>SendGrid Inc., which operates SendGrid, is certified according to the requirements of the Privacy Shield. For companies that are on the "Privacy Shield List", it can be assumed that an "adequate level of data protection", i.e. the necessary European standard, exists for the processing of personal data in these companies. The Privacy entry can be found at: <a className={"link-text"}
                        href="https://www.privacyshield.gov/participant?id=a2zt0000000TRktAAG">https://www.privacyshield.gov/participant?id=a2zt0000000TRktAAG</a>. SendGrid itself provides further information: <a className={"link-text"}
                        href="https://sendgrid.com/privacy">https://sendgrid.com/privacy</a>. <br/>
                            SendGrid does not use this data itself or pass it on to third parties. We have entered into a Data Processing Agreement ("DPA") with SendGrid Inc.</p>
                    <br/>
                    <br/>
                    <span className={"bold subheading"}>Tracking and Re-Marketing</span>
                    <br/>
                    <p>We use analysis and advertising tools on our website and inform you about this in the following sections in a detailed and transparent manner about the individual tools.</p>
                    <br/>
                    <span className={"bold"}>Analysis via Google Firebase</span>
                    <p>We use the Firebase technology from Google (Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland). Firebase is part of the Google Cloud Platform and offers other services in addition to a real-time database:</p>
                    <br/>
                    <ul>
                            <li><p>Firebase Analytics enables the analysis of the use of our offer. This collects information about the use of our app, transmits it to Google and stores it there. Google uses the advertising ID of the end device for this purpose. The aforementioned information is processed and used anonymously by Google.</p></li>
                            <li><p>Firebase Analytics enables the analysis of the use of our offer. This collects information about the use of our app, transmits it to Google and stores it there. Google uses the advertising ID of the end device for this purpose. Google will use the aforementioned information to anonymously evaluate the use of our app and to provide us with further services related to the use of apps.</p></li>
                            <li><p>Firebase Crash Reporting is used for the stability and improvement of the app. It collects information about the device used and the usage of our app (e.g. the timestamp, when the app was launched and when the crash occurred), which allows us to diagnose and solve problems.</p></li>
                            <li><p>Firebase Cloud Messaging is used to transmit push messages or so-called in-app messages (messages that are only displayed within the app). A pseudonymized push reference is assigned to the mobile device, which serves as the target for the push messages or in-app messages.</p></li>
                    </ul>
                    <br/>
                    <span className={"bold"}>Legal basis for data processing</span>
                    <br/>
                    Data processing is based on Art. 6 (1) f) DSGVO (legitimate interest). We have a legitimate interest in providing a functioning and optimized mobile app that provides a certain level of comfort and technology.
                    <br/>
                    <br/>
                    <span className={"bold"}>Purpose of data processing</span>
                    <br/>
                    We use data processing with the purpose of providing a functional app that corresponds to the state of the art. With the data, which is evaluated anonymously, we obtain the necessary information that enables us to offer an appealing design of our content.                                <br/>
                    <br/>
                    <span className={"bold"}>Further information on data processing and the possibility to object</span>
                    <br/>
                    Google Firebase uses servers located in the EU for these services whenever possible. However, it cannot be ruled out that data may also be transferred to the USA. Google has joined the EU-US Privacy Shield, a data protection agreement between the EU and the USA.
                    <br/>
                    <br/>
                    You can restrict the use of the advertising ID in the device settings (iOS: Privacy - Advertising - No ad tracking; Android: Account - Google - Ads). The push messages can be deactivated and reactivated at any time in the mobile device settings.
                    <br/>
                    <br/>
                    <span className={"bold"}>Duration of data storage</span>
                    <p>As far as necessary, MBYT UG (haftungsbeschränkt) processes and stores your personal data for the duration of the business relationship, which includes, for example, the initiation and execution of a contract. <br/>

                            Finally, the storage period is also assessed according to the statutory limitation periods, which, for example, according to §§ 195 et seq. of the German Civil Code (BGB), are generally 3 years, but in certain cases can be up to 30 years.</p>

                    <br/>
                    <span className={"bold"}>Data transfer to a third country</span>
                    <p>Personal data will only be transferred to third countries (countries outside the European Economic Area (EEA)) if the third country has been confirmed by the EU Commission to have an adequate level of data protection or if other appropriate data protection guarantees (e.g. binding internal company data protection regulations or EU standard data protection clauses) have been agreed or if you have given your consent to MBYT UG (haftungsbeschränkt). We have already explained more details in the individual points.</p>
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

export default PrivacyApp;
