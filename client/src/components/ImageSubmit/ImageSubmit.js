

import React, {Component} from "react";
import PropTypes from 'prop-types';
// import SignIn from '../SignIn/SignIn';
// import SignUp from '../SignUp/SignUp';


class ImageSubmit extends Component{
    constructor(){
        super();
        this.state = {
            images: []
        }
    }
    render(){
        return(
            <div className="loginPage">
                <form action="/api/donations" method="post" encType="multipart/form-data" id="addPhoto"> 
                    <input type="file" name="donation" />
                    <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
                </form>
            </div>
        )
    }
}

export default ImageSubmit;