import React from "react";

const LocationInput = (props) => {
  return (
    <div>
      <div>
        <label>Enter location</label>
      </div>
      <div>
        <input placeholder={"enter city name"} onChange={props.onChange}/>
      </div>
    </div>
  );
}

export default LocationInput;