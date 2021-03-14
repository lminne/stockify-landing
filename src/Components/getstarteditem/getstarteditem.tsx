import React, {Component} from "react";
import "./getstarteditem.css"


interface AppState {

}

interface AppProps {
    headingText: string,
    subheadingText: string,
    IconComp: any,

}

class GetStartedItem extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"get-started-item"}>

                <div className={"inner-get-started-item"}>
                    <div className={"todo-icon"}>
                        {this.props.IconComp}
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

