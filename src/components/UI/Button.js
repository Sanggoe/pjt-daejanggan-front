import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.styles}
      type={props.type}
      onClick={props.onClick}
      name={props.children}
    >
      {props.children}
    </button>
  );
};

export default Button;
