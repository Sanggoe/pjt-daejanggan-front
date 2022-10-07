import React from "react";
import ProfileForm from "../components/MyInfo/ProfileForm";

import styles from "./MyInfoPage.module.css";
import HomeButtonHeader from "../components/UI/HomeButtonHeader";

const MyInfoPage = () => {
  return (
    <section className={styles.profile}>
      <HomeButtonHeader label="돌아가기" path="/menu" />
      <ProfileForm />
    </section>
  );
};

export default MyInfoPage;
