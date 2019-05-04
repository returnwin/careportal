import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, FormGroup, Input } from "reactstrap";

const DonationsItem = props => <div>{props.donation.itemTitle}</div>;

class DonationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: true,
      furniture: true,
      money: true
    };
  }

  filterDonations = () => {
    let showTypes = [];
    for (let key in this.state) {
      if (this.state[key]) {
        showTypes.push(key);
      }
    }
    const results = this.props.donations.filter(donation => {
      return showTypes.includes(donation.itemType);
    });
    return results;
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const filteredDonations = this.filterDonations();
    return (
      <div>
        <FormGroup check inline>
          <Input
            type="checkbox"
            name="furniture"
            onChange={this.handleChange}
            checked={this.state.furniture}
          />{" "}
          furniture
        </FormGroup>
        <FormGroup check inline>
          <Input
            type="checkbox"
            name="services"
            onChange={this.handleChange}
            checked={this.state.services}
          />{" "}
          services
        </FormGroup>
        <FormGroup check inline>
          <Input
            type="checkbox"
            name="money"
            onChange={this.handleChange}
            checked={this.state.money}
          />{" "}
          money
        </FormGroup>
        <ListGroup>
          {filteredDonations.map((donation, i) => (
            <ListGroupItem key={i}>
              <DonationsItem donation={donation} key={i} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

DonationsList.propTypes = {
  donations: PropTypes.array
};

export default DonationsList;
