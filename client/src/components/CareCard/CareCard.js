import React from "react";
import "./CareCard.css";
import { Card, CardText, CardBody, CardTitle, CardLink, CardImg, Badge } from 'reactstrap';

const CareCard = props => {
  // const { donation } = props;
  const { title, description, cardImg, location, date, socialUrl, label } = props.donation;
  return (
    <Card className="cards">
      <CardBody className="card-body no-padding">
        <Badge className="badge" color={"primary"}>{label}</Badge>
          <CardTitle className="cardTitle">{title}</CardTitle>
        

        <CardText className="cardText">{description}</CardText>
        <CardImg className="cardImg" src={cardImg} alt="item" width="100%" />
        <CardText className="cardText">location: {location}</CardText>
        <CardText className="cardText">{date}</CardText>
        <CardLink className="cardText">{socialUrl}</CardLink>
      </CardBody>
    </Card>
  );
};

export default CareCard;
