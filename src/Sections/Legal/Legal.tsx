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
                    <TextSection SecHeading={"Company Information"} innerItem={<Adress nameInfo={"Lukas Minnebeck"} streetInfo={"Commercial Register i.G."} townInfo={"Vallendar, Germany"}/>}/>
                </div>

                <TextSection SecHeading={"Liability for content"} SecText={"As a service provider we are responsible according to § 7 Abs.1 TMG for own contents on these sides according to the general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate an illegal activity. Obligations to remove or block the use of information under general law remain unaffected. A liability in this regard, however, is only possible from the date of knowledge of a specific infringement. Upon notification of appropriate violations, we will remove this content immediately."}/>
                <TextSection SecHeading={"Liability for links"} SecText={"Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we can not assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of an infringement. Upon notification of violations, we will remove such links immediately."}/>
                <TextSection SecHeading={"Copyright"} SecText={"The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are for private, non-commercial use only. As far as the contents on this side were not created by the operator, the copyrights of third parties are considered. In particular contents of third parties are marked as such. If you should still be aware of a copyright infringement, we ask for a note. Upon notification of violations, we will remove such content immediately."}/>
                </div>
                </div>


        );
    }

}


export default Legal;