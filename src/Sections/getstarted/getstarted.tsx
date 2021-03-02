import React, {Component} from "react";
import "./getstarted.css"
import "../../Components/HeroSec/herosec.css"
import GetStartedItem from "../../Components/getstarteditem/getstarteditem";
import {ReactComponent as DownloadIcon} from "../../assets/img/download-icon.svg";
import {ReactComponent as AddPortfolioIcon} from "../../assets/img/add-icon.svg";
import {ReactComponent as EnjoyIcon} from "../../assets/img/enjoy-icon.svg";



interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class GetStarted extends Component<AppProps, AppState> {
    render() {
        return (
            <div id={"get-started-section"} className={"section"}>
                <div style={{width:"100%"}}>
                    <h1 style={{textAlign:"center"}} className={"h1-primary"}>Get started</h1>
                    <h3 style={{textAlign:"center"}} className={"h3-secondary"}>Setting up Stockify</h3>

                <div className={"get-started-container"}>
                    <GetStartedItem headingText={"Download"} subheadingText={"Get Stockify App from your App Store"} IconComp={<DownloadIcon/>}/>
                    <GetStartedItem headingText={"Add Portfolio"} subheadingText={"Add all your holdings to your portfolio"} IconComp={<AddPortfolioIcon/>}/>
                    <GetStartedItem headingText={"Enjoy"} subheadingText={"Your whole portfolio in one place"} IconComp={<EnjoyIcon/>}/>

                </div>
                </div>
            </div>
        );
    }

}



export default GetStarted;

