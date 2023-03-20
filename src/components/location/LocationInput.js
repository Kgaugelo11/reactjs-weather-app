import React from "react";
import "./LocationInput.css"

const LocationInput = (props) => {
  return (
    <div className={"location-input"}>
      <div>
        <input className={"input-field"} placeholder={"enter city name"} onChange={props.onChange}/>
      </div>
    </div>
  );
}

export default LocationInput;