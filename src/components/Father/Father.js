import React from "react";
import MySelf from "../MySelf/MySelf";
import Sisters from "../Sisters/Sisters";

const Father = (props) => {
  const { house } = props;

  return (
    <div>
      <h3>Father</h3>
      <p>House : {house}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <MySelf house={house}></MySelf>
        <Sisters house={house}></Sisters>
      </div>
    </div>
  );
};

export default Father;
