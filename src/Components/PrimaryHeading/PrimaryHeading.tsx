import React, {Component} from 'react';
import './PrimaryHeading.css'

interface AppState {
}

interface AppProps {
    text:string,
    style?:object
}

class Heading extends Component<AppProps, AppState> {

    render() {

        return (
            <h3 style={this.props.style} className={"h1-primary"}>
                {this.props.text}
            </h3>
        );
    }
}
export default Heading;