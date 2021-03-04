import React, {Component} from "react";
import "./footer.css"
import {ReactComponent as StockifyLogo} from "../../assets/img/StockifyLogo.svg";
import {ReactComponent as GithubIcon} from "../../assets/img/github.svg";
import {ReactComponent as InstaIcon} from "../../assets/img/instagram.svg";
import {ReactComponent as RedditIcon} from "../../assets/img/reddit.svg";
import {ReactComponent as LinkedInIcon} from "../../assets/img/linkedin.svg";

interface AppState {

}

interface AppProps {


}



class Footer extends Component<AppProps, AppState> {
    constructor(props:AppProps) {
        super(props);
        this.state = {
        };
    };



    render() {
        return (
            <div id={"footer-section"} style={{paddingTop:"0", marginTop:"4rem"}} className={"section footer-sec"}>
                <div className={"footer"}>
                    <div className={"footer-item first-footer-item"}>
                        <div>
                            <div className={"company-name"}>Stockify</div>
                            <div>
                                <div className={"contact-button"}>
                                    <a style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}} className={"link-text"} href="/contact">Contact us</a>
                                </div>
                            </div>
                            <div>
                                <div className={"contact-button"}>
                                    <a style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}} className={"link-text"} href="/impressum">The boring stuff</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={"footer-item"}>
                        <div className={"footer-page-overview"}>
                            <div className={"page-overview-item"}>
                                <a className={"footer-ref-link"} href="/#hero-section">Home</a></div>
                            <div className={"page-overview-item"}>
                                <a className={"footer-ref-link"} href="/#get-started-section">Get started</a></div>
                            <div className={"page-overview-item"}>
                                <a className={"footer-ref-link"} href="/#features-section">Features</a></div>
                            <div className={"page-overview-item"}>
                                <a className={"footer-ref-link"} href="/#testimonial-section">Testimonials</a></div>
                            <div className={"page-overview-item"}>
                                <a className={"footer-ref-link"} href="/#faq-section">FAQ</a></div>




                        </div>
                    </div>
                    <div className={"footer-item"}>
                        <div className={"contact-and-social"}>
                            <div className={"social-icon-holder"}>
                                <a href="https://www.instagram.com/stockify.app/"><InstaIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href="https://www.linkedin.com/in/lukas-minnebeck/"><LinkedInIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href=""><RedditIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href="https://github.com/manminne/"><GithubIcon className={"social-icon"}/></a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }

}



export default Footer;

