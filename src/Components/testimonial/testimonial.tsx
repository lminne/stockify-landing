import React, {Component} from "react";
import "./testimonial.css"
import TestimonialImg from "../../assets/img/img.png";


interface AppState {

}

interface AppProps {
    testimonialText: string,
    testimonialUserName: string,
    testimonialUserProfession: string,
    testimonialUserImg?: any,
}

class TestimonialCard extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"testimonialCard"}>
                <div className={"innerTestimonialCard"}>
                    <div className={"testimonialText"}>

                        {this.props.testimonialText}

                    </div>
                    <div className={"TestimonialFooter"}>
                        <div className={"innerTestimonialFooter"}>
                            <div className={"TestimonialImgCard"}>
                                <img className={"testimonialImg"} src={TestimonialImg} alt=""/>
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
