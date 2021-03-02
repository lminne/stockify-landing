import React, {Component} from "react";
import "./ContactItem.css"


interface AppState {

}

interface AppProps {
    headingText: string,
    subheadingText: string,
    IconComp: any,
    mail: boolean,

}

class ContactItem extends Component<AppProps, AppState> {
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
                    {this.props.mail?<div className={"step-subheading"}>
                        <a className={"link-text"} href={"mailto:"+this.props.subheadingText}>{this.props.subheadingText}</a>
                    </div>: <div className={"step-subheading"}>
                        {this.props.subheadingText}
                    </div>}
                </div>
            </div>
        );
    }

};



export default ContactItem;

