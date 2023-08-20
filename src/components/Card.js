import React from "react";
import "../blocks/Card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.item.imageUrl} alt={props.item.imageUrl}></img>
      <div className="card-info">
        <div className="card-header">
          <p className="card-location">{props.item.location}</p>
          <a className="card-map-url" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <p>
          {props.item.startDate}
          {props.item.endDate}
        </p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
