import React, {Component} from 'react';
import './heading.css'

interface AppState {
}

interface AppProps {
    text:string,
    style?:object
}

class Heading extends Component<AppProps, AppState> {

    render() {

        return (
            <h3 style={this.props.style} className={"heading"}>
                {this.props.text}
            </h3>
        );
    }
}
export default Heading;