import React, {Component} from 'react';
import './App.css';
import './Components/Navbar/navbar';
import Navbar from "./Components/Navbar/navbar";
import HeroSec from "./Components/HeroSec/herosec";
import Header from "./Components/Header/Header";
import {IGeneral} from "./stores/generals";
import {inject, observer} from "mobx-react";

interface AppState {

}

interface AppProps {
    general?: IGeneral,
}

@inject('general')
@observer
class App extends Component<AppProps, AppState> {
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
        return(

            <div>
                <Header/>
                <HeroSec/>
            </div>
        )
    }

}

export default App;
