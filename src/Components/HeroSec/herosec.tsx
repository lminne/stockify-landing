import React, {Component} from "react";
import './herosec.css'
import HeroImg from "../../assets/img/Hero-Mockup.png";
import Button from "../Button/button";
import {ReactComponent as ArrowDown} from "../../assets/img/Down-Arrow.svg";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../SecondaryHeading/SecondaryHeading";

interface AppState {

}

interface AppProps {

}



class HeroSec extends Component<AppProps, AppState> {
    render() {
        return (
            <div id={"hero-section"}>
                <div className={"section even-sec"}>
                    <div className={"container"}>

                        <div className={"hero-text"}>
                            <div className={"heading-holder"}>
                                <PrimaryHeading text={"Understand your Portfolio"}/>
                                <SecondaryHeading text={"Why ETF Portfolios are not necessarily diversified"}/>
                                <div className={"button-group-desktop"}>
                                    <div className={"btn-holder-desktop"}>
                                        <Button text={"Download now"}/>

                                    </div>
                                    <div className={"btn-holder-desktop"}>
                                        <Button text={"Learn more"} style={{backgroundColor:"transparent", border:"1px solid #34CD9E", color:"#34CD9E"}}/>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={"hero-item"}>
                            <img src={HeroImg} className={"hero-img"}/>

                        </div>
                        <div className={"cta-container"}>
                            <div className={"button-group-mobile"}>
                                <div className={"btn-holder-mobile"}>
                                    <Button text={"Download now"}/>

                                </div>
                                <div className={"btn-holder-mobile"}>
                                    <Button text={"Learn more"} style={{backgroundColor:"transparent", border:"1px solid #34CD9E", color:"#34CD9E"}}/>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className={"section"}>
                    <div className={"normal_div"} style={{paddingTop: "0.5rem", paddingBottom:"1rem"}}>

                        <a href="#get-started-section"><ArrowDown/></a>
                    </div>
                </div>

            </div>


        );
    }

}



export default HeroSec;

