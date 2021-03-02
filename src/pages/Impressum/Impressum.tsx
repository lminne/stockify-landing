import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Footer from "../../Sections/footer/footer";
import "./Impressum.css"
import Contact from "../../Sections/Contact/Contact";
import Legal from "../../Sections/Legal/Legal";

interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class Impressum extends Component<AppProps, AppState> {

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

                <Contact/>
                <Legal/>
                <Footer/>
            </div>
        )
    }

}

export default Impressum;
