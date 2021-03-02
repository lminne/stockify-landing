import React, {Component} from "react";
import "./adress.css"

interface AppState {

}

interface AppProps {
    nameInfo?: string,
    streetInfo?:string,
    townInfo?:string,
    countryInfo?:string,
}

class Adress extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"grid-container-adress"}>
                <div>
                    <div>
                        {this.props.nameInfo}
                    </div>
                    <div>
                        {this.props.streetInfo}
                    </div>
                    <div>
                        {this.props.townInfo}
                    </div>
                    <div>
                        {this.props.countryInfo}
                    </div>
                </div>



            </div>


        );
    }
};

export default Adress;