const axios = require("axios");

export const loginAction = async (authData) => {
  await axios.post('/login', authData)
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(err)});
}

export const registerAction = async (authData) => {
  await axios.post('/register', authData)
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(err)});
}