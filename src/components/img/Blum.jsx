import React from "react";

const Blum = ({ size = 24, className = "", fill = "white" }) => {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 38 38"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.284 1.63281H15.4729V5.50868H7.00391V32.6398H15.4729V36.5156H19.284V32.6398H27.3296V28.7639H31.1406V21.0122H27.3296V17.1363H31.1406V9.38455H27.3296V5.50868H19.284V1.63281ZM15.4729 9.38455H21.1895V17.1363H15.4729V9.38455ZM15.4729 28.7639V21.0122H23.0951V24.888H19.284V28.7639H15.4729Z"
      />
    </svg>
  );
};

export default Blum;
