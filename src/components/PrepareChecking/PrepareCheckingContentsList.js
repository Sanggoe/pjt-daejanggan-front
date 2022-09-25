import React, { useState } from "react";

import PrepareCheckingContent from "./PrepareCheckingContent";
import PrepareCheckingSubContent1 from "./PrepareCheckingSubContent1";
import PrepareCheckingSubContent2 from "./PrepareCheckingSubContent2";
import PrepareCheckingSubContent3 from "./PrepareCheckingSubContent3";

const checkingList = [
  { label: "전체 점검" },
  { label: "일부 점검" },
  { label: "체급별 점검" },
];

const PrepareCheckingContentsList = (props) => {
  const [select, setToggle] = useState("");

  const onSelectHandler = (selected) => {
    console.log(selected);
    setToggle(selected);
  };

  let check = {
    level: "",
    chapter_in73: 0,
    verse_in73: 0,
    chapter_out73: 0,
    verse_out73: 0,
  };

  if (props.len < 73) {
    check.level = "73 이하";
    check.verse_in73 = 10;
  } else if (props.len < 100) {
    let num = Math.floor(Math.random() * 2);
    console.log(num);
    check.level = "73 체급";
    check.chapter_in73 = 4;
    check.verse_in73 = 5 + num;
    check.verse_out73 = num;
  } else if (props.len < 200) {
    check.level = "100 체급";
    check.chapter_in73 = 3;
    check.verse_in73 = 4;
    check.chapter_out73 = 1;
    check.verse_out73 = 2;
  } else if (props.len < 300) {
    check.level = "200 체급";
    check.chapter_in73 = 2;
    check.verse_in73 = 3;
    check.chapter_out73 = 2;
    check.verse_out73 = 3;
  } else if (props.len < 400) {
    check.level = "300 체급";
    check.chapter_in73 = 2;
    check.verse_in73 = 3;
    check.chapter_out73 = 4;
    check.verse_out73 = 6;
  } else if (props.len < 500) {
    check.level = "400 체급";
    check.chapter_in73 = 2;
    check.verse_in73 = 3;
    check.chapter_out73 = 4;
    check.verse_out73 = 6;
  } else if (props.len >= 500) {
    check.level = "500 이상";
    check.chapter_in73 = 2;
    check.verse_in73 = 3;
    check.chapter_out73 = 4;
    check.verse_out73 = 6;
  }

  return (
    <>
      <PrepareCheckingContent
        key={checkingList[0].label}
        label={checkingList[0].label}
        onSelect={onSelectHandler}
        select={select}
      >
        <PrepareCheckingSubContent1 select={select} />
      </PrepareCheckingContent>
      <PrepareCheckingContent
        key={checkingList[1].label}
        label={checkingList[1].label}
        onSelect={onSelectHandler}
        select={select}
      >
        <PrepareCheckingSubContent2 select={select} />
      </PrepareCheckingContent>
      <PrepareCheckingContent
        key={checkingList[2].label}
        label={checkingList[2].label}
        onSelect={onSelectHandler}
        select={select}
      >
        <PrepareCheckingSubContent3 select={select} level={check.level} />
      </PrepareCheckingContent>
    </>
  );
};

export default PrepareCheckingContentsList;
