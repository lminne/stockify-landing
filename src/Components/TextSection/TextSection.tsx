import React, {Component} from "react";
import "./TextSection.css"

import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";



interface AppState {

}

interface AppProps {
    SecHeading: string,
    SecText?: string,
    innerItem?: any,
}

class TextSection extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"textSection"}>

                <SecondaryHeading style={{textAlign:"start",marginBottom:"1rem"}} text={this.props.SecHeading}/>
                <div className={"TextInSec"}>
                    {this.props.SecText}
                </div>
                <div>{this.props.innerItem}</div>

            </div>


        );
    }
};

export default TextSection;
