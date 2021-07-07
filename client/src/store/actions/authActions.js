const axios = require("axios");

export const loginAction = async (username, password) => {
  await axios.post('/login', {
    username,
    password
  })
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(err)});
}

export const registerAction = async (username, email, password) => {
  await axios.post('/register', {
    username,
    email,
    password
  })
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(err)});
}