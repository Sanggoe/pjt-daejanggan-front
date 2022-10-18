import React, { useState } from "react";

// head 비교를 통해 체급 체크를 위한 배열
const verseCheck = [
  "그리스도인의 확신",
  "그리스도인의 생활지침",
  "A - 새로운 삶",
  "B - 그리스도를 전파함",
  "C - 하나님을 의뢰함",
  "D - 그리스도의 자격",
  "E - 그리스도를 닮아감",
  "1. 구원의 확신", // 7 선택 : 73체급
  "2. Quiet Time", // 8 선택부터 : 100체급
  "3. 말씀",
  "4. 기도", // 10 선택까지 : 100체급
  "5. 교제", // 11 선택부터 : 200체급
  "6. 증거",
  "7. 그리스도의 주재권", // 13 선택까지 : 200체급
  "8. 세계 비전", // 14 선택부터 : 300체급
  "1. 하나님을 알아감",
  "2. 사랑 안에서 자라감", // 16 선택까지 : 300체급
  "3. 믿음 안에서 자라감", // 17 선택부터 : 400체급
  "4. 승리 안에서 자라감",
  "5. 그리스도를 증거함",
];

const VerseContext = React.createContext({
  verseInfo: [], // local data

  practiceRequest: {}, // headList 토대로 verses 요청
  practiceResponse: {}, // 받아온 verses

  checkingInfoRequest: {}, // request data
  clearCheckingInfos: () => {},
  setCheckingType: (checkingType) => {},
  addHeadList: (head) => {},
  removeHeadList: (old_head) => {},
  clearHeadList: () => {},
  setOrderType: (orderType) => {},
  setVerseType: (verseType) => {},
  setChapterNums: (chapterNums) => {},
  setContentsNums: (contentsNums) => {},
  setWeightType: () => {},
  clearWeightType: () => {},
  setIn73ChapterNums: (in73ChapterNums) => {},
  setIn73ContentsNums: (in73ContentsNums) => {},
  setOut73ChapterNums: (out73ChapterNums) => {},
  setOut73ContentsNums: (out73ContentsNums) => {},
  checkingInfoResponse: [], // response data

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

  /* 점검을 위한 정보의 state들 */
  const [checkingType, setCheckingType] = useState(""); // 전체 점검, 일부 점검, 체급별 점검
  const [headList, setHeadList] = useState([]); // {head: __}
  // 전체 점검
  const [orderType, setOrderType] = useState(0); // random(default):0, sequence:1
  const [verseType, setVerseType] = useState(0); // content:0, chapter:1
  // 일부 점검
  const [chapterNums, setChapterNums] = useState(0); // int
  const [contentsNums, setContentsNums] = useState(0); // int
  // 체급별 점검
  const [weightType, setWeightType] = useState(0);
  const [in73ChapterNums, setIn73ChapterNums] = useState(0); // int
  const [in73ContentsNums, setIn73ContentsNums] = useState(0); // int
  const [out73ChapterNums, setOut73ChapterNums] = useState(0); // int
  const [out73ContentsNums, setOut73ContentsNums] = useState(0); // int
  // prepareChecking 점검 정보 초기화
  const clearCheckingInfosHandler = () => {
    clearCheckingTypeHandler();
    clearOrderTypeHandler();
    clearVerseTypeHandler();
    clearChapterNumsHandler();
    clearContentsNumsHandler();
    clearIn73ChapterNumsHandler();
    clearIn73ContentsNumsHandler();
    clearOut73ChapterNumsHandler();
    clearOut73ContentsNumsHandler();
  }
  // 점검 종류
  const setCheckingTypeHandler = (checkingType) => {
    setCheckingType(checkingType);
  };
  const clearCheckingTypeHandler = () => {
    setCheckingType("");
  };
  // headList 추가 제거 및 초기화
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
  const clearHeadListHandler = () => {
    setHeadList(() => {
      return [];
    });
  };
  // 점검 순서
  const setOrderTypeHandler = (orderType) => {
    setOrderType(orderType);
  };
  const clearOrderTypeHandler = () => {
    setOrderType(0);
  };
  // 점검 방법(장절/내용)
  const setVerseTypeHandler = (verseType) => {
    setVerseType(verseType);
  };
  const clearVerseTypeHandler = () => {
    setVerseType(0);
  };
// 점검 개수(장절/내용 각각의 개수)
  const setChapterNumsHandler = (chapterNums) => {
    setChapterNums(chapterNums);
  };
  const clearChapterNumsHandler = () => {
    setChapterNums(0);
  };
  const setContentsNumsHandler = (contentsNums) => {
    setContentsNums(contentsNums);
  };
  const clearContentsNumsHandler = () => {
    setContentsNums(0);
  };
  // 선택한 head 정보를 토대로 점검 체급 결정
  const setWeightTypeHandler = () => {
    let len = headList.length;
    let notExist = false;

    if (len === 7) {
      for (let i = 0; i < 7; i++) {
        if (!headList.includes(verseCheck[i])) {
          notExist = true;
          break;
        }
      }
      if (!notExist) {
        setWeightType(() => {
          return 73;
        });
      }
    } else if (len >= 8 && len <= 10) {
      for (let i = 0; i < len; i++) {
        if (!headList.includes(verseCheck[i])) {
          notExist = true;
          break;
        }
      }
      if (!notExist) {
        setWeightType(() => {
          return 100;
        });
      }
    } else if (len >= 11 && len <= 13) {
      for (let i = 0; i < len; i++) {
        if (!headList.includes(verseCheck[i])) {
          notExist = true;
          break;
        }
      }
      if (!notExist) {
        setWeightType(() => {
          return 200;
        });
      }
    } else if (len >= 14 && len <= 16) {
      for (let i = 0; i < len; i++) {
        if (!headList.includes(verseCheck[i])) {
          notExist = true;
          break;
        }
      }
      if (!notExist) {
        setWeightType(() => {
          return 300;
        });
      }
    } else if (len >= 17) {
      for (let i = 0; i < len; i++) {
        if (!headList.includes(verseCheck[i])) {
          notExist = true;
          break;
        }
      }
      if (!notExist) {
        setWeightType(() => {
          return 400;
        });
      }
    }
  };
  const clearWeightTypeHandler = () => {
    setWeightType(() => {
      return 0;
    })
  }
  // 73 장절 개수
  const setIn73ChapterNumsHandler = (in73ChapterNums) => {
    setIn73ChapterNums(in73ChapterNums);
  };
  const clearIn73ChapterNumsHandler = () => {
    setIn73ChapterNums(0);
  };
  // 73 내용 개수
  const setIn73ContentsNumsHandler = (in73ContentsNums) => {
    setIn73ContentsNums(in73ContentsNums);
  };
  const clearIn73ContentsNumsHandler = () => {
    setIn73ContentsNums(0);
  };
  // 73이외 장절 개수
  const setOut73ChapterNumsHandler = (out73ChapterNums) => {
    setOut73ChapterNums(out73ChapterNums);
  };
  const clearOut73ChapterNumsHandler = () => {
    setOut73ChapterNums(0);
  };
  // 73이외 내용 개수
  const setOut73ContentsNumsHandler = (out73ContentsNums) => {
    setOut73ContentsNums(out73ContentsNums);
  };
  const clearOut73ContentsNumsHandler = () => {
    setOut73ContentsNums(0);
  };

  /* 장절 점검 input값 request를 위해 */
  const [inputHead, setInputHead] = useState("");
  const [inputChapterName, setInputChapterName] = useState("");
  const [inputChapter, setInputChapter] = useState("");
  const [inputVerse, setInputVerse] = useState("");

  const clearChapverseInputHandler = () => {
    clearInputHeadHandler();
    clearInputChapterNameHandler();
    clearInputChapterHandler();
    clearInputVerseHandler();
  }
  const setInputHeadHandler = (inputHead) => {
    setInputHead(inputHead);
  };
  const clearInputHeadHandler = () => {
    setInputHead(0);
  };
  const setInputChapterNameHandler = (inputChapterName) => {
    setInputChapterName(inputChapterName);
  };
  const clearInputChapterNameHandler = () => {
    setInputChapterName(0);
  };
  const setInputChapterHandler = (inputChapter) => {
    setInputChapter(inputChapter);
  };
  const clearInputChapterHandler = () => {
    setInputChapter(0);
  };
  const setInputVerseHandler = (inputVerse) => {
    setInputVerse(inputVerse);
  };
  const clearInputVerseHandler = () => {
    setInputVerse(0);
  };

  /* 내용 점검 input값 request를 위해 */
  const contextValue = {
    // 내장 데이터
    verseInfo: [
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
          "E - 그리스도를 닮아감", // 까지 선택 : 73 체급
        ],
      },
      {
        theme: "DEP",
        headList: [
          "1. 구원의 확신",
          "2. Quiet Time", // 까지 선택부터 : 100 체급
          "3. 말씀",
          "4. 기도",
          "5. 교제", // 까지 선택부터 : 200 체급
          "6. 증거",
          "7. 그리스도의 주재권",
          "8. 세계 비전", // 까지 선택부터 : 300 체급 이상
        ],
      },
      {
        theme: "180",
        headList: [
          "1. 하나님을 알아감",
          "2. 사랑 안에서 자라감",
          "3. 믿음 안에서 자라감", // 까지 선택부터 : 400 체급 이상
          "4. 승리 안에서 자라감",
          "5. 그리스도를 증거함",
        ],
      },
    ],

    // Request 할 데이터
    checkingInfoRequest: {
      checkingType: checkingType,
      headList: headList,
      orderType: orderType,
      verseType: verseType,
      count: { chapterNums: chapterNums, contentsNums: contentsNums },
      weight: {
        weightType: weightType,
        in73ChapterNums: in73ChapterNums,
        in73ContentsNums: in73ContentsNums,
        out73ChapterNums: out73ChapterNums,
        out73ContentsNums: out73ContentsNums,
      },
    },
    clearCheckingInfos: clearCheckingInfosHandler,
    setCheckingType: setCheckingTypeHandler,
    addHeadList: addHeadListHandler,
    removeHeadList: removeHeadListHandler,
    clearHeadList: clearHeadListHandler,
    setOrderType: setOrderTypeHandler,
    setVerseType: setVerseTypeHandler,
    setChapterNums: setChapterNumsHandler,
    setContentsNums: setContentsNumsHandler,
    setWeightType: setWeightTypeHandler,
    clearWeightType: clearWeightTypeHandler,
    setIn73ChapterNums: setIn73ChapterNumsHandler,
    setIn73ContentsNums: setIn73ContentsNumsHandler,
    setOut73ChapterNums: setOut73ChapterNumsHandler,
    setOut73ContentsNums: setOut73ContentsNumsHandler,

    checkingInfoResponse: [
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
      // ...
    ],

    chapverseRequest: {
      // Request 보낼 데이터
      head: inputHead,
      chapterName: inputChapterName,
      chapter: inputChapter,
      verse: inputVerse,
    },
    clearChapverseInput: clearChapverseInputHandler,
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
