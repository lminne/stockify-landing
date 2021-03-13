import React, {Component} from "react";
import "./Contact.css"
import ContactItem from "../../Components/ContactItem/ContactItem";
import {ReactComponent as Mail} from "../../assets/img/mail.svg";
import {ReactComponent as Call} from "../../assets/img/call.svg";
import {ReactComponent as Home} from "../../assets/img/adress.svg";
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";



interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class Contact extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"normal_div contact-sec"}>
                <div style={{width:"100%"}}>
                    <PrimaryHeading style={{textAlign:"center"}} text={"Contact us"}/>
                    <SecondaryHeading style={{textAlign:"center"}} text={"Information"}/>
                    <div className={"get-started-container"}>
                        <ContactItem mail={true} IconComp={<Mail/>} subheadingText={"stockify@mbyt.de"} headingText={"Mail"}/>
                        <ContactItem mail={false} IconComp={<Call/>} subheadingText={"+49 123 456 789"} headingText={"Phone"}/>
                        <ContactItem mail={false} IconComp={<Home/>} subheadingText={"Vallendar, Germany"} headingText={"Adress"}/>
                    </div>
                </div>


            </div>


    );
    }


};

export default Contact;

