import React, {Component} from "react";
import './herosec.css'
import HeroImg from "../../assets/img/Hero-Mockup.png";
import Button from "../Button/button";

interface AppState {

}

interface AppProps {

}

class HeroSec extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"section"}>
                <div className={"container"}>

                    <div className={"hero-text"}>
                        <div>
                            <h1 className={"h1-primary"}>Understand your Portfolio</h1>
                            <h3 className={"h3-secondary"}>Why ETF Portfolios are not necessarily diversified</h3>
                            <div className={"button-group"}>
                                <Button text={"Download now"}/>
                                <Button text={"Learn more"} style={{backgroundColor:"transparent", border:"1px solid #34CD9E", color:"#34CD9E"}}/>
                            </div>

                        </div>
                    </div>
                    <div className={"hero-item"}>
                        <img src={HeroImg} className={"hero-img"}/>

                    </div>
                </div>

            </div>

        );
    }

}



export default HeroSec;

