import React, {Component} from "react";
import './herosec.css'
import HeroImg from "../../assets/img/Hero-Mockup.webp";
import Button from "../Button/button";
import {ReactComponent as ArrowDown} from "../../assets/img/Down-Arrow.svg";
import PrimaryHeading from "../PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../SecondaryHeading/SecondaryHeading";
import {IGeneral} from "../../stores/generals";
import TypingHeading from "../TypingHeading/TypingHeading";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import {ReactComponent as AppleDownload} from "../../assets/img/AppleDownload.svg";


interface AppState {
    mail: string,
    error: string,
    width: number,
    height: number
}

interface AppProps {
    general?: IGeneral,
}

class HeroSec extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            error: "",
            mail: "",
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    scrollHandler = () => {
        const header = document.getElementById("header");
        if (header) {
            const sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                this.props.general?.setSticky(true);
            } else {
                this.props.general?.setSticky(false)
            }
        }
    };

    handleValidation = () => {
        let mailinput;
        if (this.state.width <= 992) {
            mailinput = document.getElementById("mailinputMobile")

        }
        else {
            mailinput = document.getElementById("mailinput")
        }
        if (mailinput) {
            let mail = this.state.mail;
            let errorMessage = "";
            let formIsValid = true;

            //Email
            if(!mail){
                formIsValid = false;
                errorMessage = "Email cannot be empty.";
            }

            if(typeof mail !== "undefined"){
                let lastAtPos = mail.lastIndexOf('@');
                let lastDotPos = mail.lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && mail.indexOf('@@') === -1 && lastDotPos > 2 && (mail.length - lastDotPos) > 2)) {
                    formIsValid = false;
                    errorMessage = "Email is not valid.";
                }
            }
            if (!formIsValid) {
                mailinput.style.border = "4px lightcoral solid";

            }
            else {
                mailinput.style.border = "none";
            }
            this.setState({
                error: errorMessage
            });
            return formIsValid;

        }
    }

    formSubmit = (e:any) => {
        if (this.handleValidation()) {
            console.log("Form submitted.");
        } else {
            console.log("Form has errors.");

            e.preventDefault();
        }

    }


    handleChange(e:any){

        this.setState({
            mail: e.target.value
        });
    }



    render() {
        return (
            <div id={"hero-section"}>
                <div>
                    <div className={"section even-sec"} style={{paddingTop:0}}>
                        <div>
                            <div className={"container"}>
                                <div className={"hero-text animate__animated animate__fadeInLeft"}>
                                    <div className={"heading-holder"}>
                                        <TypingHeading texts={'["Understand your Portfolio", "Identify Risk", "Balance your Portfolio"]'}/>
                                        <SecondaryHeading text={"Why ETF Portfolios are not necessarily diversified"}/>



                                                <div className={"appleDownloadDesktop"} style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>
                                                    <div className={"btn-holder-desktop"}>
                                                        <a href="https://testflight.apple.com/join/58vkeNU9">
                                                            <AppleDownload style={{width:"12rem",height:"4rem"}}/>
                                                        </a>
                                                    </div>
                                                    <div className={"btn-holder-desktop"} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                                                    </div>
                                                </div>


                                    </div>
                                </div>

                                <div className={"hero-item animate__animated animate__fadeInRight"}>
                                    <img src={HeroImg} className={"hero-img"}/>

                                </div>

                                <div className={"cta-container animate__animated animate__fadeInUp"}>

                                        <div className={"appleDownloadMobile"}>
                                            <div className={"button-group-mobile"}>
                                                <div className={"btn-holder-mobile"}>
                                                    <a href="https://testflight.apple.com/join/58vkeNU9">
                                                        <AppleDownload style={{width:"10rem",height:"4rem"}}/>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                </div>

                            </div>
                            <div className={"normal_div"} style={{paddingTop: "1.5rem", paddingBottom:"1rem"}}>

                                <a href="#features-section"><ArrowDown/></a>
                            </div>
                        </div>

                    </div>



                </div>

            </div>


        );
    }

}



export default HeroSec;

