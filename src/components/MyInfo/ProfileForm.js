import axios from "axios";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import authHeader from "../../api/auth-header";
import AuthContext from "../../store/auth-context";
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const API_URL = "/api/user";
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const newPasswordInputCheckRef = useRef();

  const checkingPassword = () => {
    if (newPasswordInputRef.current.value === newPasswordInputCheckRef.current.value) {
      return true;
    } else {
      return false;
    }
  }

  const changePasswordHandler = (e) => {
    if (checkingPassword()) {
      changePassword(e);
    } else {
      e.preventDefault();
      alert("New Password가 다릅니다!");
    }
  };

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
          history.replace("/menu");
          return response;
        }
      })
      .catch((err) => {
        /***********************/
        console.log(JSON.stringify(err));
        alert("서버 오류 발생, 로그아웃 후 다시 이용해주세요.");
      });
  };

  return (
    <form className={styles.form} onSubmit={changePasswordHandler}>
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
      <div className={styles.control}>
        <label htmlFor="new-password-check">Input New Password Again</label>
        <input
          type="password"
          id="new-password-check"
          minLength="4"
          ref={newPasswordInputCheckRef}
        />
      </div>
      <div className={styles.action}>
        <button>비밀번호 변경</button>
      </div>
    </form>
  );
};

export default ProfileForm;
