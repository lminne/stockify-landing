import React, {Component} from 'react';
import './Header.css'
import {action, computed, observable} from "mobx";
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Button from "../Button/button";
import Heading from "../Heading/heading";
import Scrollspy from "react-scrollspy";

interface AppState {
    clicked: boolean,
    width:number,
    height:number,
}

interface AppProps {
    general?: IGeneral,
}

@inject('general')
@observer
class Header extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            clicked: false,
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

    onclick = () => {
        let top: any = document.querySelector(".header_right_menu_top");
        let mid: any = document.querySelector(".header_right_menu_mid");
        let bot: any = document.querySelector(".header_right_menu_bot");
        let menu: any = document.querySelector(".header_menu");

        if (!this.state.clicked) {
            top.classList.add("header_right_menu_top_click");
            mid.classList.add("header_right_menu_mid_click");
            bot.classList.add("header_right_menu_bot_click");
            menu.classList.add("header_menu_active");

        } else {
            top.classList.remove("header_right_menu_top_click");
            mid.classList.remove("header_right_menu_mid_click");
            bot.classList.remove("header_right_menu_bot_click");
            menu.classList.remove("header_menu_active");
        }

        this.setState({
            clicked: !this.state.clicked
        })


    };

    focusMailInput = () => {
        let mailinput = document.getElementById("mailinput");
        if (mailinput) {
            mailinput.focus()
            mailinput.click()
        }}

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

    render() {
        let classname = "header";
        if (this.props.general?.getSticky) {
            classname = "header sticky"
        }
        const buttonStyle = {
            fontSize: "20px",
            width: "180px",
            height: "45px",
            fontWeight: 400,
        };
        // @ts-ignore
        if (this.state.width <= 1200) { // Mobile Version
            return (
                <div className={classname} id="header">
                    <div id="header_left_content">

                        <div id="header_title" onClick={() => {
                            window.location.href = "/"
                        }}>Stockify
                        </div>
                    </div>
                    <div className="header_right_content">

                        <div id="header_right_menu" onClick={() => {
                            this.onclick()
                        }}>
                            <div className="header_right_menu_top"/>
                            <div className="header_right_menu_mid"/>
                            <div className="header_right_menu_bot"/>
                        </div>
                    </div>
                    <div className="header_menu">
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/#hero-section"><Heading text={"Home"} style={{marginTop: "100px"}}/></a>
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/#features-section"><Heading text={"Features"} style={{marginTop: "0"}}/></a>
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/#get-started-section"><Heading text={"Get started"} style={{marginTop: "0"}}/></a>
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/#testimonial-section" ><Heading text={"Testimonials"} style={{marginTop: "0"}}/></a>
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/#faq-section"><Heading text={"FAQ"} style={{marginTop: "0"}}/></a>
                        <a onClick={() => {this.onclick()}} className={"link-text"} href="/contact"><Heading text={"Contact"} style={{marginTop: 0}}/></a>

                    </div>
                </div>
            );

        } else {
            return <div className={"flex-column-center " + classname}>
                <div id="header">

                    <div id="header_left_content" style={{paddingLeft: "1rem"}}>

                        <div id="header_title" onClick={() => {
                            window.location.href = "/"
                        }}>Stockify
                        </div>
                    </div>
                        <Scrollspy offset={-60} items={["hero-section","features-section","get-started-section","testimonial-section","faq-section", "contactPage"]} currentClassName={"active-nav"} className={"header_right_content"} style={{paddingRight: 0}}>
                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/#hero-section"
                            }}>Home
                            </div>

                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/#features-section"
                            }}>Features
                            </div>
                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/#get-started-section"
                            }}>Get started
                            </div>
                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/#testimonial-section"
                            }}>Testimonials
                            </div>
                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/#faq-section"
                            }}>FAQ
                            </div>

                            <div className={"header_right_content_link"} onClick={() => {
                                window.location.href = "/contact"
                            }}>Contact
                            </div>

                        </Scrollspy>

                    <div style={{paddingRight: "1rem"}}>
                        <Button style={buttonStyle} text={"Get started"} onClickFunction={() => {window.location.href="https://testflight.apple.com/join/58vkeNU9"}}/>
                    </div>
                </div>
            </div>
        }
    }
}

export default Header;