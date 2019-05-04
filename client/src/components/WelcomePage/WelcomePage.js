import React, {Component} from "react";
import ImageSubmit from '../ImageSubmit/ImageSubmit';
// import PropTypes from 'prop-types';

class WelcomePage extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         welcomeMessage: ""
    //     };
    // }

    render(){
        return(
            <div className="welcomepage">
                Welcome!!!
                <ImageSubmit/>
            </div>
        )
    }
}

export default WelcomePage;