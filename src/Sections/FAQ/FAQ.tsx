import React, {Component} from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import "./FAQ.css"
import PrimaryHeading from "../../Components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../Components/SecondaryHeading/SecondaryHeading";


interface AppState {

}

interface AppProps {
}

class FAQ extends Component<AppProps, AppState> {
    render() {
        return (
            <div style={{paddingBottom:"20rem"}} id={"faq-section"} className={"even-sec section"}>
                    <div style={{width:"100%"}}>
                        <PrimaryHeading style={{textAlign:"center"}} text={"FAQ"}/>
                        <SecondaryHeading style={{textAlign:"center"}} text={"Everything you need to know"}/>
                        <div className={"normal_div"}>
                            <Accordion style={{width:"90%", paddingTop:"1.5rem"}} allowZeroExpanded={true}>
                                <AccordionItem>
                                    <div className={"normal_div"}>
                                        <AccordionItemHeading >
                                            <AccordionItemButton>
                                                Where do I get Stockify?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>

                                    <AccordionItemPanel>
                                        <p className={"answer-para"}>
                                            Get your beta access <a className={"link-text"} href="https://testflight.apple.com/join/58vkeNU9">here</a>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <div className={"normal_div"}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What about my personal data?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>

                                    <AccordionItemPanel>
                                        <p className={"answer-para"}>
                                            Data Privacy is extremely important to us! Without your consens no personal data is collected or even shared with third parties. Additionally, all data which is consensually collected is stored anonymised. Read more in our <a className={"link-text"}
                                            href="/impressum">Privacy Policy</a>.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <div className={"normal_div"}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I save my Portfolio?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>

                                    <AccordionItemPanel>
                                        <p className={"answer-para"}>
                                            Currently we do not support saving your portfolio. However, we are already working on implementing portfolio synchronisation.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <div className={"normal_div"}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I add single stocks?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>

                                    <AccordionItemPanel>
                                        <p className={"answer-para"}>
                                            Yes, we do also support over 40k single stocks!
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <div className={"normal_div"}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can users request features?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>

                                    <AccordionItemPanel>
                                        <p className={"answer-para"}>
                                            If you have serious features requests that would make your life easier - <a className={"link-text"}
                                            href="/contact">get in touch</a> with us!
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                        </div>

                    </div>



            </div>


        )
    }

};
export default FAQ;

