import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import Header from "../../Components/Header/Header";

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
                    <div>
                        MOOOOOIN
                    </div>
                    <Footer/>
                </div>

            </div>
        )
    }

}

export default ThankYou;
