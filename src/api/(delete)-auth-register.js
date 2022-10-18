import axios from "axios";

// 회원가입 지금 안쓰고 있음....................
const authRegister = (username, password, nickname) => {
  const API_URL = "http://localhost:8080/api/signup";

  axios
    .post(API_URL, {
      username: username,
      password: password,
      nickname: nickname,
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        alert("회원가입 성공!");
        return true;
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 400) {
        alert("ID/PW는 3자 이상 입력해주세요");
      } else if (err.response.status === 500) {
        alert("이미 존재하는 ID 입니다.");
      }
    });
};

export default authRegister;
