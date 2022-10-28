import React, { useState } from "react";

/* for weight checking array */
const verseCheck = [
  { head: "그리스도인의 확신", len: 5 },
  { head: "그리스도인의 생활지침", len: 8 },
  { head: "A - 새로운 삶", len: 12 },
  { head: "B - 그리스도를 전파함", len: 12 },
  { head: "C - 하나님을 의뢰함", len: 12 },
  { head: "D - 그리스도의 자격", len: 12 },
  { head: "E - 그리스도를 닮아감", len: 12 },
  { head: "1. 구원의 확신", len: 18 }, // 7 선택 : 73체급
  { head: "2. Quiet Time", len: 26 }, // 8 선택부터 : 100체급
  { head: "3. 말씀", len: 37 },
  { head: "4. 기도", len: 32 }, // 10 선택까지 : 100체급
  { head: "5. 교제", len: 30 }, // 11 선택부터 : 200체급
  { head: "6. 증거", len: 55 },
  { head: "7. 그리스도의 주재권", len: 26 }, // 13 선택까지 : 200체급
  { head: "8. 세계 비전", len: 18 }, // 14 선택부터 : 300체급
  { head: "1. 하나님을 알아감", len: 36 },
  { head: "2. 사랑 안에서 자라감", len: 36 }, // 16 선택까지 : 300체급
  { head: "3. 믿음 안에서 자라감", len: 36 }, // 17 선택부터 : 400체급
  { head: "4. 승리 안에서 자라감", len: 36 },
  { head: "5. 그리스도를 증거함", len: 36 },
];

