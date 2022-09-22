import React from "react";

import Button from "../components/UI/Button";

import styles from "../components/UI/Button.module.css";

const PracticingPage = (props) => {
  const onClickHandler = () => {
    props.pageLink("MainMenuPage");
  };

  return (
    <div>
      <form>
        <h1>Practicing Page</h1>
        <Button
          styles={styles.button_nav}
          type="button"
          onClick={onClickHandler}
        >
          Home
        </Button>
      </form>
    </div>
  );
};

export default PracticingPage;
