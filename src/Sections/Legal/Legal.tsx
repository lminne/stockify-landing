import React, {Component} from "react";
import "./Legal.css"
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";
import TextSection from "../../Components/TextSection/TextSection";
import Adress from "../../Components/Adress/adress";


interface AppState {

}

interface AppProps {

}

class Legal extends Component<AppProps, AppState> {
    render() {
        return (
            <div className={"section"}>

                <div style={{width:"100%"}}>
                    <PrimaryHeading style={{textAlign:"center"}} text={"Imprint"}/>
                    <SecondaryHeading style={{textAlign:"center", paddingBottom:"1rem"}} text={"The necessary evil"}/>
                <div className={"grid-adress-infos"}>
                    <TextSection SecHeading={"Adress"} innerItem={<Adress nameInfo={"MBYT UG (haftungsbeschränkt)"} streetInfo={"Jahnstraße 70"} townInfo={"56179 Vallendar"} countryInfo={"Germany"}/>}/>
                    <TextSection SecHeading={"Company Information"} innerItem={<Adress nameInfo={"Lukas Minnebeck"} streetInfo={"Commercial Register HBR ..."} townInfo={"Vallendar, Germany"}/>}/>
                </div>

                <TextSection SecHeading={"AGB"} SecText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                <TextSection SecHeading={"Privacy"} SecText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                </div>
                </div>


        );
    }

}


export default Legal;