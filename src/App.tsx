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
}


class App extends Component<AppProps, AppState> {


    render() {
        return(

            <div>
                <HeroSec/>
            </div>
        )
    }

}

export default App;
