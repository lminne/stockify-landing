import React, {Component} from "react";
import "./ContactForm.css";
import axios from "axios";

import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";



interface AppState {
    fullname: string,
    email: string,
    message: string,
}

interface AppProps {

}

class ContactForm extends Component<AppProps, AppState> {
    constructor(props:AppState) {
        super(props);
        this.state = {
            message: "",
            email: "",
            fullname: "",
        }
    }

    handleSubmit(e:any) {
        e.preventDefault();

        axios({
            method: "POST",
            url:"http://api.stockify.mbyt.de:3002/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
                console.log("Message successfully send.");
                this.resetForm()
            } else if(response.data.status === 'fail') {
                console.log("Sending Message failed.");
            }
        })
    }

    resetForm(){
        this.setState({fullname: '', email: '', message: ''})
    }

    render() {
        return (
            <div className={"normal_div"}>
                <div style={{width:"100%"}}>
                    <PrimaryHeading style={{textAlign:"center"}} text={"Get in touch"}/>
                    <SecondaryHeading style={{textAlign:"center"}} text={"Contact Form"}/>
                    <div className={"contact-form"}>
                        <form method={"post"} id={"contactform"} onSubmit={this.handleSubmit.bind(this)}>
                            <div className={"contact-form-box"}>

                                    <div className={"form-row grid-container-contact"} >
                                        <div style={{width:"100%", paddingTop:"1rem"}}>
                                            <label className={"label-text"} htmlFor="name-input">Your Name</label><br/>
                                            <input className={"input-field"} id={"name-input"} name={"name-input"} placeholder={"Your full Name"} type="text" value={this.state.fullname} onChange={this.onNameChange.bind(this)}/>
                                        </div>

                                        <div style={{width:"100%", paddingTop:"1rem"}}>
                                            <label className={"label-text"} htmlFor="mail">Your Mail</label><br/>
                                            <input className={"input-field"} id={"mail"} name={"mail"} placeholder={"Your Mail"} type="mail" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                        </div>


                                </div>

                                <div className={"form-row"} style={{width:"100%"}}>
                                <label className={"label-text"} htmlFor="message">Your Message</label><br/>
                                <textarea className={"input-field"} id={"message"} name={"message"} placeholder={"Your Questions.."} value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
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

    onNameChange(event:any) {
        this.setState({fullname: event.target.value})
    }

    onEmailChange(event:any) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event:any) {
        this.setState({message: event.target.value})
    }


};

export default ContactForm;

