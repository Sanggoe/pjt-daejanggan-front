import React, { useContext, useEffect, useState } from "react";
import VerseContext from "../../store/verses-context";

import PrepareCheckingContent from "./PrepareCheckingContent";
import PrepareCheckingSubContent1 from "./PrepareCheckingSubContent1";
import PrepareCheckingSubContent2 from "./PrepareCheckingSubContent2";
import PrepareCheckingSubContent3 from "./PrepareCheckingSubContent3";

const checkingList = [
  { label: "전체 점검" },
  { label: "일부 점검" },
  { label: "체급별 점검" },
];

const PrepareCheckingContentsList = () => {
  const verseCtx = useContext(VerseContext);
  const [select, setSelect] = useState("전체 점검");
  const [orderType, setOrderType] = useState(0);
  const [verseType, setVerseType] = useState(0);

  const [chapterNums, setChapterNums] = useState(2);
  const [contentsNums, setContentsNums] = useState(8);

  // setIn73ChapterNums: (in73ChapterNums) => {},
  // setIn73ContentsNums: (in73ContentsNums) => {},
  // setOut73ChapterNums: (out73ChapterNums) => {},
  // setOut73ContentsNums: (out73ContentsNums) => {},
  // checkingInfoRequest.weight.in73Chapter/in73Contents/out73Chapter/out73Contents
  const onSelectHandler = (selected) => {
    setSelect(selected);
    verseCtx.setCheckingType(selected);
  };

  useEffect(() => {
    verseCtx.setOrderType(orderType);
  }, [orderType]);

  useEffect(() => {
    verseCtx.setVerseType(verseType);
  }, [verseType]);

  useEffect(() => {
    verseCtx.setChapterNums(chapterNums);
  }, [chapterNums]);

  useEffect(() => {
    verseCtx.setContentsNums(contentsNums);
  }, [contentsNums]);

  useEffect(() => {
    verseCtx.setCheckingType("전체 점검");

    let weight = verseCtx.checkingInfoRequest.weight.weightType;
    if (weight === 0) {
      verseCtx.setIn73ChapterNums(10);
    } else if (weight === 73) {
      let num = Math.floor(Math.random() * 2);
      verseCtx.setIn73ChapterNums(4);
      verseCtx.setIn73ContentsNums(5 + num);
      if (!num) {
        verseCtx.setOut73ContentsNums(1);
      }
    } else if (weight === 100) {
      verseCtx.setIn73ChapterNums(3);
      verseCtx.setIn73ContentsNums(4);
      verseCtx.setOut73ChapterNums(1);
      verseCtx.setOut73ContentsNums(2);
    } else if (weight === 200) {
      verseCtx.setIn73ChapterNums(2);
      verseCtx.setIn73ContentsNums(3);
      verseCtx.setOut73ChapterNums(2);
      verseCtx.setOut73ContentsNums(3);
    } else if (weight === 300 || weight === 400 || weight === 500) {
      verseCtx.setIn73ChapterNums(2);
      verseCtx.setIn73ContentsNums(3);
      verseCtx.setOut73ChapterNums(4);
      verseCtx.setOut73ContentsNums(6);
    }
  }, []);

  return (
    <>
      <PrepareCheckingContent
        key={checkingList[0].label}
        label={checkingList[0].label}
        onSelect={onSelectHandler}
        select={select}
      >
        <PrepareCheckingSubContent1
          select={select}
          setOrderType={setOrderType}
          setVerseType={setVerseType}
        />
      </PrepareCheckingContent>
      <PrepareCheckingContent
        key={checkingList[1].label}
        label={checkingList[1].label}
        onSelect={onSelectHandler}
        select={select}
      >
        <PrepareCheckingSubContent2
          select={select}
          setChapterNums={setChapterNums}
          setContentsNums={setContentsNums}
          weight={verseCtx.checkingInfoRequest.weight.weightType}
        />
      </PrepareCheckingContent>
      <PrepareCheckingContent
        key={checkingList[2].label}
        label={checkingList[2].label}
        onSelect={onSelectHandler}
        select={select}
        weight={verseCtx.checkingInfoRequest.weight.weightType}
      >
        <PrepareCheckingSubContent3
          select={select}
          weight={verseCtx.checkingInfoRequest.weight.weightType}
        />
      </PrepareCheckingContent>
    </>
  );
};

export default PrepareCheckingContentsList;
