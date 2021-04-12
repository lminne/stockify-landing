import React, {Component} from 'react';
import './TypingHeading.css'

interface AppState {
}

interface AppProps {
    texts: string,
    style?:object
}

class TypingHeading extends Component<AppProps, AppState> {

startTyping = () => {
    let TxtType:any = function(this: any, el:any, toRotate:any, period:any) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };
    this.collectData(TxtType)
}

collectData = (TxtType:any) => {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('datatype');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }

        };

    componentDidMount() {
        this.startTyping();
    }


    render() {

        return (
            <div className={"typing-heading-container"}>
                <h3 style={this.props.style} className={"h1-primary"}>
                    <a className={"typewrite"} data-period={"2000"}
                       datatype={this.props.texts}>
                        <span className="wrap"/>
                    </a>
                </h3>
            </div>


        );
    }
}
export default TypingHeading;