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
import Features from "./Sections/features/features";
import Featureitem from "./Components/featureitem/featureitem";
import Footer from "./Sections/footer/footer";

interface AppState {

}

interface AppProps {
}


class App extends Component<AppProps, AppState> {


    render() {
        return (

            <div id={"app"}>
                <HeroSec/>
                <TestimonialSection/>
                <GetStarted/>
                <div id={"features-section"}>
                    <h1 style={{textAlign:"center"}} className={"h1-primary"}>The Features</h1>
                    <h3 style={{textAlign:"center"}} className={"h3-secondary"}>The <span style={{fontWeight:1000}}>All-in-One Tool</span> to manage your Portfolio</h3>
                    <Features fheading_1={"Portfolio Performance"} fheading_2={"Diversification"}
                              fheading_3={"Portfolio Measures"}
                              fsubheading_1={"Track the performance of all your holdings in one place"}
                              fsubheading_2={"How well is your portfolio diversified among different dimensions"}
                              fsubheading_3={"Access overall portfolio correlation and variance"} first_img={true} picture_first={true}/>
                    <Features fheading_1={"Quantitative Analysis"} fheading_2={"Portfolio creation"}
                              fheading_3={"Buy and Sell"}
                              fsubheading_1={"Get relevant quantitative measurements for your portfolio"}
                              fsubheading_2={"Build fantasy portfolio and compare their performance"}
                              fsubheading_3={"Sell positions and keep track of your realized gains"} first_img={false} picture_first={false}/>
                </div>

            <Footer/>
            </div>
        )
    }

}

export default App;
