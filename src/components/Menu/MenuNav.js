import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./MenuNav.module.css";
import styles2 from "../UI/Button.module.css";

const MenuNav = (props) => {
  const [menu, setMenu] = useState(0);

  const onClickHander1 = () => {
    setMenu(0);
    props.contentsSelect('Menu1')
  };
  const onClickHander2 = () => {
    setMenu(1);
    props.contentsSelect('Menu2')
  };
  const onClickHander3 = () => {
    setMenu(2);
    props.contentsSelect('Menu3')
  };
  return (
    <div className={styles.nav}>
      <Button
        styles={menu === 0 ? styles2.button_navSelected : styles2.button_nav}
        type="button"
        onClick={onClickHander1}
      >
        암송
      </Button>
      <Button
        styles={menu === 1 ? styles2.button_navSelected : styles2.button_nav}
        type="button"
        onClick={onClickHander2}
      >
        통계
      </Button>
      <Button
        styles={menu === 2 ? styles2.button_navSelected : styles2.button_nav}
        type="button"
        onClick={onClickHander3}
      >
        업적
      </Button>
    </div>
  );
};

export default MenuNav;
