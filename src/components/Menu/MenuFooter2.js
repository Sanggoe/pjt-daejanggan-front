import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import VerseContext from "../../store/verses-context";
import axios from "axios";
import authHeader from "../../api/auth-header";

const MenuFooter2 = (props) => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "http://192.168.5.40:8080/api";

  const actionHandler1 = () => {
    if (!verseCtx.checkingInfoRequest.headList.length) {
      alert("목록을 선택하세요");
    } else {
      verseCtx.setWeightType();
      verseCtx.clearCheckingInfos();
      verseCtx.clearCheckingVerse();
      getVerses();
    }
  };

  const actionHandler2 = () => {
    if (!verseCtx.checkingInfoRequest.headList.length) {
      alert("목록을 선택하세요");
    } else {
      verseCtx.setCheckingProcessingState("preparing");
      verseCtx.setWeightType();
      verseCtx.clearCheckingInfos();
      verseCtx.clearCheckingVerse();
      verseCtx.resetMode();
    }
  };

  const getVerses = () => {
    const payload = { headList: verseCtx.checkingInfoRequest.headList }

    axios
      .post(API_URL + "/practice-verses", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        // console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          verseCtx.receivePracticeResponse(response);
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("오류! 로그아웃 후 다시 이용해주세요.")
        console.log(JSON.stringify(err));
      });
  };


  return (
    <div className={styles.footer}>
      <Link to={verseCtx.checkingInfoRequest.headList.length ? props.path1 : "/menu"}>
        <Button
          styles={
            props.len === 1 ? styles2.button_footer1 : styles2.button_footer2
          }
          type="button"
          onClick={actionHandler1}
        >
          {props.labels[0]}
        </Button>
      </Link>
        <Link
          to={verseCtx.checkingInfoRequest.headList.length ? props.path2 : "/menu"}
        >
          <Button
            styles={styles2.button_footer2}
            type="button"
            onClick={actionHandler2}
          >
            {props.labels[1]}
          </Button>
        </Link>
    </div>
  );
};

export default MenuFooter2;
