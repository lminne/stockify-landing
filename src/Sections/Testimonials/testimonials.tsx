import React, {Component} from "react";
import "./testimonials.css"
import "../../Components/HeroSec/herosec.css"
import TestimonialCard from "../../Components/testimonial/testimonial";
import FaceOne from "../../assets/img/face1.png"
import FaceTwo from "../../assets/img/face2.png"
import FaceThree from "../../assets/img/face3.png"


interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class TestimonialSection extends Component<AppProps, AppState> {
    render() {
        return (
            <div id={"testimonial-section"} className={"section odd-sec"}>
                <div className={"testimonial-container"}>
                    <TestimonialCard style={{paddingTop:0}} testimonialUserImg={FaceOne} testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Leonardo"} testimonialUserProfession={"Pro Gamer"}/>
                    <TestimonialCard testimonialUserImg={FaceTwo} testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Jona"} testimonialUserProfession={"Taubenzüchter"}/>
                    <TestimonialCard testimonialUserImg={FaceThree} testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Alex"} testimonialUserProfession={"Account Manager"}/>

                </div>
            </div>
        );
    }

}



export default TestimonialSection;

