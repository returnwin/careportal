import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, FormGroup, Input } from "reactstrap";
import CareCard from "../CareCard/CareCard";
import "./DonationsList.css";

class DonationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: true,
      items: true,
      money: true,
      events: true,
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
      return showTypes.includes(donation.type);
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
        <div className="checkbox-container">
          <FormGroup check inline>
            <Input
              type="checkbox"
              name="items"
              onChange={this.handleChange}
              checked={this.state.items}
            />{" "}
            items
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
          <FormGroup check inline>
            <Input
              type="checkbox"
              name="events"
              onChange={this.handleChange}
              checked={this.state.events}
            />{" "}
            events
          </FormGroup>
        </div>
        {/* mapped cards */}
        <ListGroup className="donations-list">
          {filteredDonations.map((donation, i) => (
            <ListGroupItem key={i}>
              <CareCard donation={donation} key={i} />
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
