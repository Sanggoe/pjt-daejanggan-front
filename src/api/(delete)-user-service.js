import axios from "axios";
import authHeader from "./auth-header";

const useService = (API_URL, ) => {
    
    const getCheckingVerses = () => {
        return axios.post(
          API_URL + "checking-verses",
          {
            //...
          },
          {
            headers: authHeader,
          }
        );
    }
    
  const getMyUserInfo = () => {
  
  }
};

// username: username,
//         password: password,
//         name: name,
//       })
//       .then((response) => {
//         if (response.ok) {
//           console.log(response.json());
//           history.replace("/");

//           return response.json();
//         } else {
//           return response.json().then((data) => {
//             let errorMessage = "회원가입 실패!";
//             if (data.message) {
//               errorMessage = data.error.message;
//             }
//             throw new Error(errorMessage);
//           });
//         }
//       })
//       .catch((err) => {
//         alert(err.message);
//       });


export default useService;