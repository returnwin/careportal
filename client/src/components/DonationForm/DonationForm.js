import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class DonationForm extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            location: {
                street: "",
                city: "",
                state: "",
                zip: ""
            },
            category: "",
            title: "",
            desc: "",
            images: []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleNameChange(e){
        this.setState({name: e.target.value});
    }
    handleZipChange(e){
        this.setState({zip: e.target.value});
    }
    handleCityChange(e){
        this.setState({city: e.target.value});
    }
    handleCategoryChange(e){
        this.setState({category: e.target.value});
    }
    handleTitleChange(e){
        this.setState({title: e.target.value});
    }
    handleDescChange(e){
        this.setState({desc: e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault();
        const name = this.state.name;
        const street = "";
        const city = this.state.location.city;
        const state = "TX";
        const zip = this.state.location.zip;
        const location = { street, city, state, zip }
        const itemType = this.state.category;
        const itemTitle = this.state.title;
        const itemDesc = this.state.desc;
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, city, location, itemType, itemTitle, itemDesc })
        }
        fetch("/api/donations", options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <Form className="donationForm" onSubmit={this.handleFormSubmit}>
                <FormGroup id='formName'>
                    <Label className="donationForm-name">Name:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="name" 
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                </FormGroup>
                <FormGroup id='formCity'>
                    <Label className="donationForm-city">City:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="city" 
                        onChange={this.handleCityChange}
                        value={this.state.location.city}
                    />
                </FormGroup>
                <FormGroup id="formZip">
                     <Label className="donationForm-zip">Zip Code:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="zip" 
                        onChange={this.handleZipChange}
                        value={this.state.location.zip}
                    />
                </FormGroup>
                <FormGroup id='formCategories'>
                    <Label className="donationForm-item-category">Pick a Category:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="category" 
                        onChange={this.handleCategoryChange}
                        value={this.state.category}
                    />
                </FormGroup>
                <FormGroup id="formItemTitle">
                    <Label className="donationForm-item-category">Item:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="title" 
                        onChange={this.handleTitleChange}
                        value={this.state.title}
                    />
                </FormGroup>
                <FormGroup id="formItemDesc">
                    <Label className="donationForm-item-category">Description of your item:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="desc" 
                        onChange={this.handleDescChange}
                        value={this.state.desc}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        Upload an Image
                    </FormText>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            // <div className="donation-form">
            //     <form action="/api/donations" method="post" encType="multipart/form-data" id="addPhoto"> 
            //         <input type="file" name="donation" />
            //         <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
            //     </form>
            // </div>
        )
    }
}

export default DonationForm;