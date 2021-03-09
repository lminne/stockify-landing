import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import "./ContactPage.css"
import Contact from "../../../src/Sections/Contact/Contact"
import ContactForm from "../../Sections/ContactForm/ContactForm";
import Header from "../../Components/Header/Header";

interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class ContactPage extends Component<AppProps, AppState> {

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
            <div style={{width:"100%"}}>
                <div className={"normal_div"}>
                    <Header/>
                </div>



                <div id={"contactPage"}>
                    <div className={"contact-page-holder navbar-margin"}>
                        <Contact/>
                        <ContactForm/>
                        <Footer/>
                    </div>
                </div>
            </div>

        )
    }

}

export default ContactPage;
