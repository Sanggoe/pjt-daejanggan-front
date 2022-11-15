import axios from "axios";
import React, { useContext, useState } from "react";
import authHeader from "../../api/auth-header";
import VerseContext from "../../store/verses-context";

import TypeContent from "./TypeContent";
import Button from "../UI/Button";

import styles from "./TypeContentsList.module.css";
import { Link } from "react-router-dom";

const types = [
  { label: "출석 통계" },
  { label: "점검 통계" },
  { label: "월별 통계" },
];

const TypeContentsList = (props) => {
  const verseCtx = useContext(VerseContext);
  const API_URL = "/api/result";
  const [select, setToggle] = useState("");

  const onSelectHandler = (selected) => {
    setToggle(selected);
  };

  const getMyRecordsRequest = () => {
    const payload = verseCtx.myRecordsRequest;

    axios
      .post(API_URL + "/my-records", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        console.log("response : " + JSON.stringify(response));
        // console.log("\n" + JSON.stringify(response.data));
        // console.log("\n" + response.status);
        // console.log("\n" + JSON.stringify(response.statusText));

        if (response.status === 200) {
          // console.log("내 점검 기록 수신!");
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.");
        console.log("\nerror : " + JSON.stringify(err));
      });
  };

  /* test code */
  // const showHeadHandler = () => {
  //   getMyRecordsRequest();
  // };
  /************/

  return (
    <>
      <div className={styles.contents}>
        {types.map((type) => (
          <Link key={type.label+""+type.label} to={props.path1}>
            <TypeContent
              key={type.label}
              label={type.label}
              onSelect={onSelectHandler}
              select={select}
            />
          </Link>
        ))}
      </div>

      {/* Test code */}
      {/* <Button type="button" onClick={showHeadHandler}>
        헤드출력
      </Button> */}
      {/***************/}
    </>
  );
};

export default TypeContentsList;
