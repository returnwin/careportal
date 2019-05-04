import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";

const DonationsItem = props => <div>{props.donation}</div>;

class DonationsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.donations.map(donation => (
          <ListGroupItem>
            <DonationsItem donation={donation} key={donation._id} />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

DonationsList.propTypes = {
  donations: PropTypes.array
};

export default DonationsList;
