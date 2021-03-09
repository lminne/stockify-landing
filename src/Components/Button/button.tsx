import React, {Component} from "react";
import "./button.css"

interface AppState {

}

interface AppProps {
    onClickFunction?: any,
    text?: string,
    style?: object,
    type?: string,
}

class Button extends Component<AppProps, AppState> {
    render() {
        return (
            <button style={this.props.style} onClick={this.props.onClickFunction} className={"get-started"}>
                {this.props.text}
            </button>
        );
    }

}



export default Button;

