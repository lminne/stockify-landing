import React, {Component} from "react";
import "./testimonial.css"


interface AppState {

}

interface AppProps {
    testimonialText: string,
    testimonialUserName: string,
    testimonialUserProfession: string,
    testimonialUserImg: any,
    style?:object,
}

class TestimonialCard extends Component<AppProps, AppState> {
    render() {
        return (
            <div style={this.props.style} className={"testimonialCard"}>
                <div className={"innerTestimonialCard"}>
                    <div className={"testimonialText"}>

                        {this.props.testimonialText}

                    </div>
                    <div className={"TestimonialFooter"}>
                        <div className={"innerTestimonialFooter"}>
                            <div className={"TestimonialImgCard"}>
                                <img className={"testimonialImg"} src={this.props.testimonialUserImg} alt="Testimonial Image"/>
                            </div>
                            <div className={"TestimonialInfoBox"}>
                                <div className={"TestimonialUserName"}>
                                    {this.props.testimonialUserName}
                                </div>
                                <div className={"TestimonialUserProfession"}>
                                    {this.props.testimonialUserProfession}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }

}



export default TestimonialCard;

