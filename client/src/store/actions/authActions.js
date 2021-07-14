const axios = require("axios");
// const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });


export const loginAction = async (authData) => {
  try {
    const res = await axios.post('/login', authData);
    // console.log("loginAction: ", res)
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