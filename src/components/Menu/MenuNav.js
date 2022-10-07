import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./MenuNav.module.css";
import styles2 from "../UI/Button.module.css";

const MenuNav = (props) => {
  const [menu, setMenu] = useState(props.navLabel[0]);

  const onClickHander = (e) => {
    setMenu(e.target.name);
    props.contentsSelect(e.target.name);
  };

  return (
    <div className={styles.nav}>
      {props.navLabel.map((label) => (
        <div className={styles.nav_div} key={label}>
          <Button
            styles={
              menu === label ? styles2.button_navSelected : styles2.button_nav
            }
            type="button"
            onClick={onClickHander}
          >
            {label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MenuNav;
