import React, {Component} from 'react';
import './App.css';
import './Components/Navbar/navbar';
import Navbar from "./Components/Navbar/navbar";
import HeroSec from "./Components/HeroSec/herosec";
import Header from "./Components/Header/Header";
import {IGeneral} from "./stores/generals";
import {inject, observer} from "mobx-react";
import TestimonialSection from "./Sections/Testimonials/testimonials";
import GetStarted from "./Sections/getstarted/getstarted";

interface AppState {

}

interface AppProps {
}


class App extends Component<AppProps, AppState> {


    render() {
        return(

            <div id={"app"}>
                <HeroSec/>
                <TestimonialSection/>
                <GetStarted/>
            </div>
        )
    }

}

export default App;
