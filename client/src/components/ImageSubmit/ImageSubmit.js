import React, {Component} from "react";
import { FormGroup, Label, Input, FormText} from 'reactstrap';
import './ImageSubmit.css';

class ImageSubmit extends Component{
    constructor() {
        super();
        this.state = {
            images: []
        }
    }
    render() {
        return (
            <FormGroup className="image-submit">
                <Label for="exampleFile">File</Label>
                <Input className="input" type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Upload an Image
                </FormText>
            </FormGroup>
            // <div className="donation-form">
            //     <form action="/api/donations" method="post" encType="multipart/form-data" id="addPhoto"> 
            //         <input type="file" name="donation" />
            //         <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
            //     </form>
            // </div>
        )
    }
}

export default ImageSubmit;