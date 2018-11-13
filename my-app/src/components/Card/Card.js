import React from "react";
import "./Card.css";

const Card = props => (
  <div
    className="card" onClick={() => props.cardClicked(props.id)} >
    <div className="card-img">
    <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
