import React, {Component} from "react";
import "./getstarted.css"
import "../../Components/HeroSec/herosec.css"
import GetStartedItem from "../../Components/getstarteditem/getstarteditem";

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
                    <GetStartedItem headingText={"Download"} subheadingText={"Get Stockify App from your App Store"}/>
                    <GetStartedItem headingText={"Add Portfolio"} subheadingText={"Add all your holdings to your portfolio"}/>
                    <GetStartedItem headingText={"Enjoy"} subheadingText={"Your whole portfolio in one place"}/>

                </div>
                </div>
            </div>
        );
    }

}



export default GetStarted;

