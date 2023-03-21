import React from "react";
import "./LocationInput.css"

const LocationInput = (props) => {
  return (
    <div className={"location-input"}>
      <div>
        <input
          className={"input-field"}
          placeholder={"enter city name"}
          onKeyDown={props.onKeyDown}
        />
      </div>
    </div>
  );
}

export default LocationInput;