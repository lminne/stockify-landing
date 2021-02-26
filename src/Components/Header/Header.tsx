import React, {Component} from 'react';
import './Header.css'
import {action, computed, observable} from "mobx";
import {IGeneral} from "../../stores/generals";
import {inject, observer} from "mobx-react";
import Button from "../Button/button";
import Heading from "../Heading/heading";

interface AppState {
    clicked: boolean
}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class Header extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            clicked: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
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
        if (this.props.general?.getWidth <= 1200) { // Mobile Version
            return (
                <div className={classname} id="header">
                    <div id="header_left_content">

                        <div id="header_title" onClick={() => {
                            window.location.href = "/"
                        }}>Pigeon
                        </div>
                    </div>
                    <div className="header_right_content">
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>Services
                        </div>
                        <div id="header_right_menu" onClick={() => {
                            this.onclick()
                        }}>
                            <div className="header_right_menu_top"/>
                            <div className="header_right_menu_mid"/>
                            <div className="header_right_menu_bot"/>
                        </div>
                    </div>
                    <div className="header_menu">
                        <Heading text={"Instagram"} style={{marginTop: "100px"}}/>
                        <Heading text={"Youtube"} style={{marginTop: "0px"}}/>
                        <Heading text={"TikTok"} style={{marginTop: "0px"}}/>
                        <div style={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Heading text={"Pigeon"} style={{padding: 0, margin: 0}}/>
                            <div style={{width: "2px", height: "40px", backgroundColor: "#454065"}}/>
                            <Heading text={"Kontakt"} style={{padding: 0, margin: 0}}/>
                        </div>
                    </div>
                </div>
            );

        } else {
            return <div className={"flex-column-center " + classname}>
                <div style={{width: "min(95%, 1400px)"}} id="header">
                    <div id="header_left_content" style={{paddingLeft: 0}}>

                        <div id="header_title" onClick={() => {
                            window.location.href = "/"
                        }}>Pigeon
                        </div>
                    </div>
                    <div className={"header_right_content"} style={{paddingRight: 0}}>
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>Services
                        </div>
                        <div style={{width: "30px"}}/>
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>Warum Pigeon?
                        </div>
                        <div style={{width: "30px"}}/>
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>Preise
                        </div>
                        <div style={{width: "30px"}}/>
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>Warum Singals?
                        </div>
                        <div style={{width: "30px"}}/>
                        <div id="header_right_content_link" onClick={() => {
                            window.location.href = "/services"
                        }}>FAQ
                        </div>
                        <div style={{width: "30px"}}/>
                        <Button style={buttonStyle} text={"Leg los"} onClickFunction={() => {
                        }}/>
                    </div>
                </div>
            </div>
        }
    }
}

export default Header;