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

function cookieAccept(){
    document.getElementsByTagName("head")[0].innerHTML += "<!-- Global site tag (gtag.js) - Google Analytics -->\n" +
        "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-7ZNWVL32WV\"></script>\n" +
        "<script>\n" +
        "  window.dataLayer = window.dataLayer || [];\n" +
        "  function gtag(){dataLayer.push(arguments);}\n" +
        "  gtag('js', new Date());\n" +
        "\n" +
        "  gtag('config', 'G-7ZNWVL32WV');\n" +
        "</script>";

};





class Cookie extends Component<AppProps, AppState> {

    render() {
        return (
             <CookieConsent
                 onAccept={cookieAccept}

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

