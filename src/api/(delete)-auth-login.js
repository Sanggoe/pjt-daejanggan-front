import axios from "axios";

// 로그인
const authLogin = (API_URL, payload) => {
  axios
    .post(API_URL, payload)
    .then((response) => {
      /***********************/
      console.log("response : " + JSON.stringify(response.data));
      return response.data;
    })
    .catch((err) => {
      /***********************/
      // console.log(JSON.stringify(err))
      if (err.response.status === 400) { // valid error 3글자 이상
        alert(err.response.data.fieldErrors[0].defaultMessage);
      } else if (err.response.status === 401) { // 틀린 인증정보
        alert("ID 또는 PW를 다시 입력하세요");
      }
    });
};

export default authLogin;