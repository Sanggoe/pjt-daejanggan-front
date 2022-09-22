import React from "react";

import classes from "./ButtonSubItem.module.css";

const ButtonSubItem = (props) => {
  return (
    <div>
      <form>
          <label>
            <input type="checkbox"></input>
            {props.label}
            <span></span>
          </label>
        </form>
    </div>
  );
};

export default ButtonSubItem;
