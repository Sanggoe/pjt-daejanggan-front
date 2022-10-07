import axios from "axios"

const API_URL = "http://localhost:8080/api/";

const AuthService = () => {
    const register = (username, password, name) => {
        return  axios.post(API_URL + 'signup', {
            username, password, name
        })
    }
}

export default AuthService;