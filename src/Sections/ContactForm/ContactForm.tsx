import React, {Component} from "react";
import "./ContactForm.css"

import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";



interface AppState {

}

interface AppProps {

}

class ContactForm extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"normal_div"}>
                <div style={{width:"100%"}}>
                    <PrimaryHeading style={{textAlign:"center"}} text={"Get in touch"}/>
                    <SecondaryHeading style={{textAlign:"center"}} text={"Contact Form"}/>
                    <div className={"contact-form"}>
                        <form id={"contactform"} action="">
                            <div className={"contact-form-box"}>

                                    <div className={"form-row grid-container-contact"} >
                                        <div style={{width:"100%", paddingTop:"1rem"}}>
                                            <label className={"label-text"} htmlFor="name">Your Name</label><br/>
                                            <input className={"input-field"} id={"name-input"} name={"name"} placeholder={"Your full Name"} type="text"/>
                                        </div>

                                        <div style={{width:"100%", paddingTop:"1rem"}}>
                                            <label className={"label-text"} htmlFor="mail">Your Mail</label><br/>
                                            <input className={"input-field"} id={"mail"} name={"mail"} placeholder={"Your Mail"} type="mail"/>
                                        </div>


                                </div>

                                <div className={"form-row"} style={{width:"100%"}}>
                                <label className={"label-text"} htmlFor="message">Your Message</label><br/>
                                <textarea className={"input-field"} id={"message"} name={"message"} placeholder={"Your Questions.."}/>
                            </div>
                                <div className={"submit-button-container"}>
                                    <input id={"contact-form-submit"} type="submit" value={"Send"}/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>


            </div>


        );
    }


};

export default ContactForm;

