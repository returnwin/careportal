import React, {Component} from "react";
import ImageSubmit from '../ImageSubmit/ImageSubmit';
import DonationList from '../DonationsList/DonationsList';
import donations from '../../json/donations.json';
// import ImageSubmit from '../ImageSubmit/ImageSubmit';
import DonationForm from '../DonationForm/DonationForm';
import CareCard from '../CareCard/CareCard';
import donation from '../../json/donation.json';
// import PropTypes from 'prop-types';

class WelcomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token
        }
    }

    render(){
        console.log(this.state.token)
        return(
            <div className="welcomepage">
                <DonationList
                    donations={donations}
                >
                </DonationList>
                <DonationForm token={this.state.token}/>
                {/* <ImageSubmit/> */}
            </div>
        )
    }
}

export default WelcomePage;