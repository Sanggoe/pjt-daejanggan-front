import React from "react";
import PracticingFooter from "../components/PracticeChecking/PracticingFooter";
import PracticeContentsList from "../components/PracticeChecking/PracticeContentsList";

import HomeButtonHeader from "../components/UI/HomeButtonHeader";

const verses = [{
  chapverse: "요한일서 5:11~12",
  theme: "LOA",
  head: "그리스도인의 확신",
  subhead: "",
  title: "1. 구원의 확신",
  contents: "또 증거는 이것이니 하나님이 우리에게 영생을 주신것과 이 생명이 그의 아들안에 있는 그것이니라 아들이 있는 자 에게는 생명이 있고 하나님의 아들이 없는 자에게는 생명이 없느니라"
},
{
  chapverse: "요한복음 16:24",
  theme: "LOA",
  head: "그리스도인의 확신",
  subhead: "",
  title: "2. 기도응답의 확신",
  contents: "지금까지는 너희가 내 이름으로 아무것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라"
},
{
  chapverse: "고린도전서 10:13",
  theme: "LOA",
  head: "그리스도인의 확신",
  subhead: "",
  title: "3. 승리의 확신",
  contents: "사람이 감당할 시험밖에는 너희에게 당한것이 없나니 오직 하나님은 미쁘사 너희가 감당치 못할 시험당함을 허락지 아니하시고 시험당할 즈음에 또한 피할길을 내사 너희로 능히 감당하게 하시느니라"
},
{
  chapverse: "요한일서 1:9",
  theme: "LOA",
  head: "그리스도인의 확신",
  subhead: "",
  title: "4. 사죄의 확신",
  contents: "만일 우리가 우리 죄를 자백하면 저는 미쁘시고 의로우사 우리 죄를 사하시며 모든 불의에서 우리를 깨끗케 하실 것이요"
},
{
  chapverse: "잠언 3:5~6",
  theme: "LOA",
  head: "그리스도인의 확신",
  subhead: "",
  title: "5. 인도의 확신",
  contents: "너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라"
}]

const PracticingPage = () => {

  return (
    <>
      <HomeButtonHeader label={"점검중단"} path={"/menu"} />
      <PracticeContentsList verses={verses}/>
      <h3>&nbsp;</h3>
      <PracticingFooter len={1} label={["메뉴 화면으로"]} path={"/menu"} />
    </>
  );
};

export default PracticingPage;
