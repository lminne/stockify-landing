import React, {Component} from "react";
import "./getstarteditem.css"
import {ReactComponent as DownloadIcon} from "../../assets/img/download-icon.svg";


interface AppState {

}

interface AppProps {
    headingText: string,
    subheadingText: string,

}

class GetStartedItem extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"get-started-item"}>
                <div className={"inner-get-started-item"}>
                    <div className={"todo-icon"}>
                        <DownloadIcon/>
                    </div>
                    <div className={"step-heading"}>
                        {this.props.headingText}
                    </div>
                    <div className={"step-subheading"}>
                        {this.props.subheadingText}
                    </div>
                </div>
            </div>
        );
    }

}



export default GetStartedItem;

