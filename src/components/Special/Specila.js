import React, { useContext } from "react";
import { RingContext } from "../../App";

const Specila = () => {
  const [ornaments, house] = useContext(RingContext);
  return (
    <div>
      <h4>Special Person</h4>
      <p>{ornaments}</p>
      <small>house: {house}</small>
    </div>
  );
};

export default Specila;
