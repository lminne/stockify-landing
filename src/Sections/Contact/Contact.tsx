import React, {Component} from "react";
import "./Contact.css"
import ContactItem from "../../Components/ContactItem/ContactItem";
import {ReactComponent as Mail} from "../../assets/img/mail.svg";
import {ReactComponent as Call} from "../../assets/img/call.svg";
import {ReactComponent as Home} from "../../assets/img/adress.svg";



interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class Contact extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"section"}>
                <div style={{width:"100%"}}>
                    <h1 style={{textAlign:"center"}} className={"h1-primary"}>Contact us</h1>
                    <h3 style={{textAlign:"center"}} className={"h3-secondary"}>Get in touch</h3>
                    <div className={"get-started-container"}>
                        <ContactItem IconComp={<Mail/>} subheadingText={"info@stockify.de"} headingText={"Mail"}/>
                        <ContactItem IconComp={<Call/>} subheadingText={"+49 123 456 789"} headingText={"Phone"}/>
                        <ContactItem IconComp={<Home/>} subheadingText={"Vallendar, Germany"} headingText={"Adress"}/>
                    </div>
                </div>


            </div>


    );
    }


};

export default Contact;

