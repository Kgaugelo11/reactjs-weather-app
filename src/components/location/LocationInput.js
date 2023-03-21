import React from "react";
import "./LocationInput.css"

const LocationInput = (props) => {
  return (
    <div className={"location-input"}>
      <div>
        <input
          className={"input-field"}
          placeholder={"Location"}
          onKeyDown={props.onKeyDown}
        />
      </div>
    </div>
  );
}

export default LocationInput;