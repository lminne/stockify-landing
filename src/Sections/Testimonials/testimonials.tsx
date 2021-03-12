import React, {Component} from "react";
import "./testimonials.css"
import "../../Components/HeroSec/herosec.css"
import TestimonialCard from "../../Components/testimonial/testimonial";
import FaceOne from "../../assets/img/face1.webp"
import FaceTwo from "../../assets/img/face2.webp"
import FaceThree from "../../assets/img/face3.webp"
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";


interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class TestimonialSection extends Component<AppProps, AppState> {
    render() {
        return (
            <div  id={"testimonial-section"} className={"section odd-sec"}>
                    <div>

                        <PrimaryHeading style={{textAlign:"center"}} text={"Testimonials"}/>
                        <SecondaryHeading style={{textAlign:"center"}} text={"What do our users think?"}/>

                        <div className={"testimonial-container"}>
                            <TestimonialCard testimonialUserImg={FaceOne} testimonialText={"Finally an app that allows me to track my portfolio while giving me in-depth insights! Huge fan!"} testimonialUserName={"Leonardo"} testimonialUserProfession={"Software Engineer"}/>
                            <TestimonialCard testimonialUserImg={FaceTwo} testimonialText={"As a beginner, Stockify helps me to understand the composition of my portfolio. Based on this, I can choose new investments."} testimonialUserName={"Caro"} testimonialUserProfession={"Student"}/>
                            <TestimonialCard testimonialUserImg={FaceThree} testimonialText={"I particularly like the correlation and variance analysis. This enables me to understand my portfolio and diversify it even further."} testimonialUserName={"Alex"} testimonialUserProfession={"Account Manager"}/>

                        </div>
                    </div>










            </div>
        );
    }

}



export default TestimonialSection;

