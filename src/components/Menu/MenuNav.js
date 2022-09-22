import React from "react";
import Button from "../UI/Button";

import styles from "./MenuNav.module.css";
import styles2 from "../UI/Button.module.css";

const MenuNav = (props) => {
  const onClickHander1 = () => {
    props.contentsSelect('Menu1')
  };
  const onClickHander2 = () => {
    props.contentsSelect('Menu2')
  };
  const onClickHander3 = () => {
    props.contentsSelect('Menu3')
  };
  return (
    <div className={styles.nav}>
      <Button styles={styles2.button_nav} type="button" onClick={onClickHander1}>
        암송
      </Button>
      <Button styles={styles2.button_nav} type="button" onClick={onClickHander2}>
        통계
      </Button>
      <Button styles={styles2.button_nav} type="button" onClick={onClickHander3}>
        업적
      </Button>
    </div>
  );
};

export default MenuNav;
