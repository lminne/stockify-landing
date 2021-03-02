import React, {Component} from 'react';
import './SecondaryHeading.css'

interface AppState {
}

interface AppProps {
    text:string,
    style?: object,

}

class SecondaryHeading extends Component<AppProps, AppState> {

    render() {

        return (
            <h3 style={this.props.style} className={"h3-secondary"}>
                {this.props.text}
            </h3>
        );
    }
}
export default SecondaryHeading;