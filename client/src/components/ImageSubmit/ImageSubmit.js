

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
            // <FormGroup>
            //     <Label for="exampleFile">File</Label>
            //     <Input type="file" name="file" id="exampleFile" />
            //     <FormText color="muted">
            //         This is some placeholder block-level help text for the above input.
            //         It's a bit lighter and easily wraps to a new line.
            //     </FormText>
            // </FormGroup>
            <div className="donation-form">
                <form action="/api/donations" method="post" encType="multipart/form-data" id="addPhoto"> 
                    <input type="file" name="donation" />
                    <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
                </form>
            </div>
        )
    }
}

export default ImageSubmit;