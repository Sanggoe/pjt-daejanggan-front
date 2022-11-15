import React from "react";

import comming_soon from '../../asserts/images/comming_soon.png'
import lock from "../../asserts/images/lock.png";
import invite from "../../asserts/images/invite.png";

import AchievementContent from "../Achievement/AchievementContent";

import styles from '../Achievement/Achievement.module.css'

const AchievementContentsList = () => {
    return (
      <>
        <div className={styles.commingSoonArea}>
          <img
            src={comming_soon}
            className={styles.img_area}
            alt={"임시이미지"}
          />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={invite} prize_name={"암송 초대장"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
        <div className={styles.achievementContentArea}>
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
          <AchievementContent img_url={lock} prize_name={"잠김"} />
        </div>
      </>
    );
}

export default AchievementContentsList;