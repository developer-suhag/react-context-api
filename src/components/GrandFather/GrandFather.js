import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const GrandFather = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>Grand Father</h2>
      <h4>House: {house}</h4>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" }}>
        <Father house={house}></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandFather;
