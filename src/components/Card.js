import React from "react";
import "../blocks/Card.css";
import mappin from "../images/mappin.avif";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.item.imageUrl} alt={props.item.imageUrl}></img>
      <div className="card-info">
        <div className="card-header">
          <img className="card-map-pin" src={mappin} alt={mappin}></img>
          <p className="card-location">{props.item.location}</p>
          <a className="card-map-url" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
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
