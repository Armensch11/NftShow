import React from "react";

const Image = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        borderRadius: "12px",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  );
};

export default Image;
