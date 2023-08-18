import React from "react";
import "../blocks/Card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.item.imageUrl}></img>
      <div className="card-info-container">
        <p className="card-location">{props.item.location}</p>
        <h1 className="card-title">{props.item.title}</h1>
        <p className="card-dates">
          {props.item.startDate}
          {props.item.endDate}
        </p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}