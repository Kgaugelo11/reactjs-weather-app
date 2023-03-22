import React from "react";
import "./LocationInput.css"

const LocationInput = (props) => {
  return (
    <div className={"location-input"}>

        <input
          className={"input-field"}
          placeholder={"Location"}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}
        />
    </div>
  );
}

export default LocationInput;