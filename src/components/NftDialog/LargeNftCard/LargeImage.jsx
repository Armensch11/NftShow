import React from "react";

const LargeImage = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  );
};

export default LargeImage;
