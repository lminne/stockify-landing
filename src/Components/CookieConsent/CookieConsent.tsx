import React, {Component} from "react";
import CookieConsent, {Cookies} from "react-cookie-consent";
import ReactGA from "react-ga";

import "./CookieConsent.css"

interface AppState {

}

interface AppProps {

}
let bannerstyle = {
    backgroundColor: "#3F414E"
}
let acceptButton = {
    padding:"1rem",
    fontFamily: "StockifySecondaryBold, sans sarif",
    borderRadius: "12px",
    color: "#F9F9F9",
    backgroundColor: "#34CD9E",
    outline: "none",
    minWidth:"150px"
}
let declineButton = {
    padding:"1rem",
    fontFamily: "StockifySecondaryBold, sans sarif",
    borderRadius: "12px",
    color: "#F9F9F9",
    outline: "none",
    backgroundColor: "#aeaeae",
    minWidth:"150px"
}

class Cookie extends Component<AppProps, AppState> {

    render() {
        return (
             <CookieConsent
                 onAccept={() => {
                     ReactGA.initialize('G-7ZNWVL32WV', {
                         debug:false,
                         gaOptions: {
                             siteSpeedSampleRate:100
                         }
                     });
                     console.log("Cookies accepted.")
                 }}
                 buttonWrapperClasses={"button-wrapper"}
                 onDecline={() => {console.log("Cookies declined.")}}
                 contentClasses={"cookie-text"}
                 declineButtonText={"Decline"}
                 enableDeclineButton={true}
                 flipButtons={true}
                 location={"bottom"}
                 declineButtonStyle={declineButton}
                 buttonText={"Accept"}
                 cookieName={"StockifyCookies"}
                 expires={150}
                 buttonStyle={acceptButton}
                 style={bannerstyle}>
                 This website uses cookies to enhance the user experience.
             </CookieConsent>
        );
    }

}



export default Cookie;

