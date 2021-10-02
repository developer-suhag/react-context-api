import React from "react";
import Specila from "../Special/Specila";

const MySelf = (props) => {
  const { house } = props;

  return (
    <div>
      <h3>Suhag</h3>
      <p>House: {house}</p>
      <Specila></Specila>
    </div>
  );
};

export default MySelf;
