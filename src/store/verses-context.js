import React, { useState } from "react";

const VerseContext = React.createContext({
  verseInfo: [], // local data

  checkingInfo: {}, // request data
  setCheckingType: (checkingType) => {},
  addHeadList: (head) => {},
  removeHeadList: (old_head) => {},
  setOrder: (order) => {},
  setVerseType: (verseType) => {},
  setChapter: (chapter) => {},
  setContents: (contents) => {},
  setIs73checked: (is73checked) => {},
  setIn73Chapter: (in73Chapter) => {},
  setIn73Contents: (in73Contents) => {},
  setOut73Chapter: (out73Chapter) => {},
  setOut73Contents: (out73Contents) => {},
  checkingVerseInfos: [], // response data

  chapverseRequest: {}, // request data
  setInputHead: (inputHead) => {},
  setInputChapterName: (inputChapterName) => {},
  setInputChapter: (inputChapter) => {},
  setInputVerse: (inputVerse) => {},

  chapverseResponse: {}, // response data

  contentsRequest: {}, // request data
  //
  //
  //
  contentsResponse: {}, // response data
});

export const VerseContextProvider = (props) => {
  const [checkingType, setCheckingType] = useState(""); // 전체 점검, 일부 점검, 체급별 점검
  const [headList, setHeadList] = useState([]); // {head: __}

  /* 전체 점검 */
  const [order, setOrder] = useState(0); // random(default), sequence
  const [verseType, setVerseType] = useState(0); // chapter:1, content:2

  /* 일부 점검 */
  const [chapter, setChapter] = useState(0); // int
  const [contents, setContents] = useState(0); // int

  /* 체급별 점검 */
  const [is73checked, setIs73checked] = useState(false);
  const [in73Chapter, setIn73Chapter] = useState(0); // int
  const [in73Contents, setIn73Contents] = useState(0); // int
  const [out73Chapter, setOut73Chapter] = useState(0); // int
  const [out73Contents, setOut73Contents] = useState(0); // int

  const setCheckingTypeHandler = (checkingType) => {
    setCheckingType(checkingType);
  };
  const addHeadListHandler = (head) => {
    setHeadList((prevHeadList) => {
      return prevHeadList.concat(head);
    });
  };
  const removeHeadListHandler = (old_head) => {
    setHeadList((prevHeadList) => {
      return prevHeadList.filter((head) => head !== old_head);
    });
  };

  const setOrderHandler = (order) => {
    setOrder(order);
  };
  const setVerseTypeHandler = (verseType) => {
    setVerseType(verseType);
  };

  const setChapterHandler = (chapter) => {
    setChapter(chapter);
  };
  const setContentsHandler = (contents) => {
    setContents(contents);
  };

  // const setIs73checkedHandler = (is73checked) => {
  //   setIs73checked(!is73checked);
  // };
  const setIn73ChapterHandler = (in73Chapter) => {
    setIn73Chapter(in73Chapter);
  };
  const setIn73ContentsHandler = (in73Contents) => {
    setIn73Contents(in73Contents);
  };
  const setOut73ChapterHandler = (out73Chapter) => {
    setOut73Chapter(out73Chapter);
  };
  const setOut73ContentsHandler = (out73Contents) => {
    setOut73Contents(out73Contents);
  };

  /* 장절 점검 input값 request를 위해 */
  const [inputHead, setInputHead] = useState("");
  const [inputChapterName, setInputChapterName] = useState("");
  const [inputChapter, setInputChapter] = useState("");
  const [inputVerse, setInputVerse] = useState("");

  const setInputHeadHandler = (inputHead) => {
    setInputHead(inputHead);
  };
  const setInputChapterNameHandler = (inputChapterName) => {
    setInputChapterName(inputChapterName);
  };
  const setInputChapterHandler = (inputChapter) => {
    setInputChapter(inputChapter);
  };
  const setInputVerseHandler = (inputVerse) => {
    setInputVerse(inputVerse);
  };

  /* 내용 점검 input값 request를 위해 */

  const contextValue = {
    verseInfo: [
      // 내장 데이터
      {
        theme: "LOA",
        headList: ["그리스도인의 확신"],
      },
      {
        theme: "LOC",
        headList: ["그리스도인의 생활지침"],
      },
      {
        theme: "60구절",
        headList: [
          "A - 새로운 삶",
          "B - 그리스도를 전파함",
          "C - 하나님을 의뢰함",
          "D - 그리스도의 자격",
          "E - 그리스도를 닮아감",
        ],
      },
      {
        theme: "DEP",
        headList: [
          "1. 구원의 확신",
          "2. Quiet Time",
          "3. 말씀",
          "4. 기도",
          "5. 교제",
          "6. 증거",
          "7. 그리스도의 주재권",
          "8. 세계 비전",
        ],
      },
      {
        theme: "180",
        headList: [
          "1. 하나님을 알아감",
          "2. 사랑 안에서 자라감",
          "3. 믿음 안에서 자라감",
          "4. 승리 안에서 자라감",
          "5. 그리스도를 증거함",
        ],
      },
    ],

    checkingInfo: {
      // Request 할 데이터
      checkingType: checkingType,
      headList: headList,
      order: order,
      verseType: verseType,
      count: { chapter: chapter, contents: contents },
      weight: {
        is73checked: is73checked,
        in73Chapter: in73Chapter,
        in73Contents: in73Contents,
        out73Chapter: out73Chapter,
        out73Contents: out73Contents,
      },
    },
    setCheckingType: setCheckingTypeHandler,
    addHeadList: addHeadListHandler,
    removeHeadList: removeHeadListHandler,
    setOrder: setOrderHandler,
    setVerse: setVerseTypeHandler,
    setChapter: setChapterHandler,
    setContents: setContentsHandler,
    setIn73Chapter: setIn73ChapterHandler,
    setIn73Contents: setIn73ContentsHandler,
    setOut73Chapter: setOut73ChapterHandler,
    setOut73Contents: setOut73ContentsHandler,

    checkingVerseInfos: [
      // Response 받아올 데이터들
      {
        chapverse: "요한복음 16:24",
        theme: "LOA",
        head: "그리스도인의 확신",
        subhead: "",
        title: "2. 기도응답의 확신",
        contents:
          "지금까지는 너희가 내 이름으로 아무것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라",
      },
    ],

    chapverseRequest: {
      // Request 보낼 데이터
      head: inputHead,
      chapterName: inputChapterName,
      chapter: inputChapter,
      verse: inputVerse,
    },
    setInputHead: setInputHeadHandler,
    setInputChapterName: setInputChapterNameHandler,
    setInputChapter: setInputChapterHandler,
    setInputVerse: setInputVerseHandler,

    chapverseResponse: {
      // Response 받아올 데이터들
      head: {
        result: "기도응답의 확신",
        correct: false,
      },
      chapterName: {
        result: "요한복음",
        correct: true,
      },
      chapter: {
        result: 16,
        correct: true,
      },
      verse: {
        result: 24,
        correct: true,
      },
    },

    contentsRequest: {}, // request data

    contentsResponse: {}, // response data
  };

  return (
    <VerseContext.Provider value={contextValue}>
      {props.children}
    </VerseContext.Provider>
  );
};

export default VerseContext;
