import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class DonationForm extends Component{
    constructor(){
        super();
        this.state = {
            userId: "",
            name: "",
            location: [
                {street: ""},
                {city: ""},
                {state: ""},
                {zip: ""}
            ],
            category: "",
            title: "",
            desc: "",
            donations: [],
            image: [
                {data: "", contentType: ""}
            ]
        }
    }
    componentDidMount(){
        const token = this.props.token;
        fetch('/api/donations')
        .then(res => res.json())
        .then(donations => {
            console.log("donations:", donations)
            this.setState({ donations })
        })
    }
    handleFormSubmit(e){
        e.preventDefault();
        const userId = this.state.userId;
        console.log("userId:", userId)
        const name = this.state.name;
        const date = Date.now();
        // console.log("date:", date)
        const stringDate = date.toString();
        const location = [ 
            {street: this.state.street},
            {city: this.state.city},
            {state: this.state.state},
            {zip: this.state.zip}
        ]
        console.log("location:", location)
        const itemType = this.state.category;
        console.log("itemType:", itemType)
        const itemTitle = this.state.title;
        console.log("itemTitle:", itemTitle)
        const itemDesc = this.state.desc;
        console.log("itemDesc:", itemDesc)
        const image = this.state.image;
        console.log("image:", image)
        let options = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({name, location, itemType, itemTitle, itemDesc})
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
            <div>
            <h1>Donate an Item</h1>
            <form className="donationForm" onSubmit={this.handleFormSubmit.bind(this)} enctype="multipart/form-data">
                <FormGroup id='formName'>
                    <Label className="donationForm-name">Name:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="name" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        value={this.state.name}
                    />
                </FormGroup>
                <FormGroup id='formStreet'>
                    <Label className="donationForm-street">Street Address:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="street" 
                        onChange={e=>{
                            this.setState({[e.target.street]: e.target.value});
                        }}
                        value={this.state.street}
                    />
                </FormGroup>
                <FormGroup id='formCity'>
                    <Label className="donationForm-city">City:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="city" 
                        onChange={e=>{
                            this.setState({[e.target.city]: e.target.value});
                        }}
                        value={this.state.city}
                    />
                </FormGroup>
                <FormGroup id='formCity'>
                    <Label className="donationForm-city">State:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="state" 
                        onChange={e=>{
                            this.setState({[e.target.state]: e.target.value});
                        }}
                        value={this.state.state}
                    />
                </FormGroup>
                <FormGroup id="formZip">
                     <Label className="donationForm-zip">Zip Code:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="zip" 
                        onChange={e=>{
                            this.setState({[e.target.zip]: e.target.value});
                        }}
                        value={this.state.zip}
                    />
                </FormGroup>
                <FormGroup id='formCategories'>
                    <Label className="donationForm-item-category">Pick a Category:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="category" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        value={this.state.category}
                    />
                </FormGroup>
                <FormGroup id="formItemTitle">
                    <Label className="donationForm-item-category">Item:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="title" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        value={this.state.title}
                    />
                </FormGroup>
                <FormGroup id="formItemDesc">
                    <Label className="donationForm-item-category">Description of your item:</Label>{' '}
                    <Input 
                        type="text" 
                        placeholder="Jane Doe" 
                        name="desc" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        value={this.state.desc}
                    />
                </FormGroup>
                {/* <form action='/api/images' method="post" enctype="multipart/form-data"> */}
                <form action='/api/images' method="post" enctype="multipart/form-data">
                    <Input type='file' name='image' onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}/>
                </form>
                {/* </form> */}
                <Button type="submit">Submit</Button>
            </form>
        </div>
        )
    }
}

export default DonationForm;