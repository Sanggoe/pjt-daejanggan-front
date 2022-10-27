import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import VerseContext from "../../store/verses-context";
import axios from "axios";
import authHeader from "../../api/auth-header"

const PrepareCheckingFooter = (props) => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "http://192.168.5.40:8080/api";

  const actionHandler = () => {
    getVerses();
  }

  const getVerses = () => {
    const payload = verseCtx.checkingInfoRequest

    axios
      .post(API_URL + "/checking-verses", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receiveCheckingResponse(response);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("prepare 에서 오류! 로그아웃 후 다시 이용해주세요.")
        console.log("\n\nerror : " + JSON.stringify(err));
      });
  };


  return (
    <div className={styles.footer}>
      <Link to={props.path1}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
          onClick={actionHandler}
        >
          {props.labels[0]}
        </Button>
      </Link>
    </div>
  );
};

export default PrepareCheckingFooter;
