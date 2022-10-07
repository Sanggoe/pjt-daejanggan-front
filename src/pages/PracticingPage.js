import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/UI/Button";

import styles from "../components/UI/Button.module.css";

const PracticingPage = () => {
  return (
    <div>
      <form>
        <h1>Practicing Page</h1>
        <Link to="/menu">
          <Button styles={styles.button_nav} type="button">
            Home
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default PracticingPage;
