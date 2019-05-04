import React from "react";
import "./CareCard.css";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  CardImg
} from "reactstrap";

const CareCard = props => {
  // const { donation } = props;
  const {
    title,
    description,
    cardImg,
    location,
    date,
    socialUrl
  } = props.donation;

  return (
    <Card className="cards pt-2, px-2">
      <CardBody>
        <CardTitle className="cardTitle">{title}</CardTitle>
        <CardText className="cardText">{description}</CardText>
        <CardImg className="cardImg" src={cardImg} alt="item" width="100%" />
        <CardText className="cardText">location: {location}</CardText>
        <CardText className="cardText">{date}</CardText>
        <CardText className="cardText">{socialUrl}</CardText>
      </CardBody>
    </Card>
  );
};

export default CareCard;
