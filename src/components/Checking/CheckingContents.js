import React from "react";

import Card from '../UI/Card'

import styles from './CheckingContents.module.css'

const CheckingContents = () => {
    return (
      <Card>
        <div className={styles.contents}>
          <div className={styles.input}>
            <input
              className={styles.inputTitle}
              type="text"
              defaultValue="| 제목 (입력)"
            />
          </div>
          <div className={styles.input}>
            <input
              className={styles.inputBible}
              type="text"
              defaultValue="| 성경 (입력)"
            />
            <input
              className={styles.inputChapter}
              type="text"
              defaultValue="| 장 (입력)"
            />
            <input
              className={styles.inputChapter}
              type="text"
              defaultValue="| 절 (입력)"
            />
          </div>
          <div className={styles.label}>
            <label>
              지금까지는 너희가 내 이름으로 아무것도 구하지 아니하였으나 구하라
              그리하면 받으리니 너희 기쁨이 충만하리라
            </label>
          </div>
        </div>
      </Card>
    );
}

export default CheckingContents;