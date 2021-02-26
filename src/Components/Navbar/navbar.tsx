import React, {Component} from "react";
import './navbar.css'
import {ReactComponent as StockifyLogo} from '../../assets/img/StockifyLogo.svg';
import Button from "../Button/button";

interface AppState {

}

interface AppProps {

}

class Navbar extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"navbar-container"}>


                <div>
                    <StockifyLogo className={"StockifyLogo"}/>
                </div>
                <div className={"nav-main"}>
                    <div className={"menu-div"}>
                        <nav className={"navbar-menu"}>
                            <li ><a className={"nav-link-item nav-active"} href="#">Home</a></li>
                            <li ><a className={"nav-link-item"} href="#">Features</a></li>
                            <li ><a className={"nav-link-item"} href="#">About us</a></li>
                            <li ><a className={"nav-link-item"} href="#">Contact</a></li>

                        </nav>
                    </div>


                </div>
                <div>
                    <Button text={"Get started"}/>
                </div>
            </div>

        );
    }

}


export default Navbar;