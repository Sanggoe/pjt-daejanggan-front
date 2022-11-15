import React from "react";
import Button from "../UI/Button";

import styles from "./Achievement.module.css"

const AchievementContent = (props) => {
    return (
      <div className={styles.achievementContents}>
        <Button styles={styles.achievementButton}>
          <img src={props.img_url} className={styles.img_area} alt={"이미지"} />
        </Button>
        <label className={styles.achievementLabel}>{props.prize_name}</label>
      </div>
    );
}

export default AchievementContent;