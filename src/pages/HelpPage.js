import React from "react";

import styles from "./HelpPage.module.css";
import HomeButtonHeader from "../components/UI/HomeButtonHeader";

const HelpPage = () => {
  return (
    <section className={styles.profile}>
      <HomeButtonHeader label="돌아가기" path="/menu" />
    </section>
  );
};

export default HelpPage;