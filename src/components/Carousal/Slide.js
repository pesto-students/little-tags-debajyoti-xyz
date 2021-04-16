import React from "react";

const Slide = ({ content }) => {
  const mystyling = {
    height: "100px",
    width: "100px",
    backgroundImage: `url(${content})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return <div style={mystyling}></div>;
};

export default Slide;
