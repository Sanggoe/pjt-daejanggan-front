import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // addvalidation

    fetch(
      //"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCX5jBkSYRYEud58rSNaK7xJ_OWCxGpROo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h2>비밀번호 변경</h2>
      <div className={styles.control}>
        <label htmlFor="id">id</label>
        <label className={styles.control_input}>Sanggoe</label>
      </div>
      <div className={styles.control}>
        <label htmlFor="name">name</label>
        <label className={styles.control_input}>박상민</label>
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