const VerseContext = React.createContext({
  /* local data object for menu */
  verseInfo: [
    {
      theme: {},
      headList: [{ head: {}, len: {} }],
    },
  ],

  /* for practice, checking */
  addHeadList: (head) => {},
  removeHeadList: (old_head) => {},
  clearHeadList: () => {},

  /* for setting practice after result */
  addIndexList: (chapverse) => {},
  removeIndexList: (old_chapverse) => {},

  /* request data object for verses practice */
  practiceRequest: {
    headList: {},
  },

  /* response data object for verses practice */
  practiceResponse: {
    verse: {
      chapverse: {},
      theme: {},
      head: {},
      subhead: {},
      title: {},
      contents: {},
    },
  },
  receivePracticeResponse: (response) => {},
  clearPracticeVerse: () => {},
  filterPracticVerse: () => {},

  /* request data object for verses checking */
  checkingInfoRequest: {
    checkingType: {},
    headList: {},
    orderType: {},
    verseType: {},
    count: { chapterNums: {}, contentsNums: {} },
    weight: {
      weightType: {},
      in73ChapterNums: {},
      in73ContentsNums: {},
      out73ChapterNums: {},
      out73ContentsNums: {},
    },
  },
  clearCheckingInfos: () => {},
  setCheckingType: (checkingType) => {},
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

  /* response data object for verses checking */
  checkingInfoResponse: {
    verse: {
      index: {},
      verseType: {},
      chapverse: {},
      theme: {},
      head: {},
      subhead: {},
      title: {},
      contents: {},
    },
  },
  receiveCheckingResponse: (response) => {},
  clearCheckingVerse: () => {},

  /* data object for checking process (채점 진행 관련 데이터)  */
  checkingProcessInfo: {
    checkingTime: {},
    checkingProcessingState: {},
    mode: {},
    numberOfVerse: {
      total: {},
      selected: {},
    },
    currentVerse: {
      index: {},
      verseType: {},
      chapverse: {},
      theme: {},
      head: {},
      subhead: {},
      title: {},
      contents: {},
    },
    currentScoreInfo: {
      currentHint: {},
      currentMinus: {},
      currentScore: {},
    },
    resultVerse: {
      currentVerse: {
        index: {},
        verseType: {},
        chapverse: {},
        theme: {},
        head: {},
        subhead: {},
        title: {},
        contents: {},
      },
      currentScoreInfo: {
        currentHint: {},
        currentMinus: {},
        currentScore: {},
      },
    },
    resultScore: {
      totalScore: {},
      transformScore: {},
    },
    indexList: {}
  },
  setCheckingTime: () => {},
  setCheckingProcessingState: (state) => {},
  setMode: () => {},
  resetMode: () => {},
  setCurrentVerse: (index) => {},
  increaseCurrentHint: () => {},
  setCurrentHint: () => {},
  setCurrentMinus: () => {},
  increaseCurrentMinus: () => {},
  setCurrentScore: (score) => {},
  clearCurrentScoreInfo: () => {},
  addResultVerse: (resultCurrentVerse) => {},
  setResultTotalScore: (score) => {},
  addResultTotalScore: (score) => {},
  setResultTransformScore: () => {},
  clearCheckingProcessInfo: () => {},

  /* request data object for chapverse checking (장절 채점 요청) */
  checkingChapverseRequest: {
    theme: {}, // DB 찾기용
    chapverse: {}, // DB 찾기용
    subhead: {}, // DB 찾기용
    inputTitle: {},
    inputChapterName: {},
    inputChapter: {},
    inputVerse: {},
  },
  setInputTitle: (inputTitle) => {},
  setInputChapterName: (inputChapterName) => {},
  setInputChapter: (inputChapter) => {},
  setInputVerse: (inputVerse) => {},
  clearChapverseInput: () => {},

  /* request data object for contents checking (내용 채점 요청) */
  checkingContentsRequest: {
    theme: {}, // DB 찾기용
    chapverse: {}, // DB 찾기용
    subhead: {}, // DB 찾기용
    inputTitle: {},
    inputContents: {}, // + 힌트표시?
    hintWord: [],
    currentHint: {},
    currentMinus: {},
    currentScore: {},
  },
  // setInputTitle: (inputTitle) => {}, 중복 사용
  setInputContents: (inputContents) => {},
  addHintWord: (hintWord) => {},
  clearContentsInput: () => {},

  /* response data object for chapverse checking (장절 채점 결과) */
  checkingChapverseResponse: {
    resultTitle: {},
    correctTitle: {},
    resultChapterName: {},
    correctChapterName: {},
    resultChapter: {},
    correctChapter: {},
    resultVerse: {},
    correctVerse: {},
    currentMinus: {},
    currentScore: {},
  },
  receiveCheckingChapverseResponse: (response) => {},
  clearCheckingChapverseResponse: () => {},

  /* response data object for contents checking (내용 채점 결과) */
  checkingContentsResponse: {
    mode: {},
    resultTitle: {},
    isCorrectTitle: {},
    resultContents: {},
    inputContents: {},
    currentHint: {},
    currentMinus: {},
    currentScore: {},
  },
  receiveCheckingContentsResponse: (response) => {},
  clearCheckingContentsResponse: () => {},
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export const VerseContextProvider = (props) => {
  /* states for practice, checking */
  const [headList, setHeadList] = useState([]); // {head: __}
  const [totalLen, setTotalLen] = useState(0);
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
    clearTotalLenHandler();
  };
  const clearTotalLenHandler = () => {
    setTotalLen(0);
  };

  /* state for setting practice verseList after resultPage */
  const [indexList, setIndexList] = useState([]);
  const addIndexListHandler = (chapverse) => {
    setIndexList((prevIndexList) => {
      return prevIndexList.concat(chapverse);
    });
  };
  const removeIndexListHandler = (old_chapverse) => {
    setIndexList((prevIndexList) => {
      return prevIndexList.filter((chapverse) => chapverse !== old_chapverse);
    });
  };
  const clearIndexListHandler = () => {
    setIndexList(() => {
      return [];
    });
  };
  
  /* state object for verses practice, checking */
  const [verse, setVerse] = useState([]);
    /* response data object for verses practice */
  // practiceResponse에 verse 객체 추가 및 초기화
  const receivePracticeResponseHandler = (response) => {
    response.data.verses.map((verse) => addPracticeVerseHandler(verse));
  };
  const addPracticeVerseHandler = (verse) => {
    setVerse((prevVerse) => {
      return [...prevVerse, verse];
    });
  };
  const filterPracticVerseHandler = () => {
    setVerse((prevVerse) => {
      return prevVerse.filter((verse) => verse.index in indexList);
    });
  };
  const clearPracticeVerseHandler = () => {
    setVerse(() => {
      return [];
    });
  };

  /* states for verses checking (checkingInfoRequest) */
  const [checkingType, setCheckingType] = useState(""); // 전체 점검, 일부 점검, 체급별 점검
  // 전체 점검
  const [orderType, setOrderType] = useState("");
  const [verseType, setVerseType] = useState("");
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
  };
  // 점검 종류
  const setCheckingTypeHandler = (checkingType) => {
    setCheckingType(checkingType);
  };
  const clearCheckingTypeHandler = () => {
    setCheckingType("");
  };
  // 점검 순서
  const setOrderTypeHandler = (orderType) => {
    setOrderType(orderType);
  };
  const clearOrderTypeHandler = () => {
    setOrderType("");
  };
  // 점검 방법(장절/내용)
  const setVerseTypeHandler = (verseType) => {
    setVerseType(verseType);
  };
  const clearVerseTypeHandler = () => {
    setVerseType("");
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
    let totalLen = 0;
    let notExist = false;
    for (let i = 0; i < len; i++) {
      if (!notExist && i < 7 && !headList.includes(verseCheck[i].head)) {
        notExist = true;
      }
      totalLen +=
        verseCheck[verseCheck.findIndex((obj) => obj.head === headList[i])].len;
    }
    setTotalLen(totalLen);

    if (len >= 7) {
      // 73 이상 선택한 경우
      if (!notExist) {
        // 73 모두 체크 확인
        setWeightType(() => {
          return totalLen <= 100 ? 73 : parseInt(totalLen / 100) * 100;
        });
      } else {
        // 73에서 체크 안한게 있는 경우
        setWeightType(() => {
          return "일부 점검";
        });
      }
    } else {
      // 73이하의 경우
      if (!notExist) {
        // 73에서 체크한 것인지 확인
        setWeightType(() => {
          return totalLen;
        });
      } else {
        // 73이외의 것만 체크한 경우
        setWeightType(() => {
          return "일부 점검";
        });
      }
    }
  };
  const clearWeightTypeHandler = () => {
    setWeightType(() => {
      return 0;
    });
  };
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

  /* functions for verses checking */
  // checkingInfoResponse에 verse 객체 추가 및 초기화
  const receiveCheckingResponseHandler = (response) => {
    setCurrentVerse(response.data.verses[0]);
    response.data.verses.map((verse) => addCheckingVerseHandler(verse));
  };
  const addCheckingVerseHandler = (verse) => {
    setVerse((prevVerse) => {
      return [...prevVerse, verse];
    });
  };
  const clearCheckingVerseHandler = () => {
    setVerse(() => {
      return [];
    });
  };

  /* states for checking process (checkingProcessInfo) */
  const [checkingTime, setCheckingTime] = useState("");
  const [checkingProcessingState, setCheckingProcessingState] = useState("none");
  const [mode, setMode] = useState("check");
  const [currentVerse, setCurrentVerse] = useState({
    index: 0,
    verseType: "",
    chapverse: "",
    theme: "",
    head: "",
    subhead: "",
    title: "",
    contents: "",
  });
  // current checking score info
  const [currentHint, setCurrentHint] = useState(0);
  const [currentMinus, setCurrentMinus] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  // result verses info
  const [resultVerse, setResultVerse] = useState([]);
  /*{
    verse: {
      index: 0,
      verseType: "",
      chapverse: "",
      theme: "",
      head: "",
      subhead: "",
      title: "",
      contents: "",
    },
    scoreInfo: {
      currentHint: currentHint,
      currentMinus: currentMinus,
      currentScore: currentScore,
    }
  }*/
  // result checking score info
  const [resultTotalScore, setResultTotalScore] = useState(0);
  const [resultTransformScore, setResultTransformScore] = useState(0);
  // 점검 날짜 설정 및 초기화
  const setCheckingTimeHandler = () => {
    let date = new Date();
    let todayInfo =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    setCheckingTime(todayInfo);
  };
  const clearCheckingTimeHandler = () => {
    setCheckingTime("");
  };
  // 점검중 여부 구분 설정 및 초기화
  const setCheckingProcessingStateHandler = (state) => {
    setCheckingProcessingState(state);
  }
  // 점검창, 결과창 구분 설정 및 초기화
  const setModeHandler = (mode) => {
    setMode(mode);
  };
  // 점검창, 결과창 구분 설정 및 초기화
  const resetModeHandler = () => {
    setMode("check");
  };
  // 현재 점검 구절 정보 설정 및 초기화
  const setCurrentVerseHandler = (index) => {
    setCurrentVerse(() => {
      return verse[index];
    });
  };
  // 채점 점수 관련 정보 설정 및 초기화
  const setCurrentHintHandler = (currentHint) => {
    setCurrentHint(currentHint);
  };
  const increaseCurrentHintHandler = () => {
    setCurrentHint(currentHint + 1);
    increaseCurrentMinusHandler();
  };
  const clearCurrentHintHandler = () => {
    setCurrentHint(0);
  };
  const setCurrentMinusHandler = (currentMinus) => {
    setCurrentMinus(currentMinus);
  };
  const increaseCurrentMinusHandler = () => {
    setCurrentMinus(currentMinus + 1);
  };
  const clearCurrentMinusHandler = () => {
    setCurrentMinus(0);
  };
  const setCurrentScoreHandler = (score) => {
    setCurrentScore(score);
  };
  const clearCurrentScoreHandler = () => {
    setCurrentScore(0);
  };
  const clearCurrentScoreInfoHandler = () => {
    clearCurrentHintHandler();
    clearCurrentMinusHandler();
    clearCurrentScoreHandler();
  };
  // 점검 종료 또는 이탈시
  const clearCheckingProcessInfoHandler = () => {
    clearCheckingTimeHandler();
    clearCurrentScoreInfoHandler();
    clearResultInfoHandler();
    clearIndexListHandler();
    setCheckingProcessingStateHandler("none");
  };
  // 점검 결과 정보 추가 및 초기화
  const addResultVerseHandler = (resultCurrentVerse) => {
    if (resultVerse) {
      setResultVerse((prevResultVerse) => {
        return [...prevResultVerse, resultCurrentVerse];
      });
    } else {
      setResultVerse([resultCurrentVerse]);
    }
  };
  const clearResultVerseHandler = () => {
    setResultVerse(null);
  };
  const setResultTotalScoreHandler = (score) => {
    setResultTotalScore(score);
  };
  const addResultTotalScoreHandler = (score) => {
    setResultTotalScore(resultTotalScore + score);
  };
  const clearResultTotalScoreHandler = () => {
    setResultTotalScore(0);
  };
  const setResultTransformScoreHandler = () => {
    setResultTransformScore((resultTotalScore / verse.length) * 10);
  };
  const clearResultTransformScoreHandler = () => {
    setResultTransformScore(0);
  };
  const clearResultInfoHandler = () => {
    clearResultVerseHandler();
    clearResultTotalScoreHandler();
    clearResultTransformScoreHandler();
  };

  /* for chapverse checking (checkingChapverseRequest) */
  const [inputTitle, setInputTitle] = useState("");
  const [inputChapterName, setInputChapterName] = useState("");
  const [inputChapter, setInputChapter] = useState("");
  const [inputVerse, setInputVerse] = useState("");
  // 장절 점검 요청 정보들 설정 및 초기화
  const setInputTitleHandler = (inputTitle) => {
    setInputTitle(inputTitle);
  };
  const clearInputTitleHandler = () => {
    setInputTitle(0);
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
  const clearChapverseInputHandler = () => {
    clearInputTitleHandler();
    clearInputChapterNameHandler();
    clearInputChapterHandler();
    clearInputVerseHandler();
  };

  /* for contents checking (checkingContentsRequest) */
  const [inputContents, setInputContents] = useState("");
  const [hintWord, setHintWord] = useState([]);
  // 내용 점검 요청 정보들 설정 및 초기화
  const setInputContentsHandler = (contents) => {
    setInputContents(contents);
  };
  const clearInputContentsHandler = () => {
    setInputContents("");
  };
  const addHintWordHandler = (hintWord) => {
    setHintWord((prevHintWord) => {
      return prevHintWord.concat(hintWord);
    });
  };
  const clearHintWordHandler = () => {
    setHintWord(() => {
      return [];
    });
  };
  const clearContentsInputHandler = () => {
    clearInputContentsHandler();
    clearHintWordHandler();
  };

  /* for chapverse response (checkingChapverseResponse) */
  const [checkingChapverseResponse, setCheckingChapverseResponse] = useState(
    {}
  );
  /*
    resultTitle: {},
    isCorrectTitle: {},
    resultChapterName: {},
    isCorrectChapterName: {},
    resultChapter: {},
    isCorrectChapter: {},
    resultVerses: {},
    isCorrectVerse: {},
    currentMinus: {},
    currentScore: {},
  */

  const receiveCheckingChapverseResponseHandler = (response) => {
    setCheckingChapverseResponse(response.data);

    setCurrentMinus(response.data.currentMinus);
    setCurrentScore(response.data.currentScore);
    console.log("점수 저장");
    addResultTotalScoreHandler(response.data.currentScore);

    setMode("result");
  };
  const clearCheckingChapverseResponseHandler = () => {
    setCheckingChapverseResponse(null);
  };

  /* for chapverse response (chapverseResponse) */
  const [checkingContentsResponse, setCheckingContentsResponse] = useState({});

  const receiveCheckingContentsResponseHandler = (response) => {
    console.log(response.data);
    setCheckingContentsResponse(response.data);
  };
  const clearCheckingContentsResponseHandler = () => {
    setCheckingContentsResponse(null);
  };

  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

  /* 전체 정보 객체 데이터 */
  const contextValue = {
    /* local data object for menu */
    verseInfo: [
      {
        theme: "LOA",
        headList: [{ head: "그리스도인의 확신", len: 5 }],
      },
      {
        theme: "LOC",
        headList: [{ head: "그리스도인의 생활지침", len: 8 }],
      },
      {
        theme: "60구절",
        headList: [
          { head: "A - 새로운 삶", len: 12 },
          { head: "B - 그리스도를 전파함", len: 12 },
          { head: "C - 하나님을 의뢰함", len: 12 },
          { head: "D - 그리스도의 자격", len: 12 }, // 까지 73이하
          { head: "E - 그리스도를 닮아감", len: 12 },
        ],
      },
      {
        theme: "DEP",
        headList: [
          { head: "1. 구원의 확신", len: 18 }, // 까지 73
          { head: "2. Quiet Time", len: 26 }, // 100 체급
          { head: "3. 말씀", len: 37 },
          { head: "4. 기도", len: 32 },
          { head: "5. 교제", len: 30 }, // 200 체급
          { head: "6. 증거", len: 55 },
          { head: "7. 그리스도의 주재권", len: 26 },
          { head: "8. 세계 비전", len: 18 }, // 300 체급
        ],
      },
      {
        theme: "180",
        headList: [
          { head: "1. 하나님을 알아감", len: 36 },
          { head: "2. 사랑 안에서 자라감", len: 36 },
          { head: "3. 믿음 안에서 자라감", len: 36 }, // 400 체급
          { head: "4. 승리 안에서 자라감", len: 36 },
          { head: "5. 그리스도를 증거함", len: 36 },
        ],
      },
    ],

    /* for practice, checking */
    addHeadList: addHeadListHandler,
    removeHeadList: removeHeadListHandler,
    clearHeadList: clearHeadListHandler,

    /* for setting practice after result */
    addIndexList: addIndexListHandler,
    removeIndexList: removeIndexListHandler,

    /* request data object for verses practice */
    practiceRequest: {
      headList: headList,
    },

    /* response data object for verses practice */
    practiceResponse: {
      verse: verse,
    },
    receivePracticeResponse: receivePracticeResponseHandler,
    clearPracticeVerse: clearPracticeVerseHandler,
    filterPracticVerse: filterPracticVerseHandler,

    /* request data object for verses checking */
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

    /* response data object for verses checking */
    checkingInfoResponse: {
      verse: verse,
    },
    receiveCheckingResponse: receiveCheckingResponseHandler,
    clearCheckingVerse: clearCheckingVerseHandler,

    /* data object for checking process (채점 진행 관련 데이터) */
    checkingProcessInfo: {
      checkingTime: checkingTime,
      checkingProcessingState: checkingProcessingState,
      mode: mode,
      numberOfVerse: {
        total: totalLen,
        selected: verse.length,
      },
      currentVerse: currentVerse,
      currentScoreInfo: {
        currentHint: currentHint,
        currentMinus: currentMinus,
        currentScore: currentScore,
      },
      resultVerse: resultVerse,
      resultScore: {
        totalScore: resultTotalScore,
        transformScore: resultTransformScore,
      },
      indexList: indexList
    },
    setCheckingTime: setCheckingTimeHandler,
    setCheckingProcessingState: setCheckingProcessingStateHandler,
    setMode: setModeHandler,
    resetMode: resetModeHandler,
    setCurrentVerse: setCurrentVerseHandler,
    setCurrentHint: setCurrentHintHandler,
    increaseCurrentHint: increaseCurrentHintHandler,
    setCurrentMinus: setCurrentMinusHandler,
    increaseCurrentMinus: increaseCurrentMinusHandler,
    setCurrentScore: setCurrentScoreHandler,
    clearCurrentScoreInfo: clearCurrentScoreInfoHandler,
    addResultVerse: addResultVerseHandler,
    setResultTotalScore: setResultTotalScoreHandler,
    addResultTotalScore: addResultTotalScoreHandler,
    setResultTransformScore: setResultTransformScoreHandler,
    clearCheckingProcessInfo: clearCheckingProcessInfoHandler,

    /* request data object for chapverse checking (장절 채점 요청) */
    checkingChapverseRequest: {
      theme: currentVerse.theme, // DB 찾기용
      chapverse: currentVerse.chapverse, // DB 찾기용
      subhead: currentVerse.subhead, // DB 찾기용
      inputTitle: inputTitle,
      inputChapterName: inputChapterName,
      inputChapter: inputChapter,
      inputVerse: inputVerse,
    },
    setInputTitle: setInputTitleHandler,
    setInputChapterName: setInputChapterNameHandler,
    setInputChapter: setInputChapterHandler,
    setInputVerse: setInputVerseHandler,
    clearChapverseInput: clearChapverseInputHandler,

    /* request data object for contents checking (내용 채점 요청) */
    checkingContentsRequest: {
      theme: currentVerse.theme, // DB 찾기용
      chapverse: currentVerse.chapverse, // DB 찾기용
      subhead: currentVerse.subhead, // DB 찾기용
      inputTitle: inputTitle,
      inputContents: inputContents,
      hintWord: hintWord,
      currentHint: currentHint,
      currentMinus: currentMinus,
      currentScore: currentScore,
    },
    setInputContents: setInputContentsHandler,
    addHintWord: addHintWordHandler,
    clearContentsInput: clearContentsInputHandler,

    /* response data object for chapverse checking (장절 채점 결과) */
    checkingChapverseResponse: checkingChapverseResponse,
    /*
      resultTitle: {},
      isCorrectTitle: {},
      resultChapterName: {},
      isCorrectChapterName: {},
      resultChapter: {},
      isCorrectChapter: {},
      resultVerse: {},
      isCorrectVerse: {},
      currentMinus: {},
      currentScore: {},
    */
    receiveCheckingChapverseResponse: receiveCheckingChapverseResponseHandler,
    clearCheckingChapverseResponse: clearCheckingChapverseResponseHandler,

    /* response data object for contents checking (내용 채점 결과) */
    checkingContentsResponse: checkingContentsResponse,
    /*
      mode: {},
      resultTitle: {},  
      isCorrectTitle: {},
      resultContents: {},
      inputContents: {},
      currentHint: {},
      currentMinus: {},
      currentScore: {},
    */
    receiveCheckingContentsResponse: receiveCheckingContentsResponseHandler,
    clearCheckingContentsResponse: clearCheckingContentsResponseHandler,
  };

  return (
    <VerseContext.Provider value={contextValue}>
      {props.children}
    </VerseContext.Provider>
  );
};

export default VerseContext;
