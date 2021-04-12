import React, {Component} from 'react';
import '../../Components/Navbar/navbar';
import HeroSec from "../../Components/HeroSec/herosec";
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import TestimonialSection from "../../Sections/Testimonials/testimonials";
import GetStarted from "../../Sections/getstarted/getstarted";
import Features from "../../Sections/features/features";
import Footer from "../../Sections/footer/footer";
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";
import FAQ from "../../Sections/FAQ/FAQ";
import Header from "../../Components/Header/Header";
import Cookie from "../../Components/CookieConsent/CookieConsent";
import ReactGA from "react-ga";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class Landing extends Component<AppProps, AppState> {

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
                <Cookie/>
                <div className={"navbar-margin"}>
                    <HeroSec/>
                    <div id={"features-section"} className={"section odd-sec"}>
                            <div>
                                <div>
                                    <div>
                                        <PrimaryHeading style={{textAlign:"center"}} text={"The Features"}/>
                                        <SecondaryHeading style={{textAlign:"center"}} text={"The All-in-One Tool to manage your Portfolio"}/>
                                    </div>

                                </div>

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
                        </div>


                    <GetStarted/>
                    <TestimonialSection/>

                    <FAQ/>
                    <Footer/>
                </div>

            </div>
        )
    }

}

export default Landing;
