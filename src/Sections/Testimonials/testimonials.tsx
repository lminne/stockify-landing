import React, {Component} from "react";
import "./testimonials.css"
import "../../Components/HeroSec/herosec.css"
import TestimonialCard from "../../Components/testimonial/testimonial";
interface AppState {

}

interface AppProps {
    text?: string,
    style?: object,
}

class TestimonialSection extends Component<AppProps, AppState> {
    render() {
        return (
            <div id={"testimonial-section"} className={"section"}>
                <div className={"testimonial-container"}>
                    <TestimonialCard testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Leonardo"} testimonialUserProfession={"Pro Gamer"}/>
                    <TestimonialCard testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Jona"} testimonialUserProfession={"Taubenzüchter"}/>
                    <TestimonialCard testimonialText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} testimonialUserName={"Alex"} testimonialUserProfession={"Account Manager"}/>

                </div>
            </div>
        );
    }

}



export default TestimonialSection;

