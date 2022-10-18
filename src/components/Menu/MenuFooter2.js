import React, { useContext } from "react";

import Button from "../UI/Button";

import styles from "../UI/Footer.module.css";
import styles2 from "../UI/Button.module.css";
import { Link } from "react-router-dom";
import VerseContext from "../../store/verses-context";
import axios from "axios";

const MenuFooter2 = (props) => {
  const verseCtx = useContext(VerseContext);

  const actionHandler = () => {
    if (!verseCtx.checkingInfoRequest.headList.length) {
      alert("목록을 선택하세요");
    } else {
      verseCtx.setWeightType();
      verseCtx.clearCheckingInfos();
      // getVerses(e);
    }
  };

  // const getVerses = (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     checkingType: checkingType,
  //     headList: headList,
  //     order: order,
  //     verseType: verseType,
  //     count: { chapter: chapter, contents: contents },
  //     weight: {
  //       weightType: weightType,
  //       in73Chapter: in73Chapter,
  //       in73Contents: in73Contents,
  //       out73Chapter: out73Chapter,
  //       out73Contents: out73Contents,
  //     },
  //   };

  //   axios
  //     .post(API_URL + "/change-password", payload, { headers: authHeader() })
  //     .then((response) => {
  //       /***********************/
  //       console.log("response : " + JSON.stringify(response));

  //       if (response.status === 200) {
  //         alert("비밀번호 변경 성공!");
  //         return response;
  //       }
  //     })
  //     .catch((err) => {
  //       /***********************/
  //       console.log(JSON.stringify(err));
  //       alert("비밀번호 변경은 아직 에러가 남\n서버에서 DB 저장 쪽 문제인듯. 해결중!!");
  //     });
  // };


  return (
    <div className={styles.footer}>
      <Link to={verseCtx.checkingInfoRequest.headList.length ? props.path1 : "/menu"}>
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
        <Link
          to={verseCtx.checkingInfoRequest.headList.length ? props.path2 : "/menu"}
        >
          <Button
            styles={styles2.button_footer2}
            type="button"
            onClick={actionHandler}
          >
            {props.labels[1]}
          </Button>
        </Link>
    </div>
  );
};

export default MenuFooter2;
