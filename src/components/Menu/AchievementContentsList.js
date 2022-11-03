import React from "react";

// import test from '../../asserts/images/price_test.jpg'
import AchievementContent from "../Achievement/AchievementContent";

import styles from '../Achievement/Achievement.module.css'

const AchievementContentsList = () => {
    return (
      <div className={styles.achievementContentArea}>
        {/* <img src={test} className={styles.img_area} alt={"임시이미지"} /> */}
        <AchievementContent />
        <AchievementContent />
        <AchievementContent />
      </div>
    );
}

export default AchievementContentsList;