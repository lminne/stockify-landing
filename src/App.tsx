import React, {Component} from 'react';
import './App.css';
import './Components/Navbar/navbar';
import {IGeneral} from "./stores/generals";
import {inject, observer} from "mobx-react";
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import Landing from "./pages/Landing/Landing"
import Impressum from "./pages/Impressum/Impressum";
import ContactPage from "./pages/ContactPage/ContactPage";
import Privacy from "./pages/Privacy/Privacy";
import ThankYou from "./pages/ThankYou/ThankYou";



interface AppState {

}

interface AppProps {
    general?: IGeneral
}

@inject('general')
@observer
class App extends Component<AppProps, AppState> {

    componentDidMount(){
        this.updateHeight();
        this.updateWidth();
        window.addEventListener("resize", ()=>{this.props.general?.setWidth(window.innerWidth)});
    }

    updateHeight = () => {
        this.props.general?.setHeight(window.innerHeight);
    }

    updateWidth = () => {
        this.props.general?.setWidth(window.innerWidth);
    }

    render() {


        return (
            <HashRouter>
                <Switch>
                    <Route path={"/"} exact component={Landing}/>
                    <Route path={"/impressum"} exact component={Impressum}/>
                    <Route path={"/contact"} exact component={ContactPage}/>
                    <Route path={"/privacy"} exact component={Privacy}/>
                    <Route path={"/thankyou"} exact component={ThankYou}/>
                    <Redirect to={"/not found"}/>

                </Switch>
            </HashRouter>

        )
    }

}

export default App;
