import React from "react";
import './navbar.css'
import {ReactComponent as StockifyLogo} from '../../assets/img/StockifyLogo.svg';

function Navbar() {
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
                <button className={"get-started"}>
                    Get started
                </button>
            </div>
        </div>
    );
}

export default Navbar;