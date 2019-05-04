import React, {Component} from "react";
// import ImageSubmit from '../ImageSubmit/ImageSubmit';
import DonationForm from '../DonationForm/DonationForm';
import CareCard from '../CareCard/CareCard';
import donation from '../../json/donation.json';
// import PropTypes from 'prop-types';

class WelcomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="welcomepage">
                {/* <ul>
                    <CareCard 
                        donation={donation}
                    />
                    <CareCard title={'Food in Round Rock'} description={'lorem ipsum'} />
                    <CareCard title={'Bedframe in Round Rock'} description={'lorem ipsum'} />
                </ul> */}
                <DonationForm/>
                {/* <ImageSubmit/> */}
            </div>
        )
    }
}

export default WelcomePage;