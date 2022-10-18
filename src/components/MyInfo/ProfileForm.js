import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import authHeader from "../../api/auth-header";
import AuthContext from "../../store/auth-context";
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const API_URL = "http://192.168.5.40:8080/api";
  // const [username, setUsername] = useState("");
  // const [nickname, setNickname] = useState("");
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const changePassword = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    const payload = {
      username: authCtx.username,
      password: enteredNewPassword,
      nickname: authCtx.nickname,
    };

    axios
      .post(API_URL + "/change-password", payload, { headers: authHeader() })
      .then((response) => {
        /***********************/
        console.log("response : " + JSON.stringify(response));

        if (response.status === 200) {
          alert("비밀번호 변경 성공!");
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        console.log(JSON.stringify(err));
        alert("비밀번호 변경은 아직 에러가 남\n서버에서 DB 저장 쪽 문제인듯. 해결중!!");
      });
  };

  return (
    <form className={styles.form} onSubmit={changePassword}>
      <h2>비밀번호 변경</h2>
      <div className={styles.control}>
        <label htmlFor="id">id</label>
        <label className={styles.control_input}>{authCtx.username}</label>
      </div>
      <div className={styles.control}>
        <label htmlFor="name">name</label>
        <label className={styles.control_input}>{authCtx.nickname}</label>
      </div>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="4"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
