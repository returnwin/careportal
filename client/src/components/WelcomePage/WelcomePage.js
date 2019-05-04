import React, {Component} from "react";
import ImageSubmit from '../ImageSubmit/ImageSubmit';
import CareCard from '../CareCard/CareCard';
import DonationList from '../DonationList/DonationList';
import donation from '../../json/donation.json';
// import PropTypes from 'prop-types';

class WelcomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="welcomepage">
                <DonationList
                    donations={donations}
                >
                </DonationList>
                
                {/* <ul>
                    <CareCard 
                        donation={donation}
                    />
                    <CareCard title={'Food in Round Rock'} description={'lorem ipsum'} />
                    <CareCard title={'Bedframe in Round Rock'} description={'lorem ipsum'} />
                </ul> */}
                <ImageSubmit/>
            </div>
        )
    }
}

export default WelcomePage;