import React, {Component} from "react";
import "./features.css"
import Featureitem from "../../Components/featureitem/featureitem";
import PerfHero from "../../assets/img/PerformanceMockuplarge.png"
import CountryHero from "../../assets/img/CountryMockuplarge.png"

interface AppState {

}

interface AppProps {
    first_img?: boolean,
    fheading_1: string,
    fheading_2: string,
    fheading_3: string,
    fsubheading_1: string,
    fsubheading_2: string,
    fsubheading_3: string,
    picture_first: boolean,

}



class Features extends Component<AppProps, AppState> {
    constructor(props:AppProps) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    };

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        let pic_first = this.props.picture_first;
        // @ts-ignore
        const {windowWidth} = this.state

        if (windowWidth <= 1200) {

            pic_first = true
        }
        return (
            <div className={"section"}>

                <div className={"featureContainer"}>
                    {pic_first?<div style={{width:"100%"}} className={"perf-hero-col"}>
                        {this.props.first_img? <img className={"perfHero"} src={PerfHero} alt="PerfHero"/> :<img className={"perfHero"} src={CountryHero} alt="CountryHero"/>}
                    </div>: <div className={"perf-hero-col-last"}>
                        {this.props.first_img? <img className={"perfHero"} src={PerfHero} alt="PerfHero"/> :<img className={"perfHero"} src={CountryHero} alt="CountryHero"/>}
                    </div>}
                    <div className={"featured-descriptions"}>
                        <Featureitem FeatureHeading={this.props.fheading_1} FeatureSubheading={this.props.fsubheading_1}/>
                        <Featureitem FeatureHeading={this.props.fheading_2} FeatureSubheading={this.props.fsubheading_2}/>
                        <Featureitem FeatureHeading={this.props.fheading_3} FeatureSubheading={this.props.fsubheading_3}/>
                    </div>

                </div>

            </div>
        );
    }

}



export default Features;

