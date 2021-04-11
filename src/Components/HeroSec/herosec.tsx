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

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && mail.indexOf('@@') == -1 && lastDotPos > 2 && (mail.length - lastDotPos) > 2)) {
                    formIsValid = false;
                    errorMessage = "Email is not valid.";
                }
            }
            if (errorMessage!= "") {
                mailinput.style.border = "4px lightcoral solid";
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
                <div className={"section even-sec"}>
                    <div className={"container"}>
                        <div className={"hero-text animate__animated animate__fadeInLeft"}>
                            <div className={"heading-holder"}>
                                <TypingHeading texts={'["Understand your Portfolio", "Identify Risk", "Balance your Portfolio"]'}/>
                                <SecondaryHeading text={"Why ETF Portfolios are not necessarily diversified"}/>
                                <form autoComplete={"off"} name={"mc-embedded-subscribe-form"} onSubmit= {this.formSubmit.bind(this)} action={"https://gmail.us1.list-manage.com/subscribe/post?u=2f90230766ba0453532af808b&amp;id=a52339cb71"} method={"post"} className={"button-group-desktop"} noValidate={true}>
                                    <div>
                                        <div>
                                            <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>
                                                <div className={"mailform"}>
                                                    <input name={"EMAIL"} className={"mailinput"} aria-label={"betamailinput"} placeholder={"Your Mail"} id={"mailinput"} type="email" value={this.state.mail} onChange={this.handleChange.bind(this)} onInvalid={this.handleValidation} required={true}/>
                                                </div>

                                            </div>
                                            <div className={"error"}>
                                                {this.state.error}
                                            </div>
                                        </div>

                                        <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>
                                            <div className={"btn-holder-desktop"}>
                                                <button id={"btnmailsubmit"} type={"submit"} className={"get-started"}>Get Beta Access</button>
                                            </div>
                                            <div className={"btn-holder-desktop"} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <div className={"get-started"} style={{display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#f9f9f9", borderRadius:"50px", border:"1px solid #34CD9E"}}>
                                                    <a style={{textDecoration:"none", color:"#34CD9E", width:"100%",height:"100%", display:"flex",justifyContent:"center",alignItems:"center"}} href="/#features-section">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                            <div className={"hero-item animate__animated animate__fadeInRight"}>
                                <img src={HeroImg} className={"hero-img"}/>

                            </div>

                        <div className={"cta-container animate__animated animate__fadeInUp"}>
                            <form autoComplete={"off"} name={"mc-embedded-subscribe-form"} onSubmit = {this.formSubmit.bind(this)} action={"https://gmail.us1.list-manage.com/subscribe/post?u=2f90230766ba0453532af808b&amp;id=a52339cb71"} method={"post"} noValidate={true}>
                                <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>
                                    <div className={"mailform"}>
                                        <input name={"EMAIL"} className={"mailinput"} aria-label={"betamailinput"} placeholder={"Your Mail"} id={"mailinputMobile"} type="email" required={true}/>
                                    </div>
                                </div>
                                <div className={"error"}>
                                    {this.state.error}
                                </div>
                                <div>
                                    <div className={"button-group-mobile"}>
                                        <div className={"btn-holder-mobile"}>
                                            <button type={"submit"} className={"get-started"}>Get Beta Access</button>
                                        </div>
                                        <div className={"btn-holder-mobile"}>
                                            <div className={"get-started"} style={{display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#f9f9f9", borderRadius:"50px", border:"1px solid #34CD9E"}}>
                                                <a style={{textDecoration:"none", color:"#34CD9E"}} href="/#features-section">Learn more</a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
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

