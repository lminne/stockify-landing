import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import "./Privacy.css"
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
class Privacy extends Component<AppProps, AppState> {

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
            <div id={"app"}>
                <Header/>
                <div className={"navbar-margin"}>
                    <div className={"section"}>

                        <div style={{width:"100%"}}>
                            <PrimaryHeading style={{textAlign:"center"}} text={"Data Privacy"}/>
                            <SecondaryHeading style={{textAlign:"center", paddingBottom:"1rem"}} text={"About your data"}/>

                            <div className={"textSection TextInSec"}>
                                Our Privacy Policy is structured as follows: <br/>
                                <br/>
                                <br/>
                                <span className={"bold"}>A. Responsible person</span>
                                <br/>
                                <br/>
                                <span className={"bold"}>B. Processing of personal data</span>
                                <br/>
                                <br/>
                                <span className={"bold"}>C. Your rights</span>

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                The simultaneous use of masculine and feminine language forms is avoided for reasons of better readability.<br/>
                                All references to persons apply equally to all genders.<br/>
                                <br/>
                                <br/>
                                <span className={"bold"}>A. Responsible person</span>
                                <br/>
                                <br/>
                                Responsible for the processing of personal data is:
                                <br/>
                                <br/>
                                MBYT UG (haftungsbeschränkt)<br/>
                                Jahnstraße 70<br/>
                                56179 Vallendar<br/>
                                <a className={"link-text"} href="mailto:info@mbyt.de">info@mbyt.de</a><br/>
                                <br/>
                                <br/>
                                <span className={"bold"}>B. Processing of personal data</span>
                                <br/>
                                <br/>
                                Please read here how personal data is collected and for what purposes and on what legal basis it is processed, to whom and for what purpose the data is disclosed, and under what conditions it is deleted.
                                <br/>
                                <br/>
                                <span className={"bold"}>1. Technical and functional provision of the application</span>
                                <br/>
                                <br/>
                                We process personal data to be able to provide our application as far as possible without technical or functional restrictions and in accordance with legal requirements.
                                <br/>
                                <br/>
                                <span className={"bold"}>a) Logs</span>
                                <br/>
                                <br/>
                                When you open our application, we store certain access data, such as browser type and version, operating system used, previously visited website, server request access date and time, and client file request (file name and URL). We use this data anonymously for statistical evaluations without assigning it to the respective user.
                                <br/>

                                The purposes of this data processing are retrievability and correct display on your end device and optimization of our application. To that extent we have a legitimate interest. The processing is performed on the basis of Art. 6, para. 1, sentence 1, letter f DSGVO and Sec. 15 TMG.
                                <br/>
                                <br/>
                                <span className={"bold"}>b) Necessary cookies</span>
                                <br/>
                                <br/>
                                We use cookies, i.e. small text files that are stored on your end device so that you can navigate the application without restrictions and use all functions. These include cookies that allow access to password protected areas. Without these cookies, we are unable to provide the services you request. The legal basis for the processing of data using necessary cookies is Art. 6, para. 1, sentence 1, letter b DSGVO.
                                <br/>
                                <br/>
                                <span className={"bold"}>c) Functional Cookies</span>
                                <br/>
                                <br/>
                                We use cookies, i.e. small text files that are stored on your end device, to improve the functionality and service of the application. These include cookies that store your preferences (such as language settings) so that they are preset the next time you open our application. We have a legitimate interest in enabling the users of our application to have the most positive user experience possible. The legal basis for the processing of data using functional cookies is Art. 6, para. 1, sentence 1, letter f DSGVO.
                                <br/>
                                <br/>
                                <span className={"bold"}>2. Establishing contact</span>
                                <br/>
                                <br/>
                                We collect personal data when you provide it to us. Such data may, for example, include data that you send us about your portfolio or receipts of your broker.
                                <br/>
                                This data is processed on the basis of Art. 6, para. 1, sentence 1, letter b DSGVO insofar as this is necessary to implement a measure requested by you. In all other cases, the processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Art. 6, para. 1, sentence 1, letter f DSGVO).
                                <br/>
                                <br/>
                                <span className={"bold"}>3. Further processing of personal data through our application</span>
                                <br/>
                                <br/>
                                <span className={"bold"}>a. Google services</span>
                                <br/>
                                <br/>
                                Where you have so consented, this application uses services provided by Google Ireland Limited, Google Building Gordon House, 4 Barrow Street, Dublin, D04 E5W5, Ireland (“Google”).
                                <br/>
                                <br/>
                                <span className={"bold"}>aa. General information on Google services; legal basis</span>
                                <br/>
                                <br/>
                                To be able to provide its services, Google processes personal data. The legal basis for data processing by Google services is your consent and Art. 6, para. 1, sentence 1, letter a DSGVO.
                                <br/>
                                It cannot be excluded that information collected through Google services may also be transmitted to and stored on a Google server in a third country, in particular a server of Google’s parent company, Google LLC, with its registered office at 1600 Amphitheatre Parkway, Mountain View, California, USA. In order to secure the transmission to third countries, we have negotiated standard privacy clauses with Google in accordance with Art. 46, para. 2, letter c DSGVO. Google has assured us that it will ensure compliance with the privacy arrangements.
                                <br/>
                                If you are signed in to your Google account, Google may add processed information to your account and treat it as personal data according to your account settings; see in particular <a className={"link-text"} href={"https://www.google.de/policies/privacy/partners/"}>https://www.google.de/policies/privacy/partners/</a>. We are not informed about the data collected in this way and how it is used.
                                <br/>
                                <br/>
                                You can find further information on data processing by Google at:
                                <br/>
                                <br/>
                                <ul>
                                    <li><a href={"https://policies.google.com/privacy"} className={"link-text"}>https://policies.google.com/privacy</a> (“Google Privacy Policy”)</li>
                                    <li><a href={"https://www.google.com/intl/de/policies/privacy/partners"} className={"link-text"}>https://www.google.com/intl/de/policies/privacy/partners</a> (“Use of data by Google during your use of our partners’ websites or apps”)</li>
                                    <li><a href={"http://www.google.com/policies/technologies/ads"} className={"link-text"}>http://www.google.com/policies/technologies/ads</a> (“Use of data for advertising purposes”)</li>
                                </ul>
                                <br/>
                                <br/>
                                <span className={"bold"}>bb. Google Analytics</span>
                                <br/>
                                <br/>
                                This application uses the Google Analytics service. Using cookies, i.e. small text files that are stored on your end device, this service evaluates your browsing behavior across websites and services.
                                <br/>
                                Google processes the collected data on our behalf to provide us with pseudonymous profiles of individual visitors and general statistics on the use of our application. We use this information to improve our offer and make it more interesting for you as a user.
                                <br/>
                                Furthermore, this application uses the demographics feature of Google Analytics. By analyzing your browsing behavior, Google can make statistical statements about the demographics and interests (such as age, gender, affinity categories, and segments with target groups who are willing to buy) of our application’s visitors. However, we cannot assign this data to any particular person. We use the demographic information to improve our offer and make it more interesting for you as a user. You can find further information on data processing by the demographics of Google Analytics at: <a
                                href="https://support.google.com/analytics/answer/2799357?hl=de" className={"link-text"}>https://support.google.com/analytics/answer/2799357?hl=de</a>.
                                <br/>
                                You can download and install a plug-in for your browser to deactivate Google Analytics for all websites at the following link: <a
                                href="http://tools.google.com/dlpage/gaoptout?hl=de" className={"link-text"}>http://tools.google.com/dlpage/gaoptout?hl=de</a>.
                                <br/>
                                You can find further information on data processing by Google Analytics at: <a className={"link-text"}
                                href="https://support.google.com/analytics/answer/6004245?hl=de%20">https://support.google.com/analytics/answer/6004245?hl=de%20</a>.
                                <br/>
                                <br/>
                                <span className={"bold"}>4. Disclosure to third parties</span>
                                <br/>
                                <br/>
                                Your personal data will only be disclosed to third parties where this is necessary for operating the application or performing the agreement (Art. 6, para. 1, sentence 1, letter b DSGVO), you have expressly consented to the disclosure (Art. 6, para. 1, sentence 1, letter a DSGVO), or privacy laws permit such a disclosure. However, only the data required in each case will be disclosed.
                                <br/>
                                The application is hosted on servers of the Heroku service, which is rendered by our authorized service provider Salesforce.com, Inc., 415 Mission Street, Suite 300, San Francisco, California 94105, USA (“Salesforce”). In order to secure the transmission to third countries, we have negotiated standard privacy clauses with Salesforce in accordance with Art. 46, para. 2, letter c DSGVO. Salesforce has assured us that it will ensure compliance with the privacy arrangements.
                                #todo change server provider
                                <br/>
                                If you submit documents to us via the application, they will be stored on servers of our authorized service provider Amazon Web Services EMEA SARL, Luxembourg (“Amazon”). The data is stored exclusively in a data center in the EU. Access rights are strictly limited, and the data is automatically encrypted.
                                <br/>
                                Some categories of personal data recipients are service providers conducting product analysis, payment service providers, as well as technical support staff for the application. In the latter cases, the data is processed by an authorized service provider who is bound by the privacy laws and may not use the data for any other purpose.
                                <br/>
                                <br/>
                                <span className={"bold"}>5. Data deletion</span>
                                <br/>
                                <br/>
                                We store the personal data processed by us for as long as necessary for the respective purpose – in particular the processing of your request or your order – in compliance with the statutory retention periods (for example, ten years for tax-relevant documents or six years for other business letters, in accordance with the Commercial Code and Fiscal Code) (Art. 6, para. 1, sentence 1, letter c DSGVO). Storage beyond the statutory retention periods is possible if you have consented to it in accordance with Art. 6, para. 1, sentence 1, letter a DSGVO or the data processing purpose continues to apply.
                                <br/>
                                <br/>
                                <span className={"bold"}>C. Your rights</span>
                                <br/>
                                <br/>
                                <span className={"bold"}>1. Deactivation of cookies</span>
                                <br/>
                                <br/>
                                Some of the processing operations described above use cookies. Most browsers accept cookies automatically. If you do not want this, you can deactivate the storage of cookies on your hard drive in your browser settings. You can also delete any stored cookies in your browser settings at any time. However, you may not be able to use all functions of our application to their full extent in this case.
                                <br/><br/>
                                <span className={"bold"}>2. Revocation right</span>
                                <br/>
                                <br/>
                                Some of the processing operations described above are only carried out with your consent. You may revoke your consent to these processing operations at any time with effect for the future. In this case, you may not be able to use our services as usual until you give your consent again to the respective data processing. You can exercise your revocation right by sending an e-mail to <a className={"link-text"} href={"mailto:info@mbyt.de"}>info@mbyt.de</a>. This way you can also consent again to individual data processing operations.
                                <br/>
                                <br/>
                                <span className={"bold"}>3. Right of objection</span>
                                <br/>
                                <br/>
                                You may object to the use of personal data for the purposes of direct advertising at any time; you may also object to the use of personal data on the basis of Art. 6, para. 1, letters e or f DSGVO at any time with effect for the future for reasons attributable to your particular situation, without incurring any costs other than transmission costs as per the standard rates.
                                <br/>
                                <br/>
                                <span className={"bold"}>4. Right to information, correction, deletion, or limitation and transferability</span>
                                <br/>
                                <br/>
                                Subject to the provisions of Art. 15 to 20 DSGVO, you have the right to obtain information free of charge about the data we have stored about you, have any incorrect data corrected, and request the deletion or limitation of processing and the transferability of your personal data. In some cases, however, we are not allowed to delete user data completely due to statutory storage obligations.
                                <br/>
                                <br/>
                                <span className={"bold"}>5. Right of appeal</span>
                                <br/>
                                <br/>
                                You have the right of appeal to a supervisory authority.
                                <br/>
                                <br/>

                            </div>
                            </div>
                    </div>
                    <Footer/>
                </div>

            </div>
        )
    }

}

export default Privacy;
