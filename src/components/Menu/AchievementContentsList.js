import React from "react";

import test from '../../asserts/images/price_test.jpg'

import styles from './AchievementContentsList.module.css'

const AchievementContentsList = () => {
    return (
      <div className={styles.div}>
        <img src={test} className={styles.img} alt={"임시이미지"} />
      </div>
    );
}

export default AchievementContentsList;