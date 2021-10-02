import React, { useContext } from "react";
import { RingContext } from "../../App";

const Aunty = () => {
  const [, house] = useContext(RingContext);
  return (
    <div>
      <h3>Aunty</h3>
      <p>House: {house}</p>
    </div>
  );
};

export default Aunty;
