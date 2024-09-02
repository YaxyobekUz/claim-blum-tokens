import React from "react";

// image
import tokenImg from "../../assets/images/others/token-img.webp";

const Token = ({ size = 24, className = "size-6" }) => {
  return (
    <img
      alt="token"
      width={size}
      height={size}
      src={tokenImg}
      className={className}
    />
  );
};

export default Token;
