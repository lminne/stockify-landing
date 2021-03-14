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
import PrivacyOld from "../../Sections/PrivacyOld/PrivacyOld";
import PrivacyWeb from "../../Sections/PrivacyWeb/PrivacyWeb";
import PrivacyApp from "../../Sections/PrivacyApp/PrivacyApp";

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

                            <PrivacyWeb/>
                            <PrivacyApp/>
                            </div>
                    </div>
                    <Footer/>
                </div>

            </div>
        )
    }

}

export default Privacy;
