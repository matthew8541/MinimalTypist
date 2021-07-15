const axios = require("axios");
// const API = axios.create({ baseURL: 'http://localhost:5000' });
// console.log(API)
// API.defaults.headers.common['Authorization'] = 123;

export const loginAction = async (authData) => {
  try {
    const res = await axios.post('/login', authData);
    console.log(res);
    return res
  } catch (error) {
    // console.log(error)
  }
}

export const registerAction = async (authData) => {
  try {
    const res = await axios.post('/register', authData)
    if (res.status === 201) {
      return true
    }
  } catch (error) {
    // console.log(error)
    return false
  }
}

export const checkLoggedIn = async () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }
  try {
    const tokenResponse = await axios.post('/tokenIsValid', { Headers: { "x-auth-token": token } });
    if (tokenResponse.data) {
      const userRes = await axios.get("/users", {
        headers: { "x-auth-token": token },
      });
      return {
        token,
        user: userRes.data.user
      };
    }
  } catch (error) {
    console.log(error);
  }
}