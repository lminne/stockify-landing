import React, {Component} from "react";
import "./featureitem.css"


interface AppState {

}

interface AppProps {
    FeatureHeading: string,
    FeatureSubheading: string,

}

class Featureitem extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"featureItem"}>
                <div className={"innerFeatureItem"}>
                    <div className={"featureHeading"}>
                        {this.props.FeatureHeading}
                    </div>
                    <div className={"featureSubheading"}>
                        {this.props.FeatureSubheading}
                    </div>
                </div>


            </div>
        );
    }

}



export default Featureitem;

