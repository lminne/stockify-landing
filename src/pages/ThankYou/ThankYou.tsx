import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import Header from "../../Components/Header/Header";
import {ReactComponent as MailConfirm} from "../../assets/img/mail-confirmation.svg";
import "./ThankYou.css"
interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class ThankYou extends Component<AppProps, AppState> {

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
                    <div className={"normal_div"}>
                        <div className={"mail-confirm-container"}>
                            <div className={"mail-img-container"}>
                                <div className={"normal_div"}>
                                    <MailConfirm className={"mail-confirm"}/>
                                </div>

                                <div className={"normal_div"}>
                                    <a className={"keep-browsing"} href="/">Confirm Mail</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <Footer/>
                </div>

            </div>
        )
    }

}

export default ThankYou;
