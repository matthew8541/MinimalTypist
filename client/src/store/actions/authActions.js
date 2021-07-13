const axios = require("axios");

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